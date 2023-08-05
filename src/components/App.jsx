import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import PopupWithForm from './PopupWithForm/PopupWithForm.jsx';
import ImagePopup from './ImagePopup/ImagePopup.jsx';
import { useCallback, useState, useEffect } from 'react';
import CurrentUserContext from './contexts/CurrentUserContext.js'
import api from '../utils/api.js';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup.jsx';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup.jsx';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)

  const [isCardSelect, setCardSelect] = useState({})
  const [isImagePopup, setIsImagePopup] = useState(false)
  
  const [isDeletePopupOpen, setDeletePopupOpen ] = useState(false)

  const [currentUsers, setCurrentUsers] = useState([])

  const [cards, setCards] = useState([])

  const[isDeleteCards, setDeleteCards] = useState('')


  const setStateClosePopup = useCallback(() =>{
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setDeletePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopup(false)
  }, [])

  const closePopupByEsc = useCallback((evt) => {
    if (evt.key === 'Escape') {
      setStateClosePopup()
          document.removeEventListener('keydown', closePopupByEsc)
        }
  }, [setStateClosePopup])

  const closeAllPopups = useCallback(() => {
    setStateClosePopup()
    document.removeEventListener('keydown', closePopupByEsc)
  },[setStateClosePopup, closePopupByEsc])

  function setEvantListenerForKeydown() {
    document.addEventListener('keydown', closePopupByEsc)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
    setEvantListenerForKeydown()
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
    setEvantListenerForKeydown()
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
    setEvantListenerForKeydown()
  }

  function handleCardsClick(card) {
    setCardSelect(card)
    setIsImagePopup(true)
    setEvantListenerForKeydown()
  }

  function handleDeletePopup(cardId) {
    setDeleteCards(cardId)
    setDeletePopupOpen(true)
    setEvantListenerForKeydown()
  }

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setCurrentUsers(dataUser)
        setCards(dataCard);
      });
  },[])

  function handleCardDelete(evt) {
    evt.preventDefault();
    api.deleteCard(isDeleteCards)
      .then(() => {
        setCards(cards.filter((element) => {
          return element._id !== isDeleteCards;
        }));
        closeAllPopups();
      })
      .catch((err) => console.error(`Ошибка удаления карточки ${err}`));
  }

  function handleUpDateUser(dataUser, reset) {
    api.setUserInfo(dataUser)
      .then(res => {
        setCurrentUsers(res);
        closeAllPopups();
        reset();
      })
      .catch((err) => console.error(`Ошибка редактирования профиля ${err}`));
  }

  function handleUpDateAvatar(dataUser, reset) {
    api.setAvatar(dataUser)
      .then(res => {
        setCurrentUsers(res);
        closeAllPopups();
        reset();
      })
      .catch((err) => console.error(`Ошибка обновления аватара ${err}`));
  }

  function handleAddCards(dataCard, reset) {
    api.addCards(dataCard)
      .then((res) => {
        setCards([res, ...cards])
        closeAllPopups();
        reset();
      })
      .catch((err) => console.error(`Ошибка добавления карточки ${err}`));
  }


  return (
    
    <CurrentUserContext.Provider value={currentUsers}>
      <div className="page__content">
        
        <Header/>

        <Main
          onEditProfile = {handleEditProfileClick}
          onEditeAvatar = {handleEditAvatarClick}
          onAddPlace = {handleAddPlaceClick}
          onCardElement = {handleCardsClick}
          onDeleteCard = {handleDeletePopup}
          cards ={cards}
        />

        <Footer/>

        <EditProfilePopup
          onUpDateUser = {handleUpDateUser}
          isOpen ={isEditProfilePopupOpen}
          onClose = {closeAllPopups}
        />

        <EditAvatarPopup
          onUpdateAvatar = {handleUpDateAvatar}
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
        />

        <AddPlacePopup
          onAddPlace={handleAddCards}
          isOpen ={isAddPlacePopupOpen}
          onClose = {closeAllPopups}
        />

        <PopupWithForm
          name='delete'
          title='Вы уверены?'
          titleButton='Да'
          isOpen ={isDeletePopupOpen}
          onClose = {closeAllPopups}
          onSubmit = {handleCardDelete}
        />

        <ImagePopup 
          card = {isCardSelect}
          isOpen = {isImagePopup}
          onClose = {closeAllPopups}
        />
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
