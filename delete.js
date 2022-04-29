import { restaurantsCol } from './getConnectDd.js'

restaurantsCol.doc('xF1uMeYkBFw5nfPx1omi').delete()
.then(res => console.log('success deleting xF1uMeYkBFw5nfPx1omi'))
.catch(err => console.log('xF1uMeYkBFw5nfPx1omi', err))