import React, { useState } from "react";
export function useAddProductVm() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [initailValue, setInitialValue] = useState({
    imgs: [],
    en: {
      title: "",
      midTitle: "",
      details: "",
      storage: "",
      direction: [],
      types: [],
    },
    ar: {
      title: "",
      midTitle: "",
      details: "",
      storage: "",
      direction: [],
      types: [],
    },
  });

  let increaseActiveStep = () => {
    setActiveStep(activeStep + 1);
  };
  let decreaseActiveStep = () => {
    setActiveStep(activeStep - 1);
  };
  let handleAddNewImageToArray = () => {
    setInitialValue((prevState: any) => {
      return {
        ...prevState,
        imgs: [...prevState.imgs, ""],
      };
    });
  };
  let handleImageValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    (initailValue.imgs[index] as any) = e.target.files!;
    setInitialValue((prevState: any) => {
      return {
        ...prevState,
        imgs: [...prevState.imgs],
      };
    });
    console.log(initailValue.imgs);
  };
  let handleChange_en = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInitialValue((prevState: any) => {
      return {
        ...prevState,
        en: {
          ...prevState.en,
          [e.target.name]: e.target.value,
        },
      };
    });
    console.log(initailValue);
  };
  let handleDirectionOfUseAdd = () => {
    setInitialValue((prevState: any) => ({
      ...prevState,
      en: {
        ...prevState.en,
        direction: [...prevState.en.direction, ""],
      },
    }));
  };
  let handleDirectionOfUseChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    (initailValue.en.direction[index] as any) = e.target.value;
    setInitialValue((prevState: any) => ({
      ...prevState,
      en: {
        ...prevState.en,
        direction: [...prevState.en.direction],
      },
    }));
    console.log(initailValue);
  };
  let handleTypesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((initailValue.en.types as any).indexOf(e.target.value) === -1) {
      (initailValue.en.types as any) = [
        ...initailValue.en.types,
        e.target.value,
      ];
    } else {
      (initailValue.en.types as any).splice(
        (initailValue.en.types as any).indexOf(e.target.value),
        1
      );
    }

    setInitialValue((prevState: any) => ({
      ...prevState,
      en: {
        ...prevState.en,
        types: [...prevState.en.types],
      },
    }));
    console.log(initailValue.en);
  };
  return {
    initailValue,
    handleAddNewImageToArray,
    handleChange_en,
    handleImageValue,
    handleDirectionOfUseAdd,
    handleDirectionOfUseChange,
    handleTypesChange,
    activeStep,
    increaseActiveStep,
    decreaseActiveStep,
  };
}
