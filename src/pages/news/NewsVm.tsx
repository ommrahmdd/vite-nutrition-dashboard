import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
export type INews = {
  _id: string;
  img: string;
  en: {
    title: string;
    midTitle: string;
    details: string;
    type: string;
  };
  ar: {
    title: string;
    midTitle: string;
    details: string;
    type: string;
  };
};
export function useNews() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState();
  const handleLoadingTrue = () => {
    setLoading(true);
  };
  const handleLoadingFalse = () => {
    setLoading(false);
  };
  let handleUpdateData = (snapShot: any) => {
    setData(snapShot);
  };
  const column_en: ColumnsType<INews> = [
    {
      title: "Id",
      dataIndex: "_id",
      responsive: ["lg"],
      render: (_id) => <p className="font-medium">{_id}</p>,
    },
    {
      title: "Image",
      dataIndex: "img",
      responsive: ["xs", "sm", "md", "lg"],
      render: (image) => <img src={image} alt="image" className="w-10 h-10" />,
    },
    {
      title: "Title",
      dataIndex: "en",
      render: (en) => <p className="font-medium">{en.title}</p>,
    },
    {
      title: "Type",
      dataIndex: "en",
      render: (en) => <p className="font-medium capitalize">{en.type}</p>,
    },
    {
      title: "Edit",
      dataIndex: "_id",
      responsive: ["xs", "md", "lg"],
      render: (_id) => (
        <Link to={`/edit/${_id}`} className="text-blue-700 text-xl">
          <MdModeEditOutline />
        </Link>
      ),
    },
    {
      title: "Delete",
      dataIndex: "_id",
      responsive: ["xs", "md", "lg"],
      render: (_id) => (
        <button className="text-red-600 text-xl">
          <RiDeleteBin6Fill />
        </button>
      ),
    },
  ];
  const column_ar: ColumnsType<INews> = [
    {
      title: "Id",
      dataIndex: "_id",
      responsive: ["lg"],
      render: (_id) => <p className="font-medium">{_id}</p>,
    },
    {
      title: "Image",
      dataIndex: "img",
      responsive: ["xs", "sm", "md", "lg"],
      render: (image) => <img src={image} alt="image" className="w-10 h-10" />,
    },
    {
      title: "Title",
      dataIndex: "ar",
      render: (ar) => <p className="font-medium">{ar.title}</p>,
    },
    {
      title: "Type",
      dataIndex: "ar",
      render: (ar) => <p className="font-medium capitalize">{ar.type}</p>,
    },
    {
      title: "تعديل",
      dataIndex: "_id",
      responsive: ["xs", "md", "lg"],
      render: (_id) => (
        <Link to={`/edit/${_id}`} className="text-blue-700 text-xl">
          <MdModeEditOutline />
        </Link>
      ),
    },
    {
      title: "مسح",
      dataIndex: "_id",
      responsive: ["xs", "md", "lg"],
      render: (_id) => (
        <button className="text-red-600 text-xl">
          <RiDeleteBin6Fill />
        </button>
      ),
    },
  ];
  return {
    loading,
    data,
    handleLoadingFalse,
    handleLoadingTrue,
    handleUpdateData,
    column_en,
    column_ar,
  };
}
