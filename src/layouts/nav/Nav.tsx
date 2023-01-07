import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Outlet } from "react-router-dom";
import { useNav } from "./NavVm";
import "./nav.css";

export default function Nav() {
  const { i18n } = useTranslation();
  const { handleChange, options } = useNav();
  return (
    <div className="w-full">
      <nav className={`w-full py-5 shadow-md `}>
        <Select
          defaultValue={i18n.language === "en" ? "English" : i18n.language}
          options={options}
          onChange={handleChange}
          className={`${i18n.language === "ar" && "nav-selector-ar"}`}
        />
      </nav>
      <div className={`mt-5`}>
        <Outlet />
      </div>
    </div>
  );
}
