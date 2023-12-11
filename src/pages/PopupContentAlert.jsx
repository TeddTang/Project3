import React from 'react';
import "../styles/style.scss";

const PopupContentAlert = ({ title, onSubmit, onClose, alertText }) => {

  const handleSubmit = () => {
    onSubmit();
    onClose(); // 关闭弹窗
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
            <div>
              <p className="font16_normal alert_text">{alertText}</p>
              <button onClick={handleSubmit}>確定刪除</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PopupContentAlert;
