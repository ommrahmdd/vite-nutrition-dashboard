import { Table } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getProducts } from "../../services/products";
import useProducts, { IDataType } from "./ProductsVm";
import "./products.css";

export default function Products() {
  const { i18n } = useTranslation();
  const {
    products,
    handleAllProducts,
    columns_en,
    columns_ar,
    loading,
    setLoading,
  } = useProducts();
  useEffect(() => {
    setLoading(true);
    getProducts().then((data: any) => {
      handleAllProducts(data);
      setLoading(false);
      console.log(data);
    });
  }, []);
  return (
    <div>
      <div className="">
        <Table
          dataSource={products}
          columns={i18n.language === "en" ? columns_en : columns_ar}
          loading={loading}
          rowKey={(record) => record._id}
          style={{
            fontFamily: `${i18n.language === "ar" ? "Cairo" : "Poppins"}`,
          }}
        />
      </div>
    </div>
  );
}
