import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import PopupWithForm from './PopupWithForm/PopupWithForm.jsx';
import PopupImage from './PopupImage/PopupImage.jsx';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)

  const [isCardSelect, setCardSelect] = useState({})
  const [isImagePopup, setIsImagePopup] = useState(false)


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopup(false)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardsClick(card) {
    setCardSelect(card)
    setIsImagePopup(true)
    // setEvantListenerForDocument()

  }

  // function handleDelete() {
  // }

  return (
    <div className="page__content">
      
      <Header/>

      <Main
        onEditProfile = {handleEditProfileClick}
        onEditeAvatar = {handleEditAvatarClick}
        onAddPlace = {handleAddPlaceClick}
        onCardElement = {handleCardsClick}
      />

      <Footer/>

      <PopupWithForm
        name='edite-profile'
        title='Редактировать профиль'
        isOpen ={isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      >
        <input id="username-input"
          type="text"
          className="popup__input popup__input_type_username"
          name="username"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span id="username-input-error" className="popup__input-error" />
        <input
          id="subtitle-input"
          type="text"
          className="popup__input popup__input_type_subtitle"
          name="subtitle"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span id="subtitle-input-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name='edite-avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      >
        <input
          id="image-input"
          type="url"
          className="popup__input popup__input_type_link"
          name="image"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span id="image-input-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
        titleButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      >
        <input
            id="title-input"
            type="text"
            className="popup__input popup__input_type_title"
            name="title"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required=""
        />
        <span id="title-input-error" className="popup__input-error" />
        <input
          id="link-input"
          type="url"
          className="popup__input popup__input_type_link"
          name="link"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span id="link-input-error" className="popup__input-error" />
      </PopupWithForm>

      <PopupWithForm
      name='delete'
      title='Вы уверены?'
      titleButton='Да'
      />

      <PopupImage 
      card = {isCardSelect}
      isOpen = {isImagePopup}
      onClose = {closeAllPopups}
      />
      
    </div>
  );
}

export default App;
