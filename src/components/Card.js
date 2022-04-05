import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({card, onCardClick, onCardDelete, onCardLike}) {

const currentUser = React.useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current card
const isOwn = card.owner._id === currentUser._id;

// Creating a variable which you'll then set in `className` for the delete button
const cardDeleteButtonClassName = (
  `card__delete ${isOwn ? 'card__delete_visible' : 'card__delete_hidden'}`
);

// Check if the card was liked by the current user
const isLiked = card.likes.some(user => user._id === currentUser._id);

// Create a variable which you then set in `className` for the like button
const cardLikeButtonClassName = (
  `card__like-icon ${isLiked ? 'card__like-icon_active' : ''}`
);

//Card image click click//
function handleClick() {
  onCardClick(card)
};

  //Card delete button click//
  function handleDeleteClick() {
    onCardDelete(card)
  };

  function handleLikeClick() {
    onCardLike(card)
  }

  return (
    <li className="card">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <img className="card__image" alt={card.name}  src={card.link} onClick={handleClick}/>
      <h2 className="card__caption">{card.name}</h2>
      <div className="card__like" >
        <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
        <p className="card__like-count">{card.likes.length}</p>
      </div>
    </li>
  );
}
