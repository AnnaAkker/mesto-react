import { useEffect, useState } from "react"
import api from "../../utils/api"
import Card from "../Card/Card.jsx"

export default function Main({ onEditProfile, onEditeAvatar, onAddPlace, onCardElement }) {

    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getInfo(), api.getCards()])
          .then(([dataUser, dataCard]) => {
            setUserName(dataUser.name);
            setUserDescription(dataUser.about);
            setUserAvatar(dataUser.avatar);
            dataCard.forEach(data => data.myid = dataUser._id);
            setCards(dataCard);
          });
    },[])


    return (
        <main>
            <section className="profile">
                <div className="profile__description">
                    <button className="button-image-overlay profile__image-overlay" type="button" onClick={onEditeAvatar}>
                    <img
                        className="profile__image"
                        src={userAvatar}
                        alt="Фотография в профиле"
                    />
                    </button>
                    <div className="profile__block">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__button-edit" onClick={onEditProfile}/>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__button-add" onClick={onAddPlace} />
            </section>
            <section className="elements">
                {cards.map(data => {
                    return (
                        <div className="elements__card" key = {data._id} >
                            <Card card ={data} onCardElement={onCardElement}/>
                        </div>
                )
            })}
            </section>
        </main>
    )
};