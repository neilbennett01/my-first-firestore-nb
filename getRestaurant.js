import { restaurantsCol } from './getConnectDd.js'

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