import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB0g6WM7R8Ki7PuzIWh-VVn9DiI3F7Imuk',
  authDomain: 'amoli-creaciones.firebaseapp.com',
  projectId: 'amoli-creaciones',
  storageBucket: 'amoli-creaciones.appspot.com',
  messagingSenderId: '937144028608',
  appId: '1:937144028608:web:a5c13adc9301e8634e0c25'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
