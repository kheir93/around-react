import React, { useState, useEffect } from "react";
import api from './utils/api';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import ProfileModal from "./components/profileModal.js";
import CardModal from "./components/cardModal.js";
import DeleteModal from "./components/deleteModal.js";
import AvatarModal from "./components/avatarModal.js";
import ImagePopup from "./components/ImagePopup";


export default function App() {

  //State management//
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard , setSelectedCard] = useState(null);

  //Escape key bind//
  function escKey(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
    return closeAllPopups()
    }
  };

  //Escape function//
  function escUp() {
    document.addEventListener("keyup", escKey);
  };

  //Profile button//
  function handleEditProfileClick(e) {
    setIsEditProfilePopupOpen(true);
    escUp()
  };

  //Add button//
  function handleAddPlaceClick(e) {
    setIsAddPlacePopupOpen(true);
    escUp()
  };

  //Avatar icon//
  function handleEditAvatarClick(e) {
    setIsEditAvatarPopupOpen(true);
    escUp()
  };

  //Image zoomin//
  function handleCardClick(card) {
    setSelectedCard(card);
    escUp()
  };

  //Delete button//
  function handleCarDelete(card) {
    setIsDeletePopupOpen(card);
    escUp()
  };

  function closePopup(e) {
    if (e.target.classList.contains("popup")) {
    closeAllPopups()
    }
  }

  //Popup closing management//
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
    escUp()
  }

  return (
    <div className="root">
      <Header/>
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onBinClick={handleCarDelete}
        onCardClick={handleCardClick}
      />

      <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar'} buttonName='Save' onClose={closeAllPopups} onPopupClose={closePopup}>
        <AvatarModal title='Change profile picture'/>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit'} buttonName='Save' onClose={closeAllPopups} onPopupClose={closePopup}>
        <ProfileModal title='Edit profile'/>
      </PopupWithForm>

       <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add'} buttonName='Create' onClose={closeAllPopups} onPopupClose={closePopup}>
        <CardModal placeholder='Title' title='New place'/>
      </PopupWithForm>

      <PopupWithForm isOpen={isDeletePopupOpen} name='delete' buttonName='Yes' onClose={closeAllPopups} onPopupClose={closePopup}>
        <DeleteModal title='Are you sure ?'/>
      </PopupWithForm>

      <ImagePopup card={selectedCard} name={'place'} onClose={closeAllPopups} onPopupClose={closePopup}/>

      <Footer/>
    </div>
  );
}

