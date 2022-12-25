import { useTranslation } from "react-i18next";

export function useNav() {
  const { i18n } = useTranslation();
  const options = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "العربية",
      value: "ar",
    },
  ];
  let handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  return {
    handleChange,
    options,
  };
}
