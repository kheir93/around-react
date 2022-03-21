import React from "react";

export default function Card({alt, src, likes, userId}) {

  const [isLikeActive, setIsLikeActive] = (false)


    if (likes.some((isLiked) => isLiked._id === userId)) {
      return   setIsLikeActive(true)

    }




  <div>
    <li className="card" id="card" >
      <button className="card__delete" id="card__delete" type="button"></button>
      <img className="card__image" id="card__image" alt={alt}  src={src}/>
      <h2 className="card__caption" id="card__caption">{alt}</h2>
      <div className="card__like" id="cardLike">
        <button  className="card__like-icon" id="cardLikeIcon" onClick={isLikeActive} type="button"></button>
        <p className="card__like-count" id="cardLikeCount">{likes.length}</p>
      </div>

    </li>
  </div>
}
