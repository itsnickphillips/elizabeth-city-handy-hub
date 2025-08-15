-- Create contact_submissions table to store form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  service_address TEXT,
  service_type TEXT,
  project_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading submissions (admin only through dashboard)
CREATE POLICY "No public read access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Create index for better performance on created_at queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);