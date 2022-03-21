import React, { useState, useEffect } from "react";
import api from './utils/api'
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import ProfileModal from "./components/profileModal.js";
import CardModal from "./components/cardModal.js";
import DeleteModal from "./components/deleteModal.js";
import AvatarModal from "./components/avatarModal.js";

export default function App() {

  //Event triggers management//
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // const [isCardClicked, setIsCardClicked] = useState(false)


  function escKey(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
    return closeAllPopups()
    }
  };

  function handleEditProfileClick(e) {
    setIsEditProfilePopupOpen(true);
    console.log(isEditProfilePopupOpen)
    document.addEventListener("keyup", escKey);
  };

  function handleAddPlaceClick(e) {
    setIsAddPlacePopupOpen(true);
    console.log(isAddPlacePopupOpen)
    document.addEventListener("keyup", escKey);
  };

  function handleEditAvatarClick(e) {
    setIsEditAvatarPopupOpen(true);
    document.addEventListener("keyup", escKey);
  };

  function closePopup(e) {
    if (e.target.classList.contains("popup")) {
    closeAllPopups()
    }
  }

  // function handleCardClick() {
  //   setIsCardClicked(true)
  // }

  function closeAllPopups(e) {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
  }



  return (
    <div className="root">
      <Header/>
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}>
      </Main>
      {/* <ProfileModal
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <CardModal
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      /> */}
      <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar'} buttonName='Save' onClose={closeAllPopups}  onPopupClose={closePopup}>
        <AvatarModal/>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit'} buttonName='Save' onClose={closeAllPopups} onPopupClose={closePopup}>
        <ProfileModal/>
      </PopupWithForm>

       <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add'} buttonName='Create' onClose={closeAllPopups} onPopupClose={closePopup}>
        <CardModal placeholder='Title'/>
      </PopupWithForm>

      <Footer/>

    </div>
  );
}

