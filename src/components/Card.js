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
        <button className="card__delete" type="button" onClick={handleDeleteClick}></button>
        <img className="card__image" alt={card.name}  src={card.link} onClick={handleClick}/>
        <h2 className="card__caption">{card.name}</h2>
        <div className="card__like" >
          <button  className="card__like-icon" type="button"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </li>
    </div>
  );
}
