import kal from'../images/kal.jpg'

function handleEditAvatarClick(e) {
  const avatarButton = document.querySelector('.profile__avatar-button')
  const avatarModal = document.querySelector('.avatar-modal')
  avatarButton.addEventListener('click', avatarModal.classList.add('popup_open'))
};

function handleEditProfileClick(e) {
  const editButton = document.querySelector('.profile__edit-button')
  const editModal = document.querySelector('.edit-modal')
  editButton.addEventListener('click', editModal.classList.add('popup_open'))
};

function handleAddPlaceClick(e) {
  const addButton = document.querySelector('.profile__add-button')
  const addModal = document.querySelector('.add-modal')
  addButton.addEventListener('click', addModal.classList.add('popup_open'))
};

function Main () {
  return <main>
    <section className="profile">
      <button className="profile__avatar-button" onClick={handleEditAvatarClick}>
        <img className="profile__avatar" id="infoAvatar" src={kal} alt="kal"/>
      </button>
        <h1 className="profile__name" id="infoName">Kheireddine Allal</h1>
        <button className="profile__edit-button" onClick={handleEditProfileClick} type="button"></button>
        <p className="profile__about" id="infoAbout">Aspirant WebDev</p>
        <button className="profile__add-button" onClick={handleAddPlaceClick} type="button"></button>
    </section>
    <section>
      <ul className="elements" id="elements">
        <template className="cardTemplate"  id="cardTemplate">
        <li className="card" id="card">
          <button className="card__delete" id="card__delete" type="button"></button>
          <img className="card__image" id="card__image"/>
          <h2 className="card__caption" id="card__caption"></h2>
          <div className="card__like" id="cardLike">
            <button  className="card__like-icon" id="cardLikeIcon" type="button"></button>
            <p className="card__like-count" id="cardLikeCount"></p>
          </div>
        </li>
        </template>
      </ul>
    </section>
    <div className="place-modal popup">
      <figure className="place-modal__figure">
        <button className="popup__close-button"></button>
        <img className="place-modal__image" type="image" name="place" src="#" alt="#"/>
        <h2 className="place-modal__caption"></h2>
      </figure>
    </div>
  </main>
}

export default Main;
