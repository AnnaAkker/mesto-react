import { useContext } from "react"
import CurrentUserContext from "../contexts/CurrentUserContext"
import ButtonLikes from "../ButtonLikes/ButtonLikes.jsx"

export default function Card({ card, onCardElement, onDeleteCard }) {
    const currentUser = useContext(CurrentUserContext)

    return (
        <div className="elements__card">
             {currentUser._id === card.owner._id && <button type="button" className="elements__trash-button" onClick={() => onDeleteCard(card._id)}/>}
            <img className="elements__image"
            src={card.link}
            alt={`Фотография ${card.name}`}
            onClick={() => onCardElement({link: card.link, name: card.name})}/>

            <div className="elements__description">
                <h2 className="elements__description-title">{card.name}</h2>
                <div className="elements__container">
                <ButtonLikes
                    likes={card.likes}
                    myid={currentUser._id}
                    cardid={card._id}/>
                </div>
            </div>
        </div>
    )
}
