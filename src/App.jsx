import Features from "./pages/Features";
import GetStarted from "./pages/GetStarted";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import ChooseUs from "./pages/ChooseUs";
import Customize from "./pages/Customize";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import NavbarDefault from "./components/NavBar";
import Switcher from "./components/Switcher";
import ThemeContextWrapper from "./context/ThemeContextWrapper ";

const App = () => {
  return (
    <ThemeContextWrapper>
      <div className=" bg-white dark:bg-black transition duration-300 text-black dark:text-zinc-200">
        <Switcher />
        <NavbarDefault />
        <Hero />
        <Features />
        <ChooseUs />
        <Customize/>
        <Testimonials/>
        <Faq/>
        <GetStarted />

        <Footer />
      </div>
    </ThemeContextWrapper>
  );
};

export default App;
