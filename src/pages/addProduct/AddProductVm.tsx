import React, { useState } from "react";
export function useAddProductVm() {
  const [initailValue, setInitialValue] = useState({
    imgs: [],
    en: {},
    ar: {},
  });

  let handleAddNewImageToArray = () => {
    setInitialValue((prevState: any) => {
      return {
        ...prevState,
        imgs: [...prevState.imgs, ""],
      };
    });
  };
  let handleChange_en = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInitialValue((prevState: any) => {
      return {
        ...prevState,
        en: {
          [e.target.name]: e.target.value,
        },
      };
    });
  };
  return { initailValue, handleAddNewImageToArray, handleChange_en };
}
