import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyDQ3FlJpXBL3f_OKGGUxOXxup3KS8-2Qto",
    authDomain: "fbclonemern.firebaseapp.com",
    databaseURL: "https://fbclonemern.firebaseio.com",
    projectId: "fbclonemern",
    storageBucket: "fbclonemern.appspot.com",
    messagingSenderId: "7822815601",
    appId: "1:7822815601:web:90f0156c811a332674c6d0",
    measurementId: "G-8GVMQHZXNM"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export {
    auth,
    provider
}
export default db