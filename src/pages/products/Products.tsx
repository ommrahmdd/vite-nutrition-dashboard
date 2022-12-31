import { Table } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getProducts } from "../../services/products";
import useProducts from "./ProductsVm";
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
      <div className="p-10 ">
        <Table
          dataSource={products}
          columns={i18n.language === "en" ? columns_en : columns_ar}
          loading={loading}
          rowKey={(record) => record._id}
          size="small"
          scroll={{
            x: 400,
          }}
          style={{
            fontFamily: `${i18n.language === "ar" ? "Cairo" : "Poppins"}`,
          }}
        />
      </div>
    </div>
  );
}
