import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
	apiKey: REACT_APP_APIKEY,
	authDomain: REACT_APP_AUTHDOMAIN,
	projectId: REACT_APP_PROJECTID,
	storageBucket: REACT_APP_STORAGEBUCKET,
	messagingSenderId: REACT_APP_MESSAGINGSENDERID,
	appId: REACT_APP_APPID,
	measurementId: REACT_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig)
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null))

export { app, analytics }
