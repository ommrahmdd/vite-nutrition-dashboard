import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTrans from "./local/en.json";
import arTrans from "./local/ar.json";
const resources = {
  en: {
    translation: enTrans,
  },
  ar: {
    translation: arTrans,
  },
};
i18n.use(initReactI18next).init({
  lng: "en",
  resources: resources,
});

export default i18n;
