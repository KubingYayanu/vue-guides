import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAH3uoLzs839vGEQNFKlATDKE9vI-WLfMk',
  authDomain: 'turnout-da094.firebaseapp.com',
  databaseURL: 'https://turnout-da094.firebaseio.com',
  projectId: 'turnout-da094',
  storageBucket: 'turnout-da094.appspot.com',
  messagingSenderId: '90894302021'
};

export const firebaseApp = firebase.initializeApp(config);
