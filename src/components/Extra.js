import React from 'react';

const Extra = ({ icon, percent, text }) => {
  return (
    /* Nem ve Rüzgar bilgisini göstermek için yapılmış bir component. */
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