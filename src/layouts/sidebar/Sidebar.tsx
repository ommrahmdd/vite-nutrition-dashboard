import React from "react";
import { Menu, Button } from "antd";
import { useTranslation } from "react-i18next";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { useSidebar } from "./SidebarVm";
import logoImg from "./../../assets/imgs/logo.png";
import "./sidebar.css";
import { context } from "../../app/context";
export default function Sidebar() {
  const { i18n } = useTranslation();
  const { items, sidebarCollapse, handleItemClick } = useSidebar();
  const { collapse, handleCollapse }: any = React.useContext(context);
  // md:min-w-[8rem] lg:min-w-[13rem]
  return (
    <div
      className={`fixed top-0 h-full   z-30 bg-white capitalize   ${
        i18n.language === "en" ? "left-0" : "right-0 "
      }`}
    >
      {/* Logo */}
      {/* <div
        className={` items-center justify-center my-5 transition-all duration-300 ease-in-out ${
          sidebarCollapse ? "hidden" : "flex"
        }`}
      >
        <img src={logoImg} alt="logo" className="w-36" />
      </div> */}
      <button
        onClick={handleCollapse}
        className="text-black m-3 text-2xl p-2 shadow-md rounded-lg"
      >
        {collapse ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
      </button>
      <Menu
        items={items}
        onClick={handleItemClick}
        inlineCollapsed={collapse}
        mode="inline"
        defaultSelectedKeys={["1"]}
        className={`h-full py-10 text-xl ${
          i18n.language === "ar" ? "sidebar-ar" : "sidebar-en"
        } ${collapse === false && "lg:min-w-[20vw]"}`}
      />
    </div>
  );
}
