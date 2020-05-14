import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'

// Helpers
import { validateEmail, validatePassword, validateConfirmPassword } from '../../helper/index'

import { FirebaseContext } from '../../firebase'

const SignUp = ({ history }) => {

    const firebase = useContext(FirebaseContext)

    const data = {
        pseudo: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [loginData, setLoginData] = useState(data)
    const { pseudo, email, password, confirmPassword } = loginData
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState("")

    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    const confirmPasswordInputRef = useRef(null)

    useEffect(() => {
        const test1 = validatePassword(password, passwordInputRef)
        const test2 = validateEmail(email, emailInputRef)
        const test3 = validateConfirmPassword(confirmPassword, confirmPasswordInputRef, password)
        pseudo !== "" && test1 && test2 && test3 ? setDisabled(false) : setDisabled(true)
    }, [pseudo, email, password, confirmPassword])

    const handleChange = e => setLoginData({ ...loginData, [e.target.id]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        const { email, password } = loginData
        firebase.signupUser(email, password)
            .then(user => {
                setLoginData({ ...data })
                history.push('/welcome')
            })
            .catch(error => {
                setError(error)
                setLoginData({ ...data })
            })
    }

    // const btn = pseudo === "" || email === "" || password === "" || password !== confirmPassword
    //     ? <button disabled>Inscription</button>
    //     : <button>Inscription</button>

    // Gestion erreurs
    const errorMsg = error !== "" && <span>{error.message}</span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup"></div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="text" id="email" autoComplete="off" required />
                                <div ref={emailInputRef} className="tooltip"></div>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" required />
                                <div ref={passwordInputRef} className="tooltip"></div>
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" required />
                                <div ref={confirmPasswordInputRef} className="tooltip"></div>
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>
                            <button disabled={disabled}>Inscription</button>
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
