import React from 'react';

const City = ({ onChange, value }) => {
  return (
    <div className="topBar">
      <input type="text" placeholder="Şehir" onChange={onChange} value={value} />
    </div>
  );
};

export default City;