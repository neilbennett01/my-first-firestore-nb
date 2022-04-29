import admin from "firebase-admin"; //imports firebase library from tools

import serviceAccount from "./credentials.js"; //imports credentials to connect to firebase

admin.initializeApp({ // connects to the firebase project NOT FIRESTORE
  credential: admin.credential.cert(serviceAccount), // creating a certificate from the credentials and puts into a certificate
});

//now we are connected to OUR firebase project and services

const db = admin.firestore(); //creates a shortcut, db, to access the Firestore database

const restaurantsCol = db.collection("restaurants"); // sets up shortcut to point to our collection

// restaurantsCol.get() //get ALL restaurants
//     .then(snapshot => {
//         snapshot.docs.forEach(doc => console.log(doc.data()))
//     })
// //    .catch(err => console.error(err)) SAME AS BELOW
//     .catch(console.error)

    restaurantsCol
    // .where('name', '==', 'Bolay')
    .where('rating', '>=', 4.75)
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => console.log(doc.data()))
    })
    .catch(console.error)