import { Spin } from "antd";
import React from "react";
import logoImg from "./../../../assets/imgs/logo.png";
import "./loading.css";
export default function Loading() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white flex justify-center items-center">
      {/* <img src={logoImg} alt="logoImg" /> */}
      <Spin size="large" />
    </div>
  );
}
