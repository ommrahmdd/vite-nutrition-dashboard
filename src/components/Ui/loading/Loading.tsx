import React from "react";
import logoImg from "./../../../assets/imgs/logo.png";
export default function Loading() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white flex justify-center items-center">
      <img src={logoImg} alt="logoImg" />
    </div>
  );
}
