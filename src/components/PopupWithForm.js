import React from 'react';

export default function PopupWithForm({isOpen, name, onClose, children, buttonName, popupCloseByClick, title}) {
  return (
    <div>
      <div className={`popup ${name}-modal ${isOpen ? 'popup_open' : ''}`} onClick={popupCloseByClick}>
        <form className="form">
          <div className="popup__close-button-container">
            <button className="popup__close-button" onClick={onClose} type="button"></button>
          </div>
            <h2 className="form__title">{title}</h2>
            {children}
          <button className="form__save" type="submit" >{buttonName}</button>
        </form>
      </div>
    </div>
  );
}


