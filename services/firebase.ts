import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDlDoN9y-2yOnCXqnnnf-jYnSYVz4jivxs',
  authDomain: 'loretsayd.firebaseapp.com',
  projectId: 'loretsayd',
  storageBucket: 'loretsayd.appspot.com',
  messagingSenderId: '92054043644',
  appId: '1:92054043644:web:cd2fd3eebf0501a9be1079'
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)

export {
  app, auth
}

export default app
