import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AvatarModal() {

  return <div>
      <h2 className="form__title">Change profile picture</h2>
      <label className="form__field">
        <input type="url" className="form__input form__input_avatar" id="inputAvatar" placeholder="Avatar image link" defaultValue="" name="avatar" required/>
        <span className="form__input-error inputAvatar-error">Please enter a web address.</span>
      </label>

  </div>
}
