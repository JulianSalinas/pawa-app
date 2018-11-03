import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyByauTNityhJ4C1BJ7k7ooJ1pi_aeh_WyM",
    authDomain: "pawa-2c7a3.firebaseapp.com",
    databaseURL: "https://pawa-2c7a3.firebaseio.com",
    projectId: "pawa-2c7a3",
    storageBucket: "pawa-2c7a3.appspot.com",
    messagingSenderId: "159139874110"
};

firebase.initializeApp(config);

export const app = firebase;
export const auth = firebase.auth();
export const database = firebase.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();