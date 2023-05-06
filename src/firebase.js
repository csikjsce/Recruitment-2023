import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyCjSGyC0GEupCH7h6-Y2Bjz3Isq-gRdj3E',
	authDomain: 'recruitment-23.firebaseapp.com',
	projectId: 'recruitment-23',
	storageBucket: 'recruitment-23.appspot.com',
	messagingSenderId: '288600865743',
	appId: '1:288600865743:web:77733cff4ce0a4d1c030ba',
	measurementId: 'G-2GYZE0PP8F',
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

export { app, analytics };
