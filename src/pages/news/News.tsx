import { Table } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getNews } from "../../services/news";
import { useNews } from "./NewsVm";
import "./news.css";
export default function News() {
  const { i18n } = useTranslation();
  const {
    handleLoadingFalse,
    handleLoadingTrue,
    loading,
    data,
    column_en,
    column_ar,
    handleUpdateData,
  } = useNews();

  useEffect(() => {
    handleLoadingTrue();
    getNews().then((data: any) => {
      handleLoadingFalse();
      handleUpdateData(data);
    });
  }, []);

  return (
    <div>
      <div className="News p-5">
        <Table
          dataSource={data}
          loading={loading}
          tableLayout="auto"
          size="small"
          pagination={{
            position: ["bottomCenter"],
            pageSize: 5,
          }}
          columns={i18n.language === "en" ? column_en : column_ar}
          scroll={{ x: 400 }}
        />
      </div>
    </div>
  );
}
