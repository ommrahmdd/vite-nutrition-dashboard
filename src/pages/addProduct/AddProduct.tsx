import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Instructions from "../../components/instructions/Instructions";
import StepsControllers from "../../components/stepsControllers/StepsControllers";
import { MainBtn } from "../../components/Ui/buttons/Buttons";
import Loading from "../../components/Ui/loading/Loading";
import Header from "../../layouts/header/Header";
import { storage } from "../../services/config";
import { addProduct, addProductImgs } from "../../services/products";
import { useAddProductVm } from "./AddProductVm";

export default function AddProduct() {
  const { t } = useTranslation();
  let {
    initailValue,
    handleAddNewImageToArray,
    handleImageValue,
    handleTypesChange,
    activeStep,
    decreaseActiveStep,
    increaseActiveStep,
    handleChange_en,
    handleDirectionOfUseAdd_en,
    handleDirectionOfUseChange_en,
    handleChange_ar,
    handleDirectionOfUseAdd_ar,
    handleDirectionOfUseChange_ar,
    loading,
    handleLoadingFalse,
    handleLoadingTrue,
    imgsCounter,
    handleResetState,
    handleRemoveImageFronArr,
  } = useAddProductVm();
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
        <form
          className="accent-greenColorLight"
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleLoadingTrue();
            addProduct(initailValue).then((_id) => {
              initailValue.imgs.forEach((img) => {
                let imgName = `${(img as any).name}${v4()}`;
                let imgRef = ref(storage, `products/${_id}/${imgName}`);
                uploadBytes(imgRef, img)
                  .then((res) => {
                    return getDownloadURL(res.ref);
                  })
                  .then((url) => {
                    return addProductImgs(_id, url);
                  })
                  .then((data) => {
                    imgsCounter += 1;
                    if (imgsCounter === initailValue.imgs.length) {
                      handleLoadingFalse();
                      // handleResetState();
                      decreaseActiveStep();
                      decreaseActiveStep();
                    }
                  });
              });
            });
          }}
        >
          {activeStep === 1 ? (
            // HANDLE: First STEP
            <div className="">
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
                  <div
                    className="flex flex-col items-center md:flex-row"
                    key={index}
                  >
                    <input
                      type="file"
                      onChange={(e) => handleImageValue(e, index)}
                      accept="image/png, image/jpeg, image/jpg"
                      className="file:bg-greenColor text-[.6rem] file:text-black file:bg-opacity-40 file:border-none file:py-2 file:px-6 file:rounded-full file:cursor-pointer file:transition-all file:duration-300 file:ease-in-out hover:file:opacity-25 md:text-sm "
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImageFronArr(index)}
                    >
                      <AiOutlineCloseCircle className="text-greenColor text-3xl" />
                    </button>
                  </div>
                ))}
              </div>
              {/* Image Btn */}
              <div className="mt-6 mb-6">
                <MainBtn
                  type="button"
                  handleClick={handleAddNewImageToArray}
                  text={t("addProductPage.form.imageBtn")}
                />
              </div>
              {/* Types */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="storage" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.types")}
                </label>
                <div className="flex items-start gap-x-6 flex-wrap">
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      name="types"
                      value="men"
                      onChange={handleTypesChange}
                      checked={
                        (initailValue.en.types as Array<string>).includes("men")
                          ? true
                          : false
                      }
                      className="cursor-pointer  w-4 h-4 border-4 border-gray-300 focus:rounded focus:ring-greenColor focus:ring-2"
                    />
                    <span>
                      {
                        (
                          t("addProductPage.form.product.typesArr", {
                            returnObjects: true,
                          }) as Array<string>
                        )[0]
                      }
                    </span>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      name="types"
                      value="kids"
                      checked={
                        (initailValue.en.types as Array<string>).includes(
                          "kids"
                        )
                          ? true
                          : false
                      }
                      onChange={handleTypesChange}
                      className="cursor-pointer w-4 h-4 border-4 border-gray-300 focus:rounded focus:ring-greenColor focus:ring-2"
                    />
                    <span>
                      {
                        (
                          t("addProductPage.form.product.typesArr", {
                            returnObjects: true,
                          }) as Array<string>
                        )[1]
                      }
                    </span>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      name="types"
                      value="women"
                      checked={
                        (initailValue.en.types as Array<string>).includes(
                          "women"
                        )
                          ? true
                          : false
                      }
                      onChange={handleTypesChange}
                      className="cursor-pointer w-4 h-4 border-4 border-gray-300 focus:rounded focus:ring-greenColor focus:ring-2"
                    />
                    <span>
                      {
                        (
                          t("addProductPage.form.product.typesArr", {
                            returnObjects: true,
                          }) as Array<string>
                        )[2]
                      }
                    </span>
                  </div>
                </div>
              </div>
              {/* Line */}
              <hr className="my-4" />
              <StepsControllers
                active={activeStep}
                handleNext={increaseActiveStep}
                handlePrev={decreaseActiveStep}
              />
            </div>
          ) : activeStep === 2 ? (
            // HANDLE: Second STEP
            <div className="">
              {/* STYLE: In English */}
              {/* Step */}
              <p className="text-3xl text-greenColor mb-6">
                {
                  (
                    t("addProductPage.instructions.steps", {
                      returnObjects: true,
                    }) as Array<string>
                  )[1]
                }
              </p>
              {/* Title */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="title" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.name")}
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={initailValue.en.title}
                  onChange={handleChange_en}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Middle title */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="midTitle" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.midTitle")}
                </label>
                <input
                  type="text"
                  name="midTitle"
                  id="midTitle"
                  value={initailValue.en.midTitle}
                  onChange={handleChange_en}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Textarea - Details */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="details" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.details")}
                </label>
                <textarea
                  name="details"
                  id="details"
                  value={initailValue.en.details}
                  onChange={handleChange_en}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-h-[15rem] min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Storage */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="storage" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.storage")}
                </label>
                <input
                  type="text"
                  name="storage"
                  id="storage"
                  value={initailValue.en.storage}
                  onChange={handleChange_en}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Direction of use */}
              <div className="">
                <label htmlFor="direction" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.directions")}
                </label>
                {initailValue.en.direction.map((_dir, index) => (
                  <div
                    className="flex flex-col items-start gap-y-2 mb-4"
                    key={index}
                  >
                    <input
                      type="text"
                      id="direction"
                      value={initailValue.en.direction[index]}
                      onChange={(e) => handleDirectionOfUseChange_en(e, index)}
                      className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                    />
                  </div>
                ))}
              </div>
              {/* Direction Btn */}
              <div className="mt-4 mb-6">
                <MainBtn
                  type="button"
                  handleClick={handleDirectionOfUseAdd_en}
                  text={t("addProductPage.form.product.directionBtn")}
                />
              </div>
              {/* Line */}
              <hr className="my-4" />
              <StepsControllers
                active={activeStep}
                handleNext={increaseActiveStep}
                handlePrev={decreaseActiveStep}
              />
            </div>
          ) : activeStep === 3 ? (
            // HANDLE: Final STEP
            <div className="">
              {/* STYLE: In English */}
              {/* Step */}
              <p className="text-3xl text-greenColor mb-6">
                {
                  (
                    t("addProductPage.instructions.steps", {
                      returnObjects: true,
                    }) as Array<string>
                  )[2]
                }
              </p>
              {/* Title */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="title" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.name")}
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={initailValue.ar.title}
                  onChange={handleChange_ar}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Middle title */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="midTitle" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.midTitle")}
                </label>
                <input
                  type="text"
                  name="midTitle"
                  id="midTitle"
                  value={initailValue.ar.midTitle}
                  onChange={handleChange_ar}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Textarea - Details */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="details" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.details")}
                </label>
                <textarea
                  name="details"
                  id="details"
                  value={initailValue.ar.details}
                  onChange={handleChange_ar}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-h-[15rem] min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Storage */}
              <div className="flex flex-col items-start gap-y-2 mb-4">
                <label htmlFor="storage" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.storage")}
                </label>
                <input
                  type="text"
                  name="storage"
                  id="storage"
                  value={initailValue.ar.storage}
                  onChange={handleChange_ar}
                  className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                />
              </div>
              {/* Direction of use */}
              <div className="">
                <label htmlFor="direction" className="text-lg text-greyColor">
                  {t("addProductPage.form.product.directions")}
                </label>
                {initailValue.ar.direction.map((_dir, index) => (
                  <div
                    className="flex flex-col items-start gap-y-2 mb-4"
                    key={index}
                  >
                    <input
                      type="text"
                      id="direction"
                      value={initailValue.ar.direction[index]}
                      onChange={(e) => handleDirectionOfUseChange_ar(e, index)}
                      className="border border-greenColorLight py-2 px-3 rounded-xl min-w-[10rem] md:min-w-[15rem] lg:min-w-[20rem]"
                    />
                  </div>
                ))}
              </div>
              {/* Direction Btn */}
              <div className="mt-4 mb-6">
                <MainBtn
                  type="button"
                  handleClick={handleDirectionOfUseAdd_ar}
                  text={t("addProductPage.form.product.directionBtn")}
                />
              </div>
              {/* Line */}
              <hr className="my-4" />
              <StepsControllers
                active={activeStep}
                handleNext={increaseActiveStep}
                handlePrev={decreaseActiveStep}
              />
              <button
                type="submit"
                className="py-2 px-5 text-lg rounded-lg bg-greenColor text-white"
              >
                Add
              </button>
            </div>
          ) : null}
        </form>
      </div>
      {loading === true && <Loading />}
    </div>
  );
}
