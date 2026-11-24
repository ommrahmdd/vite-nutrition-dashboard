import { Upload } from "antd";
// import Dragger from "antd/es/upload/Dragger";
import React from "react";
import { useTranslation } from "react-i18next";
import { FiUploadCloud } from "react-icons/fi";
import Instructions from "../../components/instructions/Instructions";
import Loading from "../../components/Ui/loading/Loading";
import Header from "../../layouts/header/Header";
import { uploadImage } from "../../cloudinary";
import { addPartner, updatePartner } from "../../services/partners";
import { useAddPartner } from "./AddPartnerVm";

export default function AddPartner() {
  const { t } = useTranslation();
  const { props, imgs, loading, handleLoadingFalse, handleLoadingTrue } =
    useAddPartner();

  const { Dragger } = Upload;
  return (
    <div>
      {/* Header */}
      <Header title={t("addPartner.header")} />
      {/* Instructions */}
      <div className="">
        <Instructions
          title={t("addPartner.instructions.title")}
          items={t("addPartner.instructions.items", { returnObjects: true })}
        />
      </div>
      {/* Upload */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLoadingTrue();
          // Get Doc id from firebase
          addPartner().then((partnerId) => {
            uploadImage(imgs.img as any)
              .then((url) => {
                return updatePartner(partnerId, url);
              })
              .then(() => {
                handleLoadingFalse();
              });
          });
        }}
      >
        <div className="my-10 md:w-1/3 md:mx-auto">
          <Dragger {...props}>
            <div className="flex flex-col items-center gap-y-2 py-3">
              <div className="">
                <FiUploadCloud className="text-4xl text-greenColorLight lg:text-5xl" />
              </div>
              <p className="font-cairo font-medium">
                {t("addPartner.upload.title")}
              </p>
            </div>
          </Dragger>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-greenColor py-2 px-3 rounded-lg text-white "
          >
            Add / أضـف
          </button>
        </div>
      </form>
      {/* Loading */}
      {loading && <Loading />}
    </div>
  );
}
