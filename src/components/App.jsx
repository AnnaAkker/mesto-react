import Header from './Header/Header.jsx';

function App() {
  return (
    <>
    <div className="page__content">
      <Header/>
      <main>
        <section className="profile">
          <div className="profile__description">
            <button
              className="button-image-overlay profile__image-overlay"
              type="button"
            >
              <img
                className="profile__image"
                src="#"
                alt="Фотография в профиле"
              />
            </button>
            <div className="profile__block">
              <h1 className="profile__name" />
              <button type="button" className="profile__button-edit" />
              <p className="profile__subtitle" />
            </div>
          </div>
          <button type="button" className="profile__button-add" />
        </section>
        <section className="elements"></section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2023 Mesto Russia</p>
      </footer>
      {/* Попап "Редактировать профиль" */}
      <div className="popup popup_edit-profile">
        <div className="popup__container">
          <button type="button" className="popup__button-close" />
          <form className="popup__form" name="profileform" noValidate="">
            <h2 className="popup__name">Редактировать профиль</h2>
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
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
    {/*  Попап "Добавить карточку"*/}
    <div className="popup popup_add-card">
      <div className="popup__container">
        <button type="button" className="popup__button-close" />
        <form className="popup__form" name="cardform" noValidate="">
          <h2 className="popup__name">Новое место</h2>
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
          <button type="submit" className="popup__submit-button">
            Создать
          </button>
        </form>
      </div>
    </div>
    {/*  Попап "Открыть фото"*/}
    <div className="popup popup_open-images">
      <div className="popup__container popup__container_open-image">
        <button type="button" className="popup__button-close" />
        <img className="popup__image-full" src="#" alt="#" />
        <p className="popup__image-signature" />
      </div>
    </div>
    {/* Попап аватар */}
    <div className="popup popup_edit-image">
      <div className="popup__container">
        <button type="button" className="popup__button-close" />
        <form className="popup__form" name="imageform" noValidate="">
          <h2 className="popup__name">Обновить аватар</h2>
          <input
            id="image-input"
            type="url"
            className="popup__input popup__input_type_link"
            name="image"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span id="image-input-error" className="popup__input-error" />
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    {/* Удаление карточки */}
    <div className="popup popup_card_delete">
      <div className="popup__container">
        <button type="button" className="popup__button-close" />
        <form className="popup__form" name="deleteCard" noValidate="">
          <h2 className="popup__name">Вы уверены?</h2>
          <button type="submit" className="popup__submit-button">
            Да
          </button>
        </form>
      </div>
    </div>
  </>
  );
}

export default App;
