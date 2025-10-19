import AboutSection from "@/components/landing/about-section";
import Footer from "@/components/layouts/main/footer";
import CampaignsSection from "@/components/landing/campaigns";
import GuaranteedDepartureTours from "@/components/landing/guaranteed-departure-tours";
import FeaturedFairs from "@/components/landing/featured-fairs";
import HeroSection from "@/components/landing/hero-section";
import BlogsSection from "@/components/landing/blogs-section";
import { getAllBlogs } from "./_actions/blogs";
import WhatsAppButton from "@/components/layouts/main/whatsapp-button";
import GoUpButton from "@/components/layouts/main/go-up-button";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    // category?: string;
    // search?: string;
    fuarKategori?: string;
    fuarTur?: string;
    blogKategori?: string;
    search?: string;
  }>;
}) => {
  // const search = (await searchParams).search;
  // const category = (await searchParams).category;
  const blogs = await getAllBlogs();

  return (
    <section>
      <HeroSection />
      <CampaignsSection />
      <GuaranteedDepartureTours />
      <AboutSection />
      <FeaturedFairs fuarKategori={(await searchParams)?.fuarKategori} />
      <BlogsSection blogposts={blogs} />
      <Footer />

      {/* <CategoriesList category={category} search={search} />

      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={category} search={search} />
      </Suspense> */}

      <WhatsAppButton />
      <GoUpButton />
    </section>
  );
};

export default HomePage;
