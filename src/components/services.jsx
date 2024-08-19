import React from "react";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();


  const services = t("firstServices.list", { returnObjects: true });

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("firstServices.title")}</h2>
          <p>{t("firstServices.description")}</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              
              <i className={`fa ${service.icon}`}></i>
              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
