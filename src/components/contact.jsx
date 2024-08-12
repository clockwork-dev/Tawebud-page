import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { useTranslation } from "react-i18next";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{t("contact.getInTouchTitle")}</h2>
                <p>{t("contact.getInTouchDescription")}</p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder={t("contact.namePlaceholder")}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder={t("contact.emailPlaceholder")}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder={t("contact.messagePlaceholder")}
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {t("contact.sendMessageButton")}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{t("contact.contactInfoTitle")}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {t("contact.addressLabel")}
                </span>
                {props.data ? t("contact.address") : t("loading")}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {t("contact.phoneLabel")}
                </span>{" "}
                {props.data ? t("contact.phone1") : t("loading")} ({t("contact.pavel")})<br />
                {props.data ? t("contact.phone2") : t("loading")} ({t("contact.artiom")})
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {t("contact.emailLabel")}
                </span>{" "}
                {props.data ? t("contact.email") : t("loading")}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-calendar"></i> {t("contact.hoursLabel")}
                </span>{" "}
                {t("contact.hours")}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 {t("contact.designBy")}{" "}
            <a href="#0" rel="nofollow">
              Rodion Prysenko
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
