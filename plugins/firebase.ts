import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL:
      "https://realtimedatabasechat-88812-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  };

  const firebase = initializeApp(firebaseConfig);
  const db = getDatabase(firebase);

  return {
    provide: {
      db,
    },
  };
});
