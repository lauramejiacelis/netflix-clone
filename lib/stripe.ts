import {
  createCheckoutSession,
  getStripePayments,
} from '@stripe/firestore-stripe-payments'
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'

const payments = getStripePayments(app,  {
  productsCollection: 'products',
  customersCollection: 'customers'
}) //1 parameter access instance of your app 2 parameter: the collections
//it's gonna allow us to retrieve the payments

const loadCheckout = async (priceId: string)=>{
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  }).then((snapshot)=> window.location.assign(snapshot.url))
  .catch((error)=> console.log(error.message))
}

export { loadCheckout }
export default payments