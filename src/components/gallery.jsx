import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { dataImg } from '../data/data.json';

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
        <div className="row">
          {serviceKeys.length > 0 ? (
            serviceKeys.map((workKey, i) => (
              <div
                key={workKey}
                className={`col-sm-6 col-md-4 col-lg-4`}
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

      {/* Модальное окно для подробной информации */}
      {expandedWork && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            width: "80%",
            maxWidth: "800px",
            maxHeight: "80vh",  // Ограничиваем высоту модального окна до 90% от высоты окна браузера.
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            overflowY: "auto",  // Добавляем прокрутку внутри модального окна, если содержимое превышает высоту.
            position: "relative",
          }}
        >
            <h3 style={{ marginBottom: "15px" }}>
              {t(`services.list.${expandedWork}.title`)}
            </h3>
            <div style={{ marginBottom: "15px" }}>
              {/* Место под изображение */}
              <img
                src={t(`services.list.${expandedWork}.image`)} // Замените на актуальный путь к изображению
                alt={t(`services.list.${expandedWork}.title`)}
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "15px",
                  borderRadius: "8px",
                }}
              />
            </div>
            <p style={{ marginBottom: "15px" }}>
              {t(`services.list.${expandedWork}.fullDescription`)}
            </p>
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#0056b3",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {t("services.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
