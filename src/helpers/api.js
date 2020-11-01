import { db } from '../firebase';
import firebase from 'firebase';

export const getTodosFromDb = (collection, setState) => {
	db.collection(collection)
		.orderBy('timestamp', 'desc')
		.onSnapshot((snapshot) => {
			setState(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })));
		});
};

export const addToCollection = (collection, field, value) => {
	db.collection(collection).add({
		[field]: value,
		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
	});
};

export const deleteTodo = (collection, id) => {
	db.collection(collection).doc(id).delete();
};

export const updateTodo = (collection, id, input) => {
	db.collection(collection).doc(id).set(
		{
			todo: input,
		},
		{ merge: true }
	);
};
