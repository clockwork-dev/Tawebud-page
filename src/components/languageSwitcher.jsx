import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSwitcher.css';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'pl', label: 'PL' },
  { code: 'br', label: 'BR'},
  { code: 'de', label: 'DE'}
];

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (lng) => setCurrentLanguage(lng);

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className={`language-banner ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <FaGlobe />
      </button>
      {isOpen && (
        <div className="language-buttons">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className={currentLanguage === code ? 'active' : ''}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
