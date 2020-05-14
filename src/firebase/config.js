const {
    REACT_APP_apiKey_firebase,
    REACT_APP_authDomain_firebase,
    REACT_APP_databaseURL_firebase,
    REACT_APP_projectId_firebase,
    REACT_APP_storageBucket_firebase,
    REACT_APP_messagingSenderId_firebase,
    REACT_APP_appId_firebase
} = process.env

const config = {
    apiKey: REACT_APP_apiKey_firebase,
    authDomain: REACT_APP_authDomain_firebase,
    databaseURL: REACT_APP_databaseURL_firebase,
    projectId: REACT_APP_projectId_firebase,
    storageBucket: REACT_APP_storageBucket_firebase,
    messagingSenderId: REACT_APP_messagingSenderId_firebase,
    appId: REACT_APP_appId_firebase
}

export default config