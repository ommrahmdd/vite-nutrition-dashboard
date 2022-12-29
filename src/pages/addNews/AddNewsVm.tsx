import { useState } from "react";
import type { UploadProps } from "antd";
import { useTranslation } from "react-i18next";

export function useAddNews() {
  const initialValue = {
    img: "",
    en: {
      title: "",
      midTitle: "",
      type: "",
      details: "",
    },
    ar: {
      title: "",
      midTitle: "",
      type: "",
      details: "",
    },
  };
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [globalForm, setGlobalForm] = useState(initialValue);
  const handleIncreaseStep = () => {
    setActiveStep(activeStep + 1);
  };
  const handleDecreaseStep = () => {
    setActiveStep(activeStep - 1);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalForm((prevState: any) => {
      return {
        ...prevState,
        img: e.target.files![0],
      };
    });
  };
  const handleTxtChange_en = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalForm((prevState) => ({
      ...prevState,
      en: {
        ...prevState.en,
        title: e.target.value,
      },
    }));
  };
  // Upload image prop
  const props: UploadProps = {
    onChange({ file, fileList }) {
      setGlobalForm((prevState: any) => ({
        ...prevState,
        img: fileList[0],
      }));
    },
  };
  // SELECT options
  const options_en = [
    {
      value: "announcements",
      label: "Announcements",
    },
    {
      value: "blog",
      label: "Blog",
    },
    {
      value: "community",
      label: "Community",
    },
  ];

  const handleSelectChange_en = (value: string) => {
    setGlobalForm((prevState: any) => ({
      ...prevState,
      en: {
        ...prevState.en,
        type: value,
      },
    }));
  };
  return {
    activeStep,
    handleDecreaseStep,
    handleIncreaseStep,
    globalForm,
    handleImageChange,
    handleTxtChange_en,
    options_en,
    props,
    handleSelectChange_en,
  };
}
