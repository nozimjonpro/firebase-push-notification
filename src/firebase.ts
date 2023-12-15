import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDNhNZ90h1phe4Az-BiV32_oQxAef4PCi0",
  authDomain: "messaging-e2b5a.firebaseapp.com",
  projectId: "messaging-e2b5a",
  storageBucket: "messaging-e2b5a.appspot.com",
  messagingSenderId: "878510768305",
  appId: "1:878510768305:web:12c6111f07056360e66290",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    "BPoFo2Q9Jt6V79haMVFSL2Ihx-2r_JjnAn-p7i8OCklbbnEZ564s95s9KxO2EDMNqwFaUV6pw022_bX6HnNM1cs",
}).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    console.log("CurrentToken not exist");
  }
});

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      }
    })
    .catch((err) => console.log(err));
}

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
