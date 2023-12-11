// PopupContentWithInput.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/style.scss";

const PopupContentWithInput = ({ title, onSubmit, onClose, inputCount, placeholderTexts, inputTitle, to}) => {
  const initialInputValues = Array(inputCount).fill('');
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = () => {
    onSubmit(inputValues);
    onClose(); // 關閉彈窗
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <section className='pop-header'>
            <p className='font24'>{title}</p>
            <span className="close" onClick={onClose}>&times;</span>
          </section>
          <section className='popup-field'>  
            {inputValues.map((value, index) => (
              <div key={index}>
                <label className="font14_medium input-title" htmlFor={`input-${index}`}>{inputTitle[index]}</label>
                <input
                  id={`input-${index}`}
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder={placeholderTexts[index]}
                />
              </div>
            ))}
            <Link to={to}>
              <button onClick={handleSubmit}>確定</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PopupContentWithInput;
