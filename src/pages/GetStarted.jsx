import getstarted from "../assets/getstarted.svg";
import circle from "../assets/circle.svg";
import bglinear from "../assets/bglinear.svg";
import { AiFillApple } from "react-icons/ai";
import StarIcon from "../components/StarIcon";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const GetStarted = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto relative px-5 xl:px-0 z-10">
      <StarIcon
        fill={currentTheme === "light" ? "black" : "white"}
        className="w-10 sm:w-fit absolute xl:-right-32 lg:-top-32 md:-top-24 -top-16 right-0"
      />
      <img
        className="absolute -top-44 -left-56 z-0 mix-blend-multiply"
        src={bglinear}
        alt=""
      />
      <div className="flex flex-col lg:flex-row lg:justify-between justify-normal  bg-black dark:bg-gray-950 rounded-lg">
        <div className="flex flex-col gap-4 p-2 lg:pl-20 sm:pl-4 relative z-10 lg:items-start items-center lg:pt-0 pt-5 lg:justify-center justify-normal">
          <p className="text-2xl font-bold text-white text-center lg:text-left sm:text-4xl">
            Ready To Get Started?
          </p>
          <p className="text-white text-center lg:text-left text-sm sm:text-base">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
            Vulputate.
          </p>
          <button className="bg-white text-black border-none flex gap-2 items-center capitalize w-fit px-4 py-2 rounded-md hover:bg-transparent hover:text-white hover:outline dark:hover:bg-transparent dark:hover:text-white dark:hover:outline transition duration-500 ease-in-out text-sm sm:text-base">
            Download App
            <AiFillApple className="sm:text-xl text-base" />
          </button>
        </div>
        <img className="relative z-10" src={getstarted} alt="" />
      </div>
      <img className="absolute bottom-0 left-0" src={circle} alt="" />
    </div>
  );
};

export default GetStarted;
