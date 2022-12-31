import { Table } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../components/Ui/loading/Loading";
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
    getNews().then((data) => {
      handleLoadingFalse();
      handleUpdateData(data);
    });
  }, []);

  return (
    <div>
      <div className="News">
        <Table
          dataSource={data}
          loading={loading}
          columns={i18n.language === "en" ? column_en : column_ar}
          scroll={{ x: 400 }}
          className={`${i18n.language === "ar" ? "font-cairo" : ""}`}
        />
      </div>
      {/* <div className="">{loading === true && <Loading />}</div> */}
    </div>
  );
}
