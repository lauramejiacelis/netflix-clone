import {
  createCheckoutSession,
  getStripePayments,
} from '@stripe/firestore-stripe-payments'
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'

const payments = getStripePayments(app,  {
  productsCollection: 'products',
  customersCollection: 'customers'
})