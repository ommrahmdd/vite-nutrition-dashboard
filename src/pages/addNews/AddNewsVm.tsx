import { useState } from "react";
import type { UploadProps } from "antd";
import { useTranslation } from "react-i18next";

export function useAddNews() {
  const initialValue = {
    img: "",
    en: {
      title: "",
      midTitle: "",
      type: "announcements",
      details: "",
    },
    ar: {
      title: "",
      midTitle: "",
      type: "إعلان",
      details: "",
    },
  };
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [globalForm, setGlobalForm] = useState(initialValue);
  const [loading, setLoading] = useState<boolean>(false);
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
  const handleTxtChange_en = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setGlobalForm((prevState) => ({
      ...prevState,
      en: {
        ...prevState.en,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const handleTxtChange_ar = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setGlobalForm((prevState) => ({
      ...prevState,
      ar: {
        ...prevState.ar,
        [e.target.name]: e.target.value,
      },
    }));
  };
  // Upload image prop
  const props: UploadProps = {
    name: "file",
    multiple: false,
    accept: "image/png,image/gif,image/jpeg,image/jpg",
    beforeUpload: () => false,
    onChange({ file }) {
      setGlobalForm((prevState: any) => ({
        ...prevState,
        img: file,
      }));
    },
  };
  // SELECT options
  const options_ar = [
    {
      value: "إعلان",
      label: "إعلان",
    },
    {
      value: "مدونة",
      label: "مدونة",
    },
    {
      value: "اجتماعي",
      label: "اجتماعي",
    },
  ];
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
  const handleSelectChange_ar = (value: string) => {
    setGlobalForm((prevState: any) => ({
      ...prevState,
      ar: {
        ...prevState.ar,
        type: value,
      },
    }));
  };
  let handleLoadingTrue = () => {
    setLoading(true);
  };
  let handleLoadingFalse = () => {
    setLoading(false);
  };
  let handleResetState = () => {
    setGlobalForm(initialValue);
  };
  return {
    activeStep,
    handleDecreaseStep,
    handleIncreaseStep,
    globalForm,
    handleImageChange,
    handleTxtChange_en,
    handleTxtChange_ar,
    options_en,
    options_ar,
    props,
    handleSelectChange_en,
    handleSelectChange_ar,
    loading,
    handleLoadingTrue,
    handleLoadingFalse,
    handleResetState,
  };
}
