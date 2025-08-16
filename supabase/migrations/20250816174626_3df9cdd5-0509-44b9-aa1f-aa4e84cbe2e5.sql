-- Fix critical security issues identified in the security scan

-- 1. Remove the conflicting RLS policy that blocks all anonymous inserts
DROP POLICY IF EXISTS "block_anon_inserts" ON contact_submissions;

-- 2. Update the database function to include secure search_path
CREATE OR REPLACE FUNCTION public.notify_new_contact()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public, pg_temp
AS $function$
declare
  payload json;
begin
  payload := json_build_object(
    'first_name', NEW.first_name,
    'last_name', NEW.last_name,
    'phone', NEW.phone,
    'email', NEW.email,
    'service_address', NEW.service_address,
    'service_type', NEW.service_type,
    'project_description', NEW.project_description
  );

  -- Call the edge function
  perform net.http_post(
    url := 'https://yylgysaoxzwgzwudphcc.supabase.co/functions/v1/send-email',
    headers := json_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5bGd5c2FveHp3Z3p3dWRwaGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNjgwMTIsImV4cCI6MjA3MDg0NDAxMn0.5d5cdr3e7Biheoc4dRvvP71c_G9BFt-pT2OHwpdCUbM'
    ),
    body := payload
  );

  return NEW;
end;
$function$;