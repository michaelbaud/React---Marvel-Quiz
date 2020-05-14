import app from 'firebase/app'
import 'firebase/auth'

import config from './config'

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    // Inscription
    signupUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

    // Connexion
    loginUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

    // Déconnexion
    signoutUser = () => this.auth.signOut()

    // Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email)
}

export default Firebase