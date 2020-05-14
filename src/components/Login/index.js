import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'

// Helpers
import { validateEmail, validatePassword } from '../../helper/index'

import { FirebaseContext } from '../../firebase'


const Login = ({ history }) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState('')

    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)

    useEffect(() => {
        const test1 = validatePassword(password, passwordInputRef)
        const test2 = validateEmail(email, emailInputRef)
        test1 && test2 ? setDisabled(false) : setDisabled(true)
    }, [email, password])

    // useEffect(() => {
    //     if (password.length > 5 && email !== '') {
    //         setBtn(true)
    //     } else if (btn === true) {
    //         setBtn(false)
    //     }
    // }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault()
        firebase.loginUser(email, password)
            .then(user => {
                setEmail('')
                setPassword('')
                history.push('/welcome')
            })
            .catch(error => {
                setError(error)
                setEmail('')
                setPassword('')
            })
    }


    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin"></div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {error !== '' && <span>{error.message}</span>}
                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="text" autoComplete="off" required />
                                <div ref={emailInputRef} className="tooltip"></div>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" required />
                                <div ref={passwordInputRef} className="tooltip"></div>
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <button disabled={disabled}>Connexion</button>
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Nouveau sur Marvel Quiz ? inscrivez-vous maintenant.</Link>
                            <br />
                            <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié ? Récupérez le ici.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
