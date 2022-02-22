function PopupWithForm () {
    return <div>
      <div className="edit-modal popup">
      <form className="form">
        <div className="popup__close-button-container ">
          <button className="popup__close-button" type="button"></button>
        </div>
          <h2 className="form__title">Edit profile</h2>
        <label className="form__field">
          <input type="text" className="form__input form__input_name" id="inputName" placeholder="name" name="name" value="Jacques Cousteau" required minlength="2" maxlength="40"/>
          <span className="form__input-error inputName-error">Please fill out this field.</span>
        </label>
        <label className="form__field">
          <input type="text" className="form__input form__input_job" id="inputJob" placeholder="about me" name="about" value="Explorer" required minlength="2" maxlength="200"/>
          <span className="form__input-error inputJob-error">Please fill out this field.</span>
        </label>
        <button className="form__save" type="submit">Save</button>
      </form>
    </div>

    <div className="add-modal popup">
      <form className="form">
        <div className="popup__close-button-container">
          <button className="popup__close-button" type="reset"></button>
        </div>
        <h2 className="form__title">New place</h2>
        <label className="form__field">
          <input type="text" className="form__input form__input_title" id="inputTitle" placeholder="Title" value="" name="title" required minlength="2" maxlength="30"/>
          <span className="form__input-error inputTitle-error">Please fill out this field.</span>
        </label>
        <label className="form__field">
          <input type="url" className="form__input form__input_image" id="inputImage" placeholder="Image link" value="" name="url" required/>
          <span className="form__input-error inputImage-error">Please enter a web address.</span>
        </label>
        <button className="form__save" type="submit">Create</button>
      </form>
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
    <div className="avatar-modal popup">
      <form className="form">
        <div className="popup__close-button-container">
          <button className="popup__close-button" type="reset"></button>
        </div>
        <h2 className="form__title">Change profile picture</h2>
        <label className="form__field">
          <input type="url" className="form__input form__input_avatar" id="inputAvatar" placeholder="Avatar image link" value="" name="avatar" required/>
          <span className="form__input-error inputAvatar-error">Please enter a web address.</span>
        </label>
        <button className="form__save" type="submit">Save</button>
      </form>
    </div>
    </div>
}

export default PopupWithForm;
