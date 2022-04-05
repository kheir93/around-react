import React, { useState, useEffect } from "react";
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import DeleteConfirmationPopup from "./DeleteConfirmationPopup";

export default function App() {

  //State management//
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardDelete, setCardDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);

  //Cards and profile rendering//
  useEffect(() => {
    api.getAppInfo()
    .then(([profile, cardData]) => {
      setCurrentUser(profile)
      setCards(cardData)
    })
    .catch(err => console.log(err))
  }, []);

  //Profile popup validation//
  function handleUpdateUser(e) {
    api.setUserInfo({
      name: e.name,
      about : e.about})
    .then((profile) => {
      setCurrentUser(profile)
      closeAllPopups()
    })
    .catch(err => console.log(err))
  }

  //Avatar popup validation//
  function handleUpdateAvatar(e) {
    api.setUserAvatar({avatar: e.avatar})
    .then((profile) => {
      setCurrentUser(profile)
      closeAllPopups()
    })
    .catch(err => console.log(err))
  }

  function handleAddPlaceSubmit(data) {
    api.newCard({
      title: data.title,
      link: data.link
    })
    .then((newCard) => {
     setCards([newCard, ...cards]);
     closeAllPopups()
  })
  .catch(err => console.log(err))
  }

  //Delete button//
  function handleDeleteClick(card) {
    setIsDeletePopupOpen(true);
    setCardDelete(card)
  };

  function handleCardDelete(card) {
    api.removeCard({cardId: card._id})
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => console.log(err));
    };

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
  };

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    if (isLiked) {
      api.removeLike(card._id, isLiked).then((newCard) => {
          setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })} else {
      api.addLike(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      }).catch(err => console.log(err))
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header/>
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardDelete={handleDeleteClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
        />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onOverlayClick={handleOverlayClick} onUpdateAvatar={handleUpdateAvatar}/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onOverlayClick={handleOverlayClick} onUpdateUser={handleUpdateUser}/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onOverlayClick={handleOverlayClick} onAddPlaceSubmit={handleAddPlaceSubmit}/>

        <DeleteConfirmationPopup isOpen={isDeletePopupOpen} card={cardDelete} onClose={closeAllPopups} onOverlayClick={handleOverlayClick} onDeleteConfirmation={handleCardDelete}/>

        {/* <PopupWithForm isOpen={isDeletePopupOpen} name='delete' buttonName='Yes' title='Are you sure ?'  onClose={closeAllPopups} onOverlayClick={handleOverlayClick}>
          <DeleteModal onSubmit={handleCardDelete}/>
        </PopupWithForm> */}

        <ImagePopup card={selectedCard} name={'place'} onClose={closeAllPopups} overlayCloseByClick={closeAllPopups} onOverlayClick={handleOverlayClick}/>

        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
}

