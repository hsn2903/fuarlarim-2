import Footer from "@/components/layouts/main/footer";
import MainNav from "@/components/layouts/main/main-nav";
import WhatsAppButton from "@/components/layouts/main/whatsapp-button";
// import Navbar from "@/components/layouts/main/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <MainNav />
      <main className="">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
