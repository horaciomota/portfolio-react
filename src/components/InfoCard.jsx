import React from 'react';
import "../styles/about_styles/about.modules.scss";

function InfoCard({ title, subtitle, items, titleClassName }) {
  return (
    <div className="info-card">
      <div className="info-card-content">
        <div>
          <h2 className={`info-card-title ${titleClassName ? titleClassName : ''}`}>{title}</h2>
          {subtitle && <p className="info-card-subtitle">{subtitle}</p>}
        </div>
        {items && (
          <ul className="info-card-items">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
