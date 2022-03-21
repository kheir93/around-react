import React, {useEffect, useState} from 'react';
import api from '../utils/api'
import Card from './Card';

export default function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, likes, onCardClick}) {

  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([])
  // const [cardLoading, isCardLoading] = useState("")

  useEffect(() => {
    api.getAppInfo()
    .then(([profile]) => {
      //const profileId = profile._id;
      setUserName(profile.name)
      setUserDescription(profile.about)
      setUserAvatar(profile.avatar)
    })
    //const profileId = profile._id;
    .catch(err => console.log(err));
  });



  useEffect(() => {
    api.getInitialCards()
    .then(([cardData]) =>{
      setCards(cardData.map((card) => ({
        _id: card._id,
        card: card,
        alt: card.name,
        src: card.link
        }))
      )
      console.log(setCards)
    //const profileId = profile._id;
    .catch(err => console.log(err));
    })
    }, [])

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" onClick={onEditAvatarClick} id='avatarButton'>
          <img className="profile__avatar" id="infoAvatar"  src={userAvatar} alt="avatar"/>
        </button>
        <h1 className="profile__name" id="infoName">{userName}</h1>
        <button className="profile__edit-button" onClick={onEditProfileClick} type="button"></button>
        <p className="profile__about" id="infoAbout">{userDescription}</p>
        <button className="profile__add-button" onClick={onAddPlaceClick} type="button"></button>
      </section>
      <section>
        <ul className="elements" id="elements">
          {cards.map((cardData) => (
            <Card
              key={cardData._id}
              src={cardData.link}
              alt={cardData.name}
            />))}
        </ul>
      </section>
      <div className="place-modal popup">
        <figure className="place-modal__figure">
          <button className="popup__close-button"></button>
          <img className="place-modal__image" type="image" name="place" src="#" alt="#"/>
          <h2 className="place-modal__caption"></h2>
        </figure>
      </div>
      <div className="delete-modal popup">
        <form className="form">
          <div className="popup__close-button-container">
            <button className="popup__close-button" type="reset"></button>
          </div>
          <h2 className="form__title">Are you sure ?</h2>
          <button className="form__save" type="submit">Yes</button>
        </form>
      </div>
    </main>
  );
}


