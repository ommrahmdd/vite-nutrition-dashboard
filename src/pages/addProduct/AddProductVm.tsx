import React, { useState } from "react";
export function useAddProductVm() {
  let myState = {
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
    },
  };
  const [activeStep, setActiveStep] = useState<number>(1);

  const [initailValue, setInitialValue] = useState(myState);
  const [loading, setLoading] = useState<boolean>(false);
  let imgsCounter: number = 0;
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
    (initailValue.imgs[index] as any) = (e.target as any).files[0];
    setInitialValue((prevState: any) => {
      return {
        ...prevState,
      };
    });
    console.log(initailValue.imgs);
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
  let handleRemoveImageFronArr = (index: number) => {
    initailValue.imgs.splice(index, 1);
    console.log(initailValue.imgs);
    setInitialValue((prevState) => ({
      ...prevState,
    }));
  };
  //HANDLE: En
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
  let handleDirectionOfUseAdd_en = () => {
    setInitialValue((prevState: any) => ({
      ...prevState,
      en: {
        ...prevState.en,
        direction: [...prevState.en.direction, ""],
      },
    }));
  };
  let handleDirectionOfUseChange_en = (
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

  //HANDLE: Ar
  let handleChange_ar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInitialValue((prevState: any) => {
      return {
        ...prevState,
        ar: {
          ...prevState.ar,
          [e.target.name]: e.target.value,
        },
      };
    });
    console.log(initailValue);
  };
  let handleDirectionOfUseAdd_ar = () => {
    setInitialValue((prevState: any) => ({
      ...prevState,
      ar: {
        ...prevState.ar,
        direction: [...prevState.ar.direction, ""],
      },
    }));
  };
  let handleDirectionOfUseChange_ar = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    (initailValue.ar.direction[index] as any) = e.target.value;
    setInitialValue((prevState: any) => ({
      ...prevState,
      ar: {
        ...prevState.ar,
        direction: [...prevState.ar.direction],
      },
    }));
    console.log(initailValue);
  };
  let handleLoadingTrue = () => {
    setLoading(true);
  };
  let handleLoadingFalse = () => {
    setLoading(false);
  };
  let handleResetState = () => {
    setInitialValue(myState);
  };
  return {
    initailValue,
    handleAddNewImageToArray,
    handleImageValue,
    handleTypesChange,
    activeStep,
    increaseActiveStep,
    decreaseActiveStep,
    handleChange_en,
    handleDirectionOfUseAdd_en,
    handleDirectionOfUseChange_en,
    handleChange_ar,
    handleDirectionOfUseAdd_ar,
    handleDirectionOfUseChange_ar,
    loading,
    handleLoadingTrue,
    handleLoadingFalse,
    imgsCounter,
    handleResetState,
    handleRemoveImageFronArr,
  };
}
