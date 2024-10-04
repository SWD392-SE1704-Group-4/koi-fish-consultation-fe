// ZodiacCard.tsx
import React from "react";
import "./ZodiacCard.css";

interface ZodiacCardProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  style?: React.CSSProperties;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({
  imageSrc,
  title,
  description,
  date,
  readTime,
}) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <span className="card-date">{date}</span>
        <span className="card-read-time">{readTime}</span>
      </div>
    </div>
  );
};

export default ZodiacCard;
