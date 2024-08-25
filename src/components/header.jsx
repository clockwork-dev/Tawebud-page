import React from "react";
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
                <h1 className="fade-in">
                  {t('Header.title')}
                </h1>
                
                <p className="fade-in">
                  {t('Header.paragraph')}
                </p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll fade-in"
                >
                  {t('Header.btn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};