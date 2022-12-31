import React from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Outlet } from "react-router-dom";
import "./nav.css";
import { useNav } from "./NavVm";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const { handleChange, options } = useNav();
  return (
    <div>
      <nav
        className={`w-full py-5 px-2 shadow-md ${
          i18n.language === "en" ? "pl-20" : "pr-20"
        }`}
      >
        <Select
          defaultValue={i18n.language === "en" ? "English" : i18n.language}
          options={options}
          onChange={handleChange}
          className={`${i18n.language === "ar" && "nav-selector-ar"}`}
        />
      </nav>
      <div
        className={`mt-5  ${
          i18n.language === "en" ? "md:pl-28 md:pr-20" : "md:pr-28 md:pl-20"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
