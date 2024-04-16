import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBVQ9IQzFlUnCtUysMDmnwz9Bnw64wLIg4",
    authDomain: "cakeshop-d8b3f.firebaseapp.com",
    databaseURL: "https://cakeshop-d8b3f-default-rtdb.firebaseio.com",
    projectId: "cakeshop-d8b3f",
    storageBucket: "cakeshop-d8b3f.appspot.com",
    messagingSenderId: "366616111700",
    appId: "1:366616111700:web:e2050dcb3dc4fcf44fdbc1",
    measurementId: "G-MVVD3GB6DR"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};