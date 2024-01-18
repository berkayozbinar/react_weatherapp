import React from 'react';

const Extra = ({ icon, percent, text }) => {
  return (
    <div className="element">
      <img src={icon} className="icon" />
      <div className="data">
        <div className="percent">{percent}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Extra;