import { useContext } from "react";
import StarIcon from "../components/StarIcon";
import ThemeContext from "../context/ThemeContext";
const questions = [
  {
    text: "The best financial accounting app ever!",
    bg: "bg-primary",
    textColor: "text-white",
  },
  { text: "The best financial accounting app ever!", bg: "", textColor: "" },
  {
    text: "The best financial accounting app ever!",
    bg: "bg-primary",
    textColor: "text-white",
  },
  { text: "The best financial accounting app ever!", bg: "", textColor: "" },
  {
    text: "The best financial accounting app ever!",
    bg: "bg-primary",
    textColor: "text-white",
  },
  { text: "The best financial accounting app ever!", bg: "", textColor: "" },
];

const Faq = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-5 xl:px-0 lg:mt-0 mt-7 relative">
      <StarIcon fill={currentTheme === "light" ? "black" : "white"} className="absolute md:left-1/2 top-20 right-0 w-10 sm:w-fit"/>
      <p className="text-primary font-medium text-lg md:text-start text-center">
        Faq
      </p>
      <p className="text-4xl font-bold md:text-start py-4 mb-3 text-center">
        Frequently Asked <br /> Questions
      </p>
      <div className="flex justify-between lg:mb-40 mb-16 gap-4 flex-col md:flex-row">
        {Array(2)
          .fill()
          .map((_, columnIndex) => (
            <div
              className="flex flex-col items-center gap-y-5"
              key={columnIndex}
            >
              {questions
                .slice(columnIndex * 3, columnIndex * 3 + 3)
                .map((question, index) => (
                  <div
                    className={`${question.bg} px-8 py-6 rounded-lg md:max-w-[535px] w-full ${question.textColor}`}
                    key={index}
                  >
                    <h2 className="md:text-[28px] text-2xl leading-8 font-medium mb-2">
                      {question.text}
                    </h2>
                    <p className="text-sm md:text-base">
                      “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                      ultricies. In ultrices malesuada elit mauris.
                    </p>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Faq;
