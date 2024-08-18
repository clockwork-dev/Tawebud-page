import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "./Modal";  // Импортируем новый компонент

export const Gallery = () => {
  const [expandedWork, setExpandedWork] = useState(null);
  const { t } = useTranslation();

  const serviceKeys = Object.keys(t("services.list", { returnObjects: true }));

  const handleExpandWork = (workKey) => {
    setExpandedWork(expandedWork === workKey ? null : workKey);
  };

  const handleCloseModal = () => {
    setExpandedWork(null);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("services.title")}</h2>
          <p>{t("services.description")}</p>
        </div>
        <div className="gall" style={{display: "flex", flexWrap: "wrap", justifyItems: "center"}}>
          {serviceKeys.length > 0 ? (
            serviceKeys.map((workKey, i) => (
              <div
                key={workKey}
                className="col-sm-6 col-md-4 col-lg-4"
                
              >
                <div
                  className="gallery-item"
                  onClick={() => handleExpandWork(workKey)}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "15px",
                    marginBottom: "20px",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.3s ease-in-out",
                    position: 'relative',
                  }}
                >
                  <h3 style={{ marginBottom: "10px" }}>
                    {t(`services.list.${workKey}.title`)}
                  </h3>
                  <p style={{ marginBottom: "10px" }}>
                    {t(`services.list.${workKey}.shortDescription`)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>
      </div>

      <Modal isOpen={!!expandedWork} onClose={handleCloseModal}>
        {expandedWork && (
          <>
            <h3 style={{ marginBottom: "15px" }}>
              {t(`services.list.${expandedWork}.title`)}
            </h3>
            <div style={{ marginBottom: "15px" }}>
              {t(`services.list.${expandedWork}.image`, { returnObjects: true }).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${t(`services.list.${expandedWork}.title`)} - ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "15px",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </div>
            <p style={{ marginBottom: "15px" }}>
              {t(`services.list.${expandedWork}.fullDescription`)}
            </p>
          </>
        )}
      </Modal>
    </div>
  );
};
