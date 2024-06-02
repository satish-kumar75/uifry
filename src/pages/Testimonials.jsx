import testimonial from "../assets/testimonial.png";
import testimonialDark from "../assets/testimonialDark.png";
import person from "../assets/person.svg";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Testimonials = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className="container mx-auto px-5 xl:px-0 lg:mt-0 mt-7">
      <p className="text-xl font-medium text-center py-2">Testimonials</p>
      <h2 className="text-center font-bold sm:text-4xl text-2xl">
        What Our Users <br /> Say About Us?
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-[518px]">
          {currentTheme === "light" ? (
            <img className="w-full" src={testimonial} alt="" />
          ) : (
            <img className="w-full" src={testimonialDark} alt="" />
          )}
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl md:text-3xl font-semibold">
            The Best Financial Accounting <br /> App Ever!
          </p>
          <p className="sm:text-base text-sm lg:max-w-[535px] w-full">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="mx-auto md:mx-0 flex flex-col gap-3 items-center sm:items-start">
            <p className="text">Rownok Mahbub</p>
            <img className="h-10" src={person} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
