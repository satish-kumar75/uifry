// src/components/Switcher.jsx
import { useContext } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const Switcher = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={() =>
        changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
      className="fixed sm:bottom-5 sm:right-5 bottom-3 right-3 bg-[#ffe7e7] rounded-lg p-2 cursor-pointer transition duration-300 z-30"
    >
      {currentTheme === 'light' ? (
        <MdNightlight className="sm:h-7 sm:w-7 text-black" />
      ) : (
        <MdLightMode className="sm:h-7 sm:w-7 text-orange-500" />
      )}
    </div>
  );
};

export default Switcher;
