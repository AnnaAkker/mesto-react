import useFormValidation from "../../utils/useFormValidation.js";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";

export default function EditProfilePopup({ isOpen, onClose }) {

    const { handleChange } = useFormValidation()
    return (
        <PopupWithForm
          name='edite-profile'
          title='Редактировать профиль'
          isOpen ={isOpen}
          onClose = {onClose}
        >
          <input id="username-input"
            type="text"
            className="popup__input popup__input_type_username"
            name="username"
            minLength={2}
            maxLength={40}
            required=""
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <span id="subtitle-input-error" className="popup__input-error" />
        </PopupWithForm>
    )
}