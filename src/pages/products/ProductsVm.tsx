import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
export type IDataType = {
  _id: string;
  images: any[];
  en: {
    title: string;
    midTitle: string;
    details: string;
    storage: string;
    direction: any[];
    types: any[];
  };
  ar: {
    title: string;
    midTitle: string;
    details: string;
    storage: string;
    direction: any[];
  };
};
export default function useProducts() {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IDataType[]>();
  const columns_en: ColumnsType<IDataType> = [
    {
      title: "Id",
      dataIndex: "_id",
      sorter: true,
      render: (_id) => <p className="font-semibold">{_id}</p>,
    },
    {
      title: "Image",
      dataIndex: "images",
      render: (images) => (
        <img
          src={images[0]}
          alt="productImage"
          className="w-20 h-20 object-contain"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "en",
      render: (en) => (
        <p className="font-semibold text-orangeColor lg:text-xl">{en.title}</p>
      ),
    },
    {
      title: "Brief",
      dataIndex: "en",
      render: (en) => <p className="font-semibold">{en.midTitle}</p>,
    },
    {
      title: "Types",
      dataIndex: "en",
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
      render: (_id) => (
        <Link to={`/edit/${_id}`} className="text-blue-700">
          Edit
        </Link>
      ),
    },
  ];
  const columns_ar: ColumnsType<IDataType> = [
    {
      title: "الرقم المميز",
      dataIndex: "_id",
      sorter: true,
      render: (_id) => {
        console.log("en", _id);
        return `${_id}`;
      },
    },
    {
      title: "صورة المنتج",
      dataIndex: "images",
      render: (images) => (
        <img
          src={images[0]}
          alt="productImage"
          className="w-20 h-20 object-contain"
        />
      ),
    },
    {
      title: "اسم الصنف",
      dataIndex: "ar",
      render: (ar) => `${ar.title}`,
    },
    {
      title: "وصف مختصر",
      dataIndex: "ar",
      render: (ar) => <p>{ar.midTitle}</p>,
    },
    {
      title: "تعديل",
      dataIndex: "_id",
      render: (_id) => (
        <Link to={`/edit/${_id}`} className="text-blue-700">
          Edit
        </Link>
      ),
    },
  ];
  const handleAllProducts = (products: IDataType[]) => {
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
