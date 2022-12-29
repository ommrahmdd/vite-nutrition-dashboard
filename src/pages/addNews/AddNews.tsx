import React from "react";
import { useTranslation } from "react-i18next";
import { Upload, Button, Input, Select } from "antd";
import { BsUpload } from "react-icons/bs";
import Instructions from "../../components/instructions/Instructions";
import Header from "../../layouts/header/Header";
import { useAddNews } from "./AddNewsVm";
import "./addNews.css";
import StepsControllers from "../../components/stepsControllers/StepsControllers";
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
      <form className="accent-greenColor">
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
                defaultValue={"Announcements"}
                options={options_en}
                onChange={handleSelectChange_en}
              />
            </div>
          </div>
        ) : activeStep === 3 ? (
          ""
        ) : null}
      </form>
    </div>
  );
}
