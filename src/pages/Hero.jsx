import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import downhero from "../assets/downhero.svg";
import downheroDark from "../assets/downheroDark.svg";
import hero from "../assets/hero.svg";
import heroDark from "../assets/heroDark.svg";
import ThemeContext from "../context/ThemeContext";
import StarIcon from "../components/StarIcon";
const Hero = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto">
      <StarIcon
        fill={currentTheme === "light" ? "black" : "white"}
        className="w-8 sm:w-12 absolute lg:top-3/4 lg:left-56 sm:top-2/3 sm:left-36  top-[60%] left-24"
      />
      <StarIcon
        fill={currentTheme === "light" ? "black" : "white"}
        className="w-8 sm:w-12 absolute lg:left-10 left-0"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center lg:p-0 p-5">
        <div className="flex flex-col gap-5 pl-5 xl:pl-0">
          <p className="text-4xl font-extrabold heading z-10 md:text-6xl text-center md:text-left">
            Make The Best Financial Decisions
          </p>
          <p className="text-sm md:text-base text-center md:text-left">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquot
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Port-titor.
          </p>
          <div className="flex items-center gap-5 justify-center md:justify-normal">
            <button className="rounded-md flex items-center gap-3 text-sm sm:text-base border-none px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-black hover:outline dark:hover:bg-transparent dark:hover:text-white dark:hover:outline">
              Get Started <BsArrowRight className="sm:text-xl text-base" />
            </button>
            <div className="flex gap-3 cursor-pointer items-center ">
              <MdSlowMotionVideo className="sm:text-3xl text-xl" />
              <p className="sm:text-xl text-base font-medium">Watch</p>
            </div>
          </div>
          <div className="md:w-[30rem] w-full lg:mx-0 mx-auto">
            {currentTheme === "light" ? (
              <img loading="lazy" className="w-full" src={downhero} alt="" />
            ) : (
              <img loading="lazy" className="w-full" src={downheroDark} alt="" />
            )}
          </div>
        </div>

        <div className="w-full md:w-[70rem] relative hidden lg:block 2xl:-right-[9.99rem] xl:-top-16 z-0 -right-0 -top-5">
          {currentTheme === "light" ? (
            <img loading="lazy" className="w-full" src={hero} alt="hero img" />
          ) : (
            <img loading="lazy" className="w-full" src={heroDark} alt="hero img" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
