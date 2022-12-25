import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import type { MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsNewspaper, BsCurrencyExchange } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
type MenuItem = Required<MenuProps>["items"][number];

export function useSidebar() {
  let [sidebarCollapse, setSidebarCollapse] = useState<boolean>(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const location = useLocation();
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    title: string,
    icon?: React.ReactNode
  ): MenuItem => ({ label, key, icon, title } as MenuItem);

  const items: MenuItem[] = [
    getItem(
      (t("sidebar.elements", { returnObjects: true }) as Array<string>)[0],
      "1",
      "/",
      <AiOutlineFundProjectionScreen className="text-3xl" />
    ),
    getItem(
      (t("sidebar.elements", { returnObjects: true }) as Array<string>)[1],
      "2",
      "news",
      <BsNewspaper className="text-3xl" />
    ),
    getItem(
      (t("sidebar.elements", { returnObjects: true }) as Array<string>)[2],
      "3",
      "partners",
      <BsCurrencyExchange className="text-3xl" />
    ),
    getItem(
      (t("sidebar.elements", { returnObjects: true }) as Array<string>)[3],
      "4",
      "addProduct",
      <MdProductionQuantityLimits className="text-3xl" />
    ),
  ];

  let handleCollapse = () => {
    setSidebarCollapse(!sidebarCollapse);
  };
  let handleItemClick = ({ item }: any) => {
    navigate(item.props.title);
  };

  return { items, handleItemClick, sidebarCollapse, handleCollapse };
}
