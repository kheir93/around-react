import React from "react";

export default function Card({card, onCardClick, onBinClick}) {

  //Card image click click//
  function handleClick() {
    onCardClick(card)
  };

  //Card delete button click//
  function handleDeleteClick() {
    onBinClick(card)
  };

  return (
    <div>
      <li className="card">
        <button className="card__delete" id="card__delete" type="button" onClick={handleDeleteClick}></button>
        <img className="card__image" id="card__image" alt={card.name}  src={card.link} onClick={handleClick}/>
        <h2 className="card__caption" id="card__caption">{card.name}</h2>
        <div className="card__like" id="cardLike" >
          <button  className="card__like-icon" id="cardLikeIcon" type="button"></button>
          <p className="card__like-count" id="cardLikeCount">{card.likes.length}</p>
        </div>
      </li>
    </div>
  );
}
