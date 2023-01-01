import { UploadProps } from "antd";
import React, { useState } from "react";

export function useAddPartner() {
  const [imgs, setImgs] = useState<{ img: any }>({
    img: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const props: UploadProps = {
    name: "file",
    multiple: false,
    accept: "image/png,image/gif,image/jpeg,image/jpg",
    beforeUpload: () => false,
    onChange({ file }) {
      setImgs({
        img: file,
      });
    },
  };
  let handleLoadingTrue = () => {
    setLoading(true);
  };
  let handleLoadingFalse = () => {
    setLoading(false);
  };
  return {
    props,
    imgs,
    loading,
    handleLoadingTrue,
    handleLoadingFalse,
  };
}
