export default function PopupImage({ card, isOpen, onClose}) {
    return(
        <div className={`popup popup_open-images ${isOpen && 'popup_opened'}`}>
          <div className="popup__container popup__container_open-image">
            <button type="button" className="popup__button-close" onClick={onClose} />
            <img className="popup__image-full" src={card.link} alt={`Фотография ${card.name}`} />
            <p className="popup__image-signature">{card.name}</p>
          </div>
      </div>
    )
}