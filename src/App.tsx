import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import GetStarted from "@/components/GetStarted";
import Companies from "@/components/Companies";
import Testimonials from "@/components/Testimonials";
import Intro from "./components/Intro";
const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <main>
        <Companies />
        <Testimonials />
        <Services />
        <Faq />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
};

export default App;
