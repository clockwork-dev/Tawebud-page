import React from "react";
import { LanguageSwitcher } from './languageSwitcher'
import { useTranslation } from "react-i18next";

export const Header = (props) => {
  const { t } = useTranslation();
  return (
    
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {t('Header.title')}
                  <span></span>
                </h1>
                
                <p>{t('Header.paragraph')}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
