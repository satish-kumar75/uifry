import subhero from "../assets/subhero.svg";
import subheroDark from "../assets/subheroDark.svg";
import budget from "../assets/Budget.svg";
import b2 from "../assets/b2.svg";
import bglinear2 from "../assets/bglinear2.svg";
import b3 from "../assets/b3.svg";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Features = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto px-5 xl:px-0 relative " id="features">
    <img className="absolute -right-0 xl:-right-[2.66vw] 2xl:-right-[10.4vw] lg:top-20 top-[70%] mix-blend-normal" src={bglinear2} alt="" />
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-full max-w-[512px]">
          {currentTheme === "light" ? (
            <img className="w-full object-cover" src={subhero} alt="" />
          ) : (
            <img className="w-full object-cover" src={subheroDark} alt="" />
          )}
        </div>

        <div className="flex flex-col gap-5 items-start">
          <p className="text-primary font-medium text-lg uppercase items-start">
            Features
          </p>
          <p className="mc:text-4xl text-2xl font-bold items-start">
            Uifry Premium
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={budget} alt="" />
              <p className="md:text-2xl text-xl font-semibold">
                Budgeting Intervals
              </p>
            </div>

            <p className="md:text-base text-sm sm:ml-0 ml-8">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={b2} alt="" />
              <p className="md:text-2xl text-xl font-semibold">
                Budgeting Intervals
              </p>
            </div>

            <p className="md:text-base text-sm sm:ml-0 ml-8">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={b3} alt="" />
              <p className="md:text-2xl text-xl font-semibold">
                Budgeting Intervals
              </p>
            </div>

            <p className="md:text-base text-sm sm:ml-0 ml-8">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
