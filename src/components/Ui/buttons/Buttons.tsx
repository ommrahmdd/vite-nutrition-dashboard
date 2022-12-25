import React from "react";

export function MainBtn({
  text,
  handleClick,
  type,
}: {
  text: string;
  type: "submit" | "button";
  handleClick: () => void;
}) {
  return (
    <button
      type={type}
      className="bg-orangeColorLight py-2 px-6 rounded-xl text-white text-sm transition-all ease-in-out duration-300 hover:opacity-25"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
