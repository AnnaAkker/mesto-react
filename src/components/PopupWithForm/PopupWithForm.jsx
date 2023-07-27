export default function PopupWithForm({ name, title, titleButton, children, isOpen, onClose }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
            <button type="button" className="popup__button-close" onClick={onClose} />
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