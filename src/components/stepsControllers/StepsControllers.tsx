import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
export default function StepsControllers({
  handlePrev,
  handleNext,
  active,
}: {
  handlePrev: () => void;
  handleNext: () => void;
  active: number;
}) {
  const { i18n } = useTranslation();
  return (
    <div className="w-full flex items-center justify-center gap-x-5 my-10">
      <button
        type="button"
        className={`p-4 text-xl rounded-full border border-greenColor text-white bg-greenColor transition-all duration-300 ease-in-out hover:opacity-30 ${
          active === 1 && "opacity-30"
        }`}
        disabled={active === 1 ? true : false}
        onClick={handlePrev}
      >
        {i18n.language === "en" ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
      <button
        type="button"
        className={`p-4 text-xl rounded-full border border-greenColor text-white bg-greenColor transition-all duration-300 ease-in-out hover:opacity-30 ${
          active === 3 && "opacity-30"
        }`}
        disabled={active === 3 ? true : false}
        onClick={handleNext}
      >
        {i18n.language === "en" ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </button>
    </div>
  );
}
