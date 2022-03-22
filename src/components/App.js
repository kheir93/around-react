import React, { useState, useEffect } from "react";
import api from '../utils/api.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ProfileModal from "./ProfileModal.js";
import CardModal from "./CardModal.js";
import DeleteModal from "./DeleteModal.js";
import AvatarModal from "./AvatarModal.js";
import ImagePopup from "./ImagePopup";


export default function App() {

  //State management//
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard , setSelectedCard] = useState(null);

  //Escape key bind//
  // function escKey(evt) {
  //   evt.preventDefault();
  //   if (evt.key === "Escape") {
  //   return closeAllPopups()
  //   }
  // };


  //Profile button//
  function handleEditProfileClick(e) {
    setIsEditProfilePopupOpen(true);
  };

  //Add button//
  function handleAddPlaceClick(e) {
    setIsAddPlacePopupOpen(true);
  };

  //Avatar icon//
  function handleEditAvatarClick(e) {
    setIsEditAvatarPopupOpen(true);
  };

  //Image zoomin//
  function handleCardClick(card) {
    setSelectedCard(card);
  };

  //Delete button//
  function handleCarDelete(card) {
    setIsDeletePopupOpen(card);
  };

  // function closePopup(e) {
  //   if (e.target.classList.contains("popup")) {
  //   closeAllPopups()
  //   }
  // }

  //Popup closing management//
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  function handleOverlayClick(e) {
    if (e.target.classList.contains("popup")) {
    closeAllPopups()
    }
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
      ></Main>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar'} title='Change profile picture' buttonName='Save' onClose={closeAllPopups} onOverlayClick={handleOverlayClick}>
        <AvatarModal/>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit'} title='Edit profile' buttonName='Save' onClose={closeAllPopups} onOverlayClick={handleOverlayClick}>
        <ProfileModal/>
      </PopupWithForm>

       <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add'} title='New place' buttonName='Create' onClose={closeAllPopups} onOverlayClick={handleOverlayClick}>
        <CardModal placeholder='Title'/>
      </PopupWithForm>

      <PopupWithForm isOpen={isDeletePopupOpen} name='delete' buttonName='Yes' title='Are you sure ?' onClose={closeAllPopups} onOverlayClick={handleOverlayClick}>
        <DeleteModal/>
      </PopupWithForm>

      <ImagePopup card={selectedCard} name={'place'} onClose={closeAllPopups} overlayCloseByClick={closeAllPopups} onOverlayClick={handleOverlayClick}/>

      <Footer/>
    </div>
  );
}

