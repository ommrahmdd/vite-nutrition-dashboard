import React from "react";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { useSidebar } from "./SidebarVm";
import { context } from "../../app/context";
import "./sidebar.css";
export default function Sidebar() {
  const { i18n } = useTranslation();
  const { items, handleItemClick } = useSidebar();
  const { collapse, handleCollapse }: any = React.useContext(context);
  return (
    <div className="flex w-full">
      <div
        className={`sticky top-0 h-[100vh]   z-30 bg-white capitalize   ${
          i18n.language === "en" ? "left-0" : "right-0 "
        } ${collapse ? "w-auto" : "w-[10rem] md:w-[12rem] lg:w-[15rem]"}`}
      >
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
          } `}
        />
      </div>
      {/* Outler */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
