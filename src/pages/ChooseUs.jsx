import { useContext } from "react";
import bell from "../assets/Bell.svg";
import choose from "../assets/chose.png";
import chooseDark from "../assets/choseDark.png";
import ThemeContext from "../context/ThemeContext";

const ChooseUs = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className="container mx-auto px-5 xl:px-0" id="advantages">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="order-2 lg:order-none">
          <p className="uppercase text-primary text-lg font-medium">
            Advantages
          </p>
          <h2 className="sm:text-4xl text-2xl font-semibold mb-3">
            Why Choose Uifry?
          </h2>
          <div className="flex items-center gap-4 sm:text-2xl text-lg font-medium sm:mb-6 mb-3">
            <img loading="lazy" className="sm:w-10 w-7" src={bell} alt="" />
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
        <div className="max-w-[518px] md:order-none order-1">
          {currentTheme === "light" ? (
            <img loading="lazy" className="w-full" src={choose} alt="" />
          ) : (
            <img loading="lazy" className="w-full" src={chooseDark} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
