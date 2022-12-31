import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IProduct } from "../../model/IProduct";

export default function useProducts() {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>();
  const columns_en: ColumnsType<IProduct> = [
    {
      title: "Id",
      dataIndex: "_id",
      responsive: ["lg"],
      render: (_id) => <p className="font-semibold">{_id}</p>,
    },
    {
      title: "Image",
      dataIndex: "images",
      responsive: ["xs", "sm", "md", "lg"],
      render: (images) => (
        <LazyLoadImage
          src={images[0]}
          alt="productImage"
          className="w-12 h-12 object-contain md:w-20 md:h-20 "
          effect="blur"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "en",
      responsive: ["sm", "md", "lg"],
      render: (en) => (
        <p className="font-semibold text-orangeColor lg:text-xl">{en.title}</p>
      ),
    },
    {
      title: "Brief",
      dataIndex: "en",
      responsive: ["md", "lg"],
      render: (en) => <p className="font-semibold">{en.midTitle}</p>,
    },
    {
      title: "Types",
      dataIndex: "en",
      responsive: ["md", "lg"],
      render: (en) => (
        <ul className="list-inside list-decimal capitalize">
          {en.types.map((_type: string, index: number) => (
            <li className="font-semibold" key={index}>
              {_type}
            </li>
          ))}
        </ul>
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
        <button className="text-red-600 text-xl">
          <RiDeleteBin6Fill />
        </button>
      ),
    },
  ];
  const columns_ar: ColumnsType<IProduct> = [
    {
      title: "الرقم المميز",
      dataIndex: "_id",
      responsive: ["lg"],
      render: (_id) => {
        console.log("en", _id);
        return `${_id}`;
      },
    },
    {
      title: "صورة المنتج",
      dataIndex: "images",
      responsive: ["xs", "sm", "md", "lg"],
      render: (images) => (
        <LazyLoadImage
          src={images[0]}
          alt="productImage"
          className="w-12 h-12 object-contain md:w-20 md:h-20 "
          effect="blur"
        />
      ),
    },
    {
      title: "اسم الصنف",
      dataIndex: "ar",
      responsive: ["sm", "md", "lg"],
      render: (ar) => `${ar.title}`,
    },
    {
      title: "وصف مختصر",
      dataIndex: "ar",
      responsive: ["md", "lg"],
      render: (ar) => <p>{ar.midTitle}</p>,
    },
    {
      title: "انواع المستخدمين",
      dataIndex: "en",
      responsive: ["md", "lg"],
      render: (en) => (
        <ul className="list-inside list-decimal capitalize">
          {en.types.map((_type: string, index: number) => (
            <li className="font-semibold" key={index}>
              {_type}
            </li>
          ))}
        </ul>
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
      title: "مسح المنتج",
      dataIndex: "_id",
      responsive: ["xs", "md", "lg"],
      render: (_id) => (
        <button className="text-red-600 text-xl">
          <RiDeleteBin6Fill />
        </button>
      ),
    },
  ];
  const handleAllProducts = (products: IProduct[]) => {
    setProducts(products);
  };
  return {
    products,
    handleAllProducts,
    columns_en,
    columns_ar,
    loading,
    setLoading,
  };
}
