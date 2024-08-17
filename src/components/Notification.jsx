import React from 'react';
import { useTranslation } from 'react-i18next';

const Notification = ({ message, type, onClose }) => {
const { t } = useTranslation();
  return (
    <div className={`notification ${type} show`}>
      <div className="notification-content">
        <p>{message}</p>
        <button onClick={onClose}>{t('Close')}</button>
      </div>
    </div>
  );
};

export default Notification;