import React from 'react';

const Extra = ({ image, percent, text }) => {
  return (
    <div className="element">
      <img src={image} className="image" />
      <div className="data">
        <div className="percent">{percent}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Extra;