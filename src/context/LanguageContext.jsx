import React, { createContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import hy from '../locales/hy.json';

export const LanguageContext = createContext();

const translations = {
  en,
  hy
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get language from localStorage or browser language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        setLanguage(browserLang);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'hy' ? 'ltr' : 'ltr';
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
