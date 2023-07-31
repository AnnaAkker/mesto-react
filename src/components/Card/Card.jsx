export default function Card({ card, onCardElement }) {
    return (
        <div className="elements__card">
             {card.myId === card.owner._id && <button type="button" className="elements__trash-button"/>}
            <img className="elements__image"
            src={card.link}
            alt={`Фотография ${card.name}`}
            onClick={() => onCardElement({link: card.link, name: card.name})}/>

            <div className="elements__description">
                <h2 className="elements__description-title">{card.name}</h2>
                <div className="elements__container">
                    <button type="button" className="elements__like-button" />
                    <span className="elements__counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}
