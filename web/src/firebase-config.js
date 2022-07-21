/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyB9ySgGE5Z7VgEFJHWCsgSzxhnjKRHTbYQ",
    authDomain: "friendlychat-e1792.firebaseapp.com",
    projectId: "friendlychat-e1792",
    storageBucket: "friendlychat-e1792.appspot.com",
    messagingSenderId: "898285096277",
    appId: "1:898285096277:web:bacc20373a71a051a973dc"
  };

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}