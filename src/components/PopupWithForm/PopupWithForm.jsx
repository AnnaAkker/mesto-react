export default function PopupWithForm({ name, title, titleButton, children }) {
    return (
        <div className={`popup popup_type_${name}`}>
          <div className="popup__container">
            <button type="button" className="popup__button-close" />
            <form className="popup__form" name={name} noValidate="">
              <h2 className="popup__name">{title}</h2>
              {children}
              <button type="submit" className="popup__submit-button">
                {titleButton || 'Сохранить'}
              </button>
            </form>
          </div>
        </div>
    )
}