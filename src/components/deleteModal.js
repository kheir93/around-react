import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function DeleteModal({name, isOpen}) {
  return <div>
    <div className={`popup ${name}-modal ${isOpen ? 'popup_open' : ''}`} name={'delete'} isOpen={isOpen}>

    </div>
  </div>
}
