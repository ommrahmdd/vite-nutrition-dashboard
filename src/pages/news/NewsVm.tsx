import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { INews } from "../../model/INew";
import { deleteNew } from "../../services/news";
import "react-lazy-load-image-component/src/effects/blur.css";
export function useNews() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<INews[]>();
  const handleLoadingTrue = () => {
    setLoading(true);
  };
  const handleLoadingFalse = () => {
    setLoading(false);
  };
  let handleUpdateData = (snapShot: INews[]) => {
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
      render: (image) => (
        <LazyLoadImage
          src={image}
          alt="image"
          className="w-36 h-36 object-cover"
          effect="blur"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "en",
      render: (en) => (
        <p className="font-medium max-w-xl  md:text-xl">{en.title}</p>
      ),
    },
    {
      title: "Type",
      dataIndex: "en",
      render: (en) => (
        <p
          className={`font-medium capitalize inline-block p-1 rounded-lg bg-orangeColorLight text-white ${
            en.type === "community"
              ? "bg-greenColorLight"
              : en.type === "blog"
              ? "bg-greyColorLight"
              : null
          }`}
        >
          {en.type}
        </p>
      ),
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
        <button
          className="text-red-600 text-xl"
          onClick={() => {
            deleteNew(_id);
          }}
        >
          <RiDeleteBin6Fill />
        </button>
      ),
    },
  ];
  const column_ar: ColumnsType<INews> = [
    {
      title: "الرقم المميز",
      dataIndex: "_id",
      responsive: ["lg"],
      render: (_id) => <p className="font-medium">{_id}</p>,
    },
    {
      title: "الصورة",
      dataIndex: "img",
      responsive: ["xs", "sm", "md", "lg"],
      render: (image) => (
        <LazyLoadImage
          src={image}
          alt="image"
          className="w-36 h-36 object-cover"
          effect="blur"
        />
      ),
    },
    {
      title: "العنوان",
      dataIndex: "ar",
      render: (ar) => (
        <p className="font-medium max-w-xl md:text-xl">{ar.title}</p>
      ),
    },
    {
      title: "النوع",
      dataIndex: "ar",
      render: (ar) => (
        <p
          className={`font-medium capitalize inline-block p-1 rounded-lg bg-orangeColorLight text-white ${
            ar.type === "اجتماعي"
              ? "bg-greenColorLight"
              : ar.type === "مدونة"
              ? "bg-greyColorLight"
              : null
          }`}
        >
          {ar.type}
        </p>
      ),
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
        <button
          className="text-red-600 text-xl"
          onClick={() => {
            deleteNew(_id);
          }}
        >
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
