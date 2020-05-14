import React, { useState, Fragment, useContext, useEffect } from 'react'

import { FirebaseContext } from '../../firebase'

// Components
import Logout from '../Logout'
import Quiz from '../Quiz'



const Welcome = ({ history }) => {

    const firebase = useContext(FirebaseContext)

    const [userSession, setUserSession] = useState(null)

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : history.push('/')
        })
        return () => {
            listener()
        }
    }, [])

    return userSession === null ? (
        <Fragment>
            <div className="loader"></div>
        </Fragment>
    ) : (
            <div className="quiz-bg">
                <div className="container">
                    <Logout />
                    <Quiz />
                </div>
            </div>
        )


}

export default Welcome
