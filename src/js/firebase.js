import firebase from 'firebase'

const config = require('../json/fireconfig');
firebase.initializeApp(config);

export const app = firebase;
export const database = firebase.database();