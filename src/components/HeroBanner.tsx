const HeroBanner = () => {
  return (
    <section 
      className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] bg-cover bg-center bg-no-repeat relative md:bg-cover sm:bg-contain"
      style={{
        backgroundImage: "url('https://yylgysaoxzwgzwudphcc.supabase.co/storage/v1/object/public/assets/HPS-HeroImage.png')"
      }}
    >
    </section>
  );
};

export default HeroBanner;