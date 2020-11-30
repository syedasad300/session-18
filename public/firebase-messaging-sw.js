importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

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
  firebase.messaging();