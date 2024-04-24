import { TFunction } from 'i18next';
import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface I18n {
    language: string,
    changeLanguage: (lang: string) => void
}
interface TranslateContextProps {
    t: TFunction,
    i18n: I18n
}

export const TranslationContext = createContext<TranslateContextProps>({
    t: ((key: string) => "pranay") as TFunction, // This is a dummy function
    i18n: {
        language: "en",
        changeLanguage: () => {}
    }
});

export const TranslationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const { t, i18n } = useTranslation();
  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslate = () => useContext(TranslationContext);