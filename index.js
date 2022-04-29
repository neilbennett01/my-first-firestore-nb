import admin from "firebase-admin"; //imports firebase library from tools

import serviceAccount from "./credentials.js"; //imports credentials to connect to firebase

admin.initializeApp({
  // connects to the firebase project NOT FIRESTORE
  credential: admin.credential.cert(serviceAccount), // creating a certificate from the credentials and puts into a certificate
});

//now we are connected to OUR firebase project and services

const db = admin.firestore(); //creates a shortcut, db, to access the Firestore database

const restaurantsCol = db.collection("restaurants"); // sets up shortcut to point to our collection

const restaurant = {
  //creating an object - a specific restaurant we want to add to our database
  name: "Mister 01",
  address: "555 N Federal HWY",
  cusisine: "pizza",
  rating: 4.9,
  phone: "(786) 677-2903",
};
//

restaurantsCol// adding a restaurant to our restaurants collections
  .add(restaurant)
  .then((doc) => console.log("Created restaurant", doc.id)) //handle resolve
  .catch((err) => console.error(err)); //handle reject

const restaurant2 = {
  name: "Bolay",
  address: "7060 W Palmetto PArk road",
  cusisine: "American",
  ratings: 4.6,
};

async function addRestaurant(data) {
  try {
    const doc = await restaurantsCol.add(data); //adding restaurant to collection
    console.log("Created restaurant", doc.id); //handling resolve
  } catch (err) { //handling reject
    console.error(err);
  }
}
addRestaurant(restaurant2);
