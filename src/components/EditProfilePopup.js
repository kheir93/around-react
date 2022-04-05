import React, {useState, useEffect, useContext} from "react";
import api from '../utils/api';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function EditProfilePopup({isOpen, onClose, onOverlayClick, onUpdateUser}) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  // Subscription to the context
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '')
  }, [currentUser, isOpen])

  // After loading the current user from the API
  // their data will be used in managed components.
  // useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser]);


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} onOverlayClick={onOverlayClick} name="edit" title="Edit Profile" buttonName="Save" submitValue="Submit">
      <label className="form__field" >
        <input type="text" className="form__input form__input_name" onChange={handleChangeName} placeholder="name" name="name" value={name} required minLength="2" maxLength="40"/>
        <span className="form__input-error inputName-error">Please fill out this field.</span>
      </label>
      <label className="form__field">
        <input type="text" className="form__input form__input_job" onChange={handleChangeDescription} placeholder="about me" name="about" value={description} required minLength="2" maxLength="200"/>
        <span className="form__input-error inputJob-error">Please fill out this field.</span>
      </label>
    </PopupWithForm>
  );
}
