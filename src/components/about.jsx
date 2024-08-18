import React, {useState}from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  const aboutWhy = t('About.Why', { returnObjects: true });

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{textTransform: "capitalize", fontFamily: "Evolventa"}}>{t('Header.title')}</h2>
              <p>{t('About.paragraph')}</p>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul style={{ paddingLeft: '20px' }}>
                    {aboutWhy.map((item, index) => (
                      <li
                        key={`${item.title}-${index}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          display: 'flex', // Включение Flexbox
                          alignItems: 'center', // Выравнивание по центру по вертикали
                          padding: '10px',
                          borderRadius: '8px',
                          boxShadow: hoveredIndex === index ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                          transition: 'box-shadow 0.3s ease',
                          cursor: 'pointer',
                          fontWeight: 'normal',
                        }}
                      >
                        {/* Иконка галочки */}
                        
                        <div>
                          <h4 style={{ fontWeight: 'normal', marginBottom: '5px' }}>{item.title}</h4>
                          {hoveredIndex === index && (
                            <p style={{
                              position: 'absolute',
                              top: '100%',
                              left: '0',
                              width: '100%',
                              backgroundColor: '#fff',
                              padding: '10px',
                              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                              zIndex: '1',
                              borderRadius: '8px',
                              fontWeight: 'normal',
                            }}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
