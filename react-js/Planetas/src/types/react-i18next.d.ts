import i18next from "i18next";
// import all namespaces (for the default language, only)
import ptBr from "../i18n/locales/pt-br.json";
import enUs from "../i18n/locales/en-us.json";


declare module i18next {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "ptBr";
    // custom resources type
    // returnNull: false;
    resources: {
      ptBr: typeof ptBr;
      enUs: typeof enUs;
    };
    // other
  }
}
