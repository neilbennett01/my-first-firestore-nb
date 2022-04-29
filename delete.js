import admin from "firebase-admin"; //imports firebase library from tools

import serviceAccount from "./credentials.js"; //imports credentials to connect to firebase

admin.initializeApp({
  // connects to the firebase project NOT FIRESTORE
  credential: admin.credential.cert(serviceAccount), // creating a certificate from the credentials and puts into a certificate
});

//now we are connected to OUR firebase project and services

const db = admin.firestore(); //creates a shortcut, db, to access the Firestore database

const restaurantsCol = db.collection("restaurants"); // sets up shortcut to point to our collection


restaurantsCol.doc('xF1uMeYkBFw5nfPx1omi').delete()
.then(res => console.log('success deleting xF1uMeYkBFw5nfPx1omi'))
.catch(err => console.log('xF1uMeYkBFw5nfPx1omi', err))