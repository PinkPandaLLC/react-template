import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
// Place config data from firebase console here
apiKey: "AIzaSyC6fUqW38dt9Htqm-gJpr9fqWVAlyAzOqI",
authDomain: "thedojosite-a82ae.firebaseapp.com",
projectId: "thedojosite-a82ae",
storageBucket: "thedojosite-a82ae.appspot.com",
messagingSenderId: "514477964714",
appId: "1:514477964714:web:69666b1a494e4af7eb3fd3"
}


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// Timestamp function
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
