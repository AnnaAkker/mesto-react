import { useState } from "react";

 export default function useFormValidation() {
    const [listValue, setListValue] = useState({})
    const [errorMessages, setErrorMessages] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [isValidInput, setIsValidInput] = useState({})

    function handleChange(evt) {
        const name = evt.target.name
        const value = evt.target.value
        const validMessage = evt.target.validMessage
        const valid = evt.target.validity.valid
        const forms = evt.target.forms

        setListValue((oldListValue) => {
            return { ...oldListValue, [name]: value }
        })

        setErrorMessages((oldErrorMessages) => {
            return { ...oldErrorMessages, [name]: validMessage }
        })

        setIsValidInput((oldIsValidInput) => {
            return { ...oldIsValidInput, [name]: valid }
        })

        setIsValid(forms.checkValidity())
    }
    
    return { handleChange }
}