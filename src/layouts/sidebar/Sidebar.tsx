import React from "react";
import { Menu, Button } from "antd";
import { useTranslation } from "react-i18next";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { useSidebar } from "./SidebarVm";
import logoImg from "./../../assets/imgs/logo.png";
import "./sidebar.css";
export default function Sidebar() {
  const { i18n } = useTranslation();
  const { items, sidebarCollapse, handleItemClick, handleCollapse } =
    useSidebar();
  // md:min-w-[8rem] lg:min-w-[13rem]
  return (
    <div
      className={`fixed top-0 h-full   z-30 bg-white capitalize   ${
        i18n.language === "en" ? "left-0" : "right-0 "
      }`}
    >
      {/* Logo */}
      <div
        className={` items-center justify-center my-5 transition-all duration-300 ease-in-out ${
          sidebarCollapse ? "hidden" : "flex"
        }`}
      >
        <img src={logoImg} alt="logo" className="w-36" />
      </div>
      <button
        onClick={handleCollapse}
        className="text-black m-3 text-2xl p-2 shadow-md rounded-lg"
      >
        {sidebarCollapse ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
      </button>
      <Menu
        items={items}
        onClick={handleItemClick}
        inlineCollapsed={sidebarCollapse}
        mode="inline"
        defaultSelectedKeys={["1"]}
        className={`h-full py-10    text-xl ${
          i18n.language === "ar" ? "sidebar-ar" : "sidebar-en"
        }`}
      />
    </div>
  );
}
