import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function ProfileModal({}) {

  return <div>
    {/* <div className={`${name}-modal popup ${isOpen ? 'popup_open' : ''}`} name={'edit'} isOpen={isOpen}>
      <form className="form">
        <div className="popup__close-button-container ">
          <button className="popup__close-button" onClick={onClose} type="button"></button>
        </div>
          <h2 className="form__title">Edit profile</h2>
        <label className="form__field">
          <input type="text" className="form__input form__input_name" id="inputName" placeholder="name" name="name" defaultValue="Jacques Cousteau" required minLength="2" maxLength="40"/>
          <span className="form__input-error inputName-error">Please fill out this field.</span>
        </label>
        <label className="form__field">
          <input type="text" className="form__input form__input_job" id="inputJob" placeholder="about me" name="about" defaultValue="Explorer" required minLength="2" maxLength="200"/>
          <span className="form__input-error inputJob-error">Please fill out this field.</span>
        </label>
        <button className="form__save" type="submit">Save</button>
      </form>
    </div> */}
     <h2 className="form__title">Edit profile</h2>
      <label className="form__field">
        <input type="text" className="form__input form__input_name" id="inputName" placeholder="name" name="name" defaultValue="Jacques Cousteau" required minLength="2" maxLength="40"/>
        <span className="form__input-error inputName-error">Please fill out this field.</span>
      </label>
      <label className="form__field">
        <input type="text" className="form__input form__input_job" id="inputJob" placeholder="about me" name="about" defaultValue="Explorer" required minLength="2" maxLength="200"/>
        <span className="form__input-error inputJob-error">Please fill out this field.</span>
      </label>
  </div>
}
