import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import PopupWithForm from './PopupWithForm/PopupWithForm.jsx';

function App() {

  function handleEditAvatarClick() {
  }
  return (
    <div className="page__content">
      
      <Header/>

      <Main
        onAvatar = {handleEditAvatarClick}
      />

      <Footer/>

      <PopupWithForm
        name='edite-profile'
        title='Редактировать профиль'
      >
        <input
          id="username-input"
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
        name='add-card'
        title='Новое место'
        titleButton='Создать'
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
        name='edite-avatar'
        title='Обновить аватар'
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
      name='delete'
      title='Вы уверены?'
      titleButton='Да'
      />

      {/*  Попап "Открыть фото"*/}
      <div className="popup popup_open-images">
        <div className="popup__container popup__container_open-image">
          <button type="button" className="popup__button-close" />
          <img className="popup__image-full" src="#" alt="#" />
          <p className="popup__image-signature" />
        </div>
      </div>
    </div>
  );
}

export default App;
