import { useContext } from "react";
import customize from "../assets/customize.png";
import customizeDark from "../assets/customizeDark.png";
import customizeIcon from "../assets/customizeicon.svg";
import ThemeContext from "../context/ThemeContext";
const Customize = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className="container mx-auto px-5 xl:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-[518px] order-1 md:order-none">
          {currentTheme === "light" ? (
            <img loading="lazy" className="w-full" src={customize} alt="" />
          ) : (
            <img loading="lazy" className="w-full" src={customizeDark} alt="" />
          )}
        </div>
        <div className="order-2 md:order-none">
          <div className="flex items-center gap-4 sm:text-2xl text-lg font-medium sm:mb-6 mb-3">
            <img loading="lazy" className="sm:w-10 w-7" src={customizeIcon} alt="" />
            <p>Clever Notification</p>
          </div>
          <p className="sm:text-base text-sm lg:max-w-[535px] w-full">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customize;
