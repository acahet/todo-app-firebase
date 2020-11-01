import { db } from '../firebase';
import firebase from 'firebase';

export const getTodosFromDb = (collection, setState) => {
	db.collection(collection)
		.orderBy('timestamp', 'desc')
		.onSnapshot((snapshot) => {
			console.log(
				'snapshot.docs.map(doc => doc.data().todo) ',
				snapshot.docs.map((doc) => doc.data())
			);
			setState(snapshot.docs.map((doc) => doc.data().todo));
		});
};

export const addToCollection = (collection, field, value) => {
	db.collection(collection).add({
		[field]: value,
		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
	});
};
