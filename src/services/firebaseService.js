import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4n2MPqO4eeX-ZrZRL7jviQ0ipxhUY5YQ",
    authDomain: "animationapp-e1baf.firebaseapp.com",
    databaseURL: "https://animationapp-e1baf.firebaseio.com",
    projectId: "animationapp-e1baf",
    storageBucket: "animationapp-e1baf.appspot.com",
    messagingSenderId: "646768269583",
    appId: "1:646768269583:web:fbd74ee28e0fb8ec7c467a"
  };

  
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
               if (currentToken) {
                 console.log("TOKEN")
                 console.log(currentToken);
               } else {
                console.log('No registration token available. Request permission to generate one.');

               }
             }).catch((err) => {
               console.log('An error occurred while retrieving token. ', err);
             });
        }
    })
}