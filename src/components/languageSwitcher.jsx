import React, { useState, useEffect } from 'react';
import i18n from 'i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'pl', label: 'Polski' },
  { code: 'br', label: 'Беларускі' }
];

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => setCurrentLanguage(lng);

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: currentLanguage === code ? 'lightblue' : 'white',
            border: currentLanguage === code ? '2px solid blue' : '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
