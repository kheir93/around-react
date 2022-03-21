import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function CardModal({placeholder}) {
  return <div>
    {/* <div className={`popup ${name}-modal ${isOpen ? 'popup_open' : ''}`} name={'add'} isOpen={isOpen}>
    <form className="form">
      <div className="popup__close-button-container">
        <button className="popup__close-button" onClick={onClose} type="reset"></button>
      </div>
      <h2 className="form__title">New place</h2>
      <label className="form__field">
        <input type="text" className="form__input form__input_title" id="inputTitle" placeholder="Title" defaultValue="" name="title" required minLength="2" maxLength="30"/>
        <span className="form__input-error inputTitle-error">Please fill out this field.</span>
      </label>
      <label className="form__field">
        <input type="url" className="form__input form__input_image" id="inputImage" placeholder="Image link" defaultValue="" name="url" required/>
        <span className="form__input-error inputImage-error">Please enter a web address.</span>
      </label>
      <button className="form__save" type="submit">Create</button>
    </form>
    </div> */}
    <h2 className="form__title">New place</h2>
      <label className="form__field">
        <input type="text" className="form__input form__input_title" id="inputTitle" placeholder={placeholder} defaultValue="" name="title" required minLength="2" maxLength="30"/>
        <span className="form__input-error inputTitle-error">Please fill out this field.</span>
      </label>
      <label className="form__field">
        <input type="url" className="form__input form__input_image" id="inputImage" placeholder="Image link" defaultValue="" name="url" required/>
        <span className="form__input-error inputImage-error">Please enter a web address.</span>
      </label>
  </div>
}
