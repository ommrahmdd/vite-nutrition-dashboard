import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function StepsControllers({
  handlePrev,
  handleNext,
  active,
}: {
  handlePrev: () => void;
  handleNext: () => void;
  active: number;
}) {
  return (
    <div className="w-full flex items-center justify-center gap-x-5">
      <button
        type="button"
        className="p-4 text-xl rounded-full border border-greenColor text-white bg-greenColor transition-all duration-300 ease-in-out hover:opacity-30"
        disabled={active === 1 ? true : false}
        onClick={handlePrev}
      >
        <IoIosArrowBack />
      </button>
      <button
        type="button"
        className="p-4 text-xl rounded-full border border-greenColor text-white bg-greenColor transition-all duration-300 ease-in-out hover:opacity-30"
        disabled={active === 3 ? true : false}
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
