import React from "react";
import { useTranslation } from "react-i18next";
import { Upload, Button, Input, Select } from "antd";
import { BsUpload } from "react-icons/bs";
import Instructions from "../../components/instructions/Instructions";
import Header from "../../layouts/header/Header";
import { useAddNews } from "./AddNewsVm";
import "./addNews.css";
import StepsControllers from "../../components/stepsControllers/StepsControllers";
import { addNew, addNewImg } from "../../services/news";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/config";
import Loading from "../../components/Ui/loading/Loading";
export default function AddNews() {
  const { t } = useTranslation();
  const {
    activeStep,
    handleDecreaseStep,
    handleIncreaseStep,
    globalForm,
    props,
    handleTxtChange_en,
    options_en,
    handleSelectChange_en,
    handleSelectChange_ar,
    handleTxtChange_ar,
    options_ar,
    loading,
    handleLoadingFalse,
    handleLoadingTrue,
    handleResetState,
  } = useAddNews();
  return (
    <div>
      {/*STYLE: Header */}
      <section>
        <Header title={t("addNewsPage.title")} />
        <Instructions
          title={t("addNewsPage.instructions.title")}
          items={t("addNewsPage.instructions.items", { returnObjects: true })}
        />
      </section>
      {/* STYLE: Form */}
      <form
        className="accent-greenColor"
        onSubmit={(e) => {
          handleLoadingTrue();
          e.preventDefault();
          addNew(globalForm).then((_id) => {
            let imgName = `${(globalForm.img as any).name}${v4()}`;
            let imgRef = ref(storage, `news/${imgName}`);
            uploadBytes(imgRef, globalForm.img as any)
              .then((res) => getDownloadURL(res.ref))
              .then((url) => addNewImg(_id, url))
              .then(() => {
                handleLoadingFalse();
                // TODO: add reset
              });
          });
        }}
      >
        {activeStep === 1 ? (
          <div className="flex flex-col items-start gap-y-5">
            {/* STEP */}
            <div className="my-5 text-2xl text-greenColor lg:text-3xl">
              {
                (
                  t("addNewsPage.instructions.steps", {
                    returnObjects: true,
                  }) as Array<string>
                )[0]
              }
            </div>
            {/* Actual Form */}
            {/* Image */}
            <div className="flex flex-col items-start">
              <label>{t("addNewsPage.form.imageText")}</label>
              <Upload {...props} accept=".png, .jpeg, .jpg" className="my-4">
                <Button
                  icon={<BsUpload />}
                  className="flex items-center gap-x-2 lg:scale-110"
                >
                  Upload
                </Button>
              </Upload>
            </div>
            {/* STEPS controllers */}
            <div className="w-full flex justify-center">
              <StepsControllers
                handleNext={handleIncreaseStep}
                handlePrev={handleDecreaseStep}
                active={activeStep}
              />
            </div>
          </div>
        ) : activeStep === 2 ? (
          <div className="">
            {/* STEP */}
            <div className="my-5 text-2xl text-greenColor lg:text-3xl">
              {
                (
                  t("addNewsPage.instructions.steps", {
                    returnObjects: true,
                  }) as Array<string>
                )[1]
              }
            </div>
            {/* Actual Form */}
            {/* Title */}
            <div className="my-4 flex flex-col items-start gap-y-2">
              <label className="capitalize font-medium">
                {t("addNewsPage.form.new.title")}
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={globalForm.en.title}
                onChange={handleTxtChange_en}
                className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
              />
            </div>
            {/* Middle title */}
            <div className="my-4 flex flex-col items-start gap-y-2">
              <label className="capitalize font-medium">
                {t("addNewsPage.form.new.midTitle")}
              </label>
              <input
                type="text"
                name="midTitle"
                id="midTitle"
                value={globalForm.en.midTitle}
                onChange={handleTxtChange_en}
                className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
              />
            </div>
            {/* type */}
            <div className="my-4 flex flex-col items-start gap-y-2">
              <label className="capitalize font-medium">
                {t("addNewsPage.form.new.type")}
              </label>
              <Select
                defaultValue={"announcements"}
                options={options_en}
                onChange={handleSelectChange_en}
              />
            </div>
            {/* Textarea - Details */}
            <div className="flex flex-col items-start gap-y-2 mb-4">
              <label
                htmlFor="details"
                className="text-lg text-black font-medium capitalize"
              >
                {t("addNewsPage.form.new.details")}
              </label>
              <textarea
                name="details"
                id="details"
                value={globalForm.en.details}
                onChange={handleTxtChange_en}
                className="border border-greenColorLight py-2 px-3 rounded-xl   min-h-[15rem] min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
              />
            </div>
            {/* STEPS controllers */}
            <div className="w-full flex justify-center">
              <StepsControllers
                handleNext={handleIncreaseStep}
                handlePrev={handleDecreaseStep}
                active={activeStep}
              />
            </div>
          </div>
        ) : activeStep === 3 ? (
          <div className="">
            {/* STEP */}
            <div className="my-5 text-2xl text-greenColor lg:text-3xl">
              {
                (
                  t("addNewsPage.instructions.steps", {
                    returnObjects: true,
                  }) as Array<string>
                )[2]
              }
            </div>
            {/* Actual Form */}
            {/* Title */}
            <div className="my-4 flex flex-col items-start gap-y-2">
              <label className="capitalize font-medium">
                {t("addNewsPage.form.new.title")}
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={globalForm.ar.title}
                onChange={handleTxtChange_ar}
                className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
              />
            </div>
            {/* Middle title */}
            <div className="my-4 flex flex-col items-start gap-y-2">
              <label className="capitalize font-medium">
                {t("addNewsPage.form.new.midTitle")}
              </label>
              <input
                type="text"
                name="midTitle"
                id="midTitle"
                value={globalForm.ar.midTitle}
                onChange={handleTxtChange_ar}
                className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
              />
            </div>
            {/* type */}
            <div className="my-4 flex flex-col items-start gap-y-2">
              <label className="capitalize font-medium">
                {t("addNewsPage.form.new.type")}
              </label>
              <Select
                defaultValue={"announcements"}
                options={options_ar}
                onChange={handleSelectChange_ar}
              />
            </div>
            {/* Textarea - Details */}
            <div className="flex flex-col items-start gap-y-2 mb-4">
              <label
                htmlFor="details"
                className="text-lg text-black font-medium capitalize"
              >
                {t("addNewsPage.form.new.details")}
              </label>
              <textarea
                name="details"
                id="details"
                value={globalForm.ar.details}
                onChange={handleTxtChange_ar}
                className="border border-greenColorLight py-2 px-3 rounded-xl   min-h-[15rem] min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
              />
            </div>
            {/* STEPS controllers */}
            <div className="w-full flex justify-center">
              <StepsControllers
                handleNext={handleIncreaseStep}
                handlePrev={handleDecreaseStep}
                active={activeStep}
              />
            </div>
            {/* Submit */}
            <div className="my-5">
              <button
                type="submit"
                className="bg-greenColor text-white py-2 px-5 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        ) : null}
      </form>
      <div className="">{loading && <Loading />}</div>
    </div>
  );
}
