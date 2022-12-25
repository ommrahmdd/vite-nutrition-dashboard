import React from "react";
import { useTranslation } from "react-i18next";
import Instructions from "../../components/instructions/Instructions";
import { MainBtn } from "../../components/Ui/buttons/Buttons";
import Header from "../../layouts/header/Header";
import { useAddProductVm } from "./AddProductVm";

export default function AddProduct() {
  const { t } = useTranslation();
  const { initailValue, handleAddNewImageToArray, handleChange_en } =
    useAddProductVm();
  return (
    <div>
      {/*STYLE: Header */}
      <Header title={t("header.title")} />
      {/*STYLE: Instructions */}
      <Instructions
        title={t("addProductPage.instructions.title")}
        items={
          t("addProductPage.instructions.items", {
            returnObjects: true,
          }) as Array<string>
        }
      />
      {/*STYLE: Form */}
      <div className=" my-10">
        <form className="accent-greenColorLight">
          {/* STYLE: Images */}
          <p className="text-3xl text-greenColor mb-6">
            {
              (
                t("addProductPage.instructions.steps", {
                  returnObjects: true,
                }) as Array<string>
              )[0]
            }
          </p>
          <div className="flex flex-col items-start gap-y-4">
            <label htmlFor="">{t("addProductPage.form.imageText")}</label>
            {initailValue.imgs.map((newImg, index) => (
              <div className="flex flex-col items-start gap-y-2" key={index}>
                <input
                  type="file"
                  className="file:bg-greenColor text-[.6rem] file:text-black file:bg-opacity-40 file:border-none file:py-2 file:px-6 file:rounded-full file:cursor-pointer file:transition-all file:duration-300 file:ease-in-out hover:file:opacity-25 md:text-sm "
                />
              </div>
            ))}
          </div>
          {/* Image Btn */}
          <div className="mt-6">
            <MainBtn
              type="button"
              handleClick={handleAddNewImageToArray}
              text={t("addProductPage.form.imageBtn")}
            />
          </div>
          {/* Line */}
          <hr className="my-4" />
          {/* ---------------------------------------------------------------- */}
          {/* STYLE: In English */}
          <p className="text-3xl text-greenColor mb-6">
            {
              (
                t("addProductPage.instructions.steps", {
                  returnObjects: true,
                }) as Array<string>
              )[1]
            }
          </p>

          <div className="flex flex-col items-start gap-y-2 mb-4">
            <label htmlFor="title" className="text-lg text-greyColor">
              {t("addProductPage.form.product.name")}
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange_en}
              className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 mb-4">
            <label htmlFor="midTitle" className="text-lg text-greyColor">
              {t("addProductPage.form.product.midTitle")}
            </label>
            <input
              type="text"
              name="midTitle"
              id="midTitle"
              onChange={handleChange_en}
              className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
