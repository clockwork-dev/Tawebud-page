import React from "react";
import { useTranslation } from 'react-i18next';
export const Navigation = (props) => {
  const { t } = useTranslation();
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {t('Navigator.title')}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
              {t('Navigator.Features')}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
              {t('Navigator.About')}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
              {t('Navigator.Services')}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
              {t('Navigator.Gallery')}
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
              {t('Navigator.Feedback')}
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
              {t('Navigator.Team')}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
              {t('Navigator.Contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
