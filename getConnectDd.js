import admin from "firebase-admin"; //imports firebase library from tools
import serviceAccount from "./credentials.js"; //imports credentials to connect to firebase

admin.initializeApp({ // connects to the firebase project NOT FIRESTORE
  credential: admin.credential.cert(serviceAccount), // creating a certificate from the credentials and puts into a certificate
});

const db = admin.firestore(); //creates a shortcut, db, to access the Firestore database
export const restaurantsCol = db.collection("restaurants"); // sets up shortcut to point to our collection