import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBDtiLr96PR0SnP6S9gPeZza6Y8MCV4p0k",
    authDomain: "recruiter-tracker.firebaseapp.com",
    projectId: "recruiter-tracker",
    storageBucket: "recruiter-tracker.appspot.com",
    messagingSenderId: "522790668244",
    appId: "1:522790668244:web:5c4f32c1c0adf65c3cf841",
    measurementId: "G-FNNCCNNMD1"
};

const fire = firebase.initializeApp(config);

export default fire;