import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'

// Helpers
import { validateEmail } from '../../helper/index'

import { FirebaseContext } from '../../firebase'

const ForgetPassword = ({ history }) => {

    const firebase = useContext(FirebaseContext)

    const [email, setEmail] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const emailInputRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        firebase.passwordReset(email)
            .then(() => {
                setError(null)
                setSuccess(`Consultez votre email ${email} pour changer le mot de passe.`)
                setEmail("")

                setTimeout(() => {
                    history.push('/login')
                }, 5000);
            })
            .catch(error => {
                setError(error)
                setEmail("")
            })
    }

    useEffect(() => {
        validateEmail(email, emailInputRef) ? setDisabled(false) : setDisabled(true)
    }, [email])

    return (

        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftForget"></div>

                <div className="formBoxRight">
                    <div className="formContent">

                        {success && <span
                            style={{
                                border: '1px solid green',
                                background: 'green',
                                color: '#fff'
                            }}>
                            {success}
                        </span>}

                        {error && <span>{error.message}</span>}

                        <h2>Mot de passe oublié?</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="text" autoComplete="off" required />
                                <div ref={emailInputRef} className="tooltip"></div>
                                <label htmlFor="email">Email</label>
                            </div>

                            <button disabled={disabled}>Récupérer</button>

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

export default ForgetPassword
