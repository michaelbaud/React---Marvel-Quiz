const validateEmail = (value, emailInputRef) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(value)) {
        if (value === "") {
            emailInputRef.current.innerHTML = null
            emailInputRef.current.classList.remove('tooltipOn')
        } else {
            emailInputRef.current.innerHTML = "Email invalide"
            emailInputRef.current.classList.add('tooltipOn')
        }
        // setDisabled(true)
        return false
    } else {
        emailInputRef.current.innerHTML = null
        emailInputRef.current.classList.remove('tooltipOn')
        // setDisabled(false)
        return true
    }
}

const validatePassword = (value, passwordInputRef) => {
    const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    const regex2 = /([<>,?;.:/!§*\-=+})\]°à@ç^_\\è|(['{"#é~&œ])/
    if (!regex1.test(value) || regex2.test(value)) {
        if (value === "") {
            passwordInputRef.current.innerHTML = null
            passwordInputRef.current.classList.remove('tooltipOn')
        } else if (regex2.test(value)) {
            passwordInputRef.current.innerHTML = "Le mot de passe ne doit pas contenir de caractères spéciaux"
            passwordInputRef.current.classList.add('tooltipOn')
        } else {
            passwordInputRef.current.innerHTML = "Le mot de passe doit contenir minimum 8 caratères, une majuscule, une minuscule et un chiffre"
            passwordInputRef.current.classList.add('tooltipOn')
        }
        // setDisabled(true)
        return false
    } else {
        passwordInputRef.current.innerHTML = null
        passwordInputRef.current.classList.remove('tooltipOn')
        // setDisabled(false)
        return true
    }
}

const validateConfirmPassword = (value, passwordInputRef, password) => {
    if (value !== password) {
        if (value === "") {
            passwordInputRef.current.innerHTML = null
            passwordInputRef.current.classList.remove('tooltipOn')
        } else {
            passwordInputRef.current.innerHTML = "La saisie est différente du mot de passe"
            passwordInputRef.current.classList.add('tooltipOn')
        }
        // setDisabled(true)
        return false
    } else {
        passwordInputRef.current.innerHTML = null
        passwordInputRef.current.classList.remove('tooltipOn')
        // setDisabled(false)
        return true
    }
}

export { validateEmail, validatePassword, validateConfirmPassword }