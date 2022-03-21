import React from 'react';

export default function PopupWithForm({isOpen, name, onClose, children, buttonName, onPopupClose}) {
  return <div>
    <div className={`popup ${name}-modal ${isOpen ? 'popup_open' : ''}`} onClick={onPopupClose}>
      <form className="form">
        <div className="popup__close-button-container" >
          <button className="popup__close-button" onClick={onClose} type="button"></button>
        </div>
        {children}
        <button className="form__save" type="submit" >{buttonName}</button>
      </form>
    </div>
  </div>
}


