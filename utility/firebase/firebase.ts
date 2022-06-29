import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDmqu1vkaVbECR-m1H4AxX-_LhANZJY2aA',
	authDomain: 'cyber-pro-639a6.firebaseapp.com',
	projectId: 'cyber-pro-639a6',
	storageBucket: 'cyber-pro-639a6.appspot.com',
	messagingSenderId: '332145806278',
	appId: '1:332145806278:web:6cec9d6b2b9855346900c7',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDoc = async (user: any) => {
	const userDocRef = doc(db, 'users', user.uid);
	const userDoc = await getDoc(userDocRef);
	console.log(userDocRef, userDoc, userDoc.exists());

	// if userDoc does not exist, create userDoc
	if (!userDoc.exists()) {
		try {
			await setDoc(userDocRef, {
				name: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				createdAt: new Date(),
			});
		} catch (error) {
			console.error('Error creating userDoc: ', error);
		}
	}

	// if userDoc exists, return userDoc
	return userDoc;
};
