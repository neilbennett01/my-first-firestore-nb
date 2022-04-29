import { restaurantsCol } from "./getConnectDd.js";

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
