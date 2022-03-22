import React, {useEffect, useState} from 'react';
import api from '../utils/api';
import Card from './Card';

export default function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick, onBinClick}) {

  //State management//
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  //Getting user and cards from api//
  useEffect(() => {
    api.getAppInfo()
    .then(([profile, cardData]) => {
      setUserName(profile.name);
      setUserDescription(profile.about);
      setUserAvatar(profile.avatar);
      setCards(cardData)
    })
    .catch(err => console.log(err))
  }, []);

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
          {cards.map((card) => (
            <Card
              key={card._id}
              like={card.like}
              card={card}
              onCardClick={onCardClick}
              onBinClick={onBinClick}
            />))}
        </ul>
      </section>
    </main>
  );
}


