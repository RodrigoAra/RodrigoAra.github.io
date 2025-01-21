import { app , auth, db, onAuthStateChanged, signInAnonymously, ref, set } from './firebase.js';

console.log('Firebase App:', app); 
// Helpers
function randomDiceRoll(numOfDice) {
	min = numOfDice
	max = numOfDice * 6
	return Math.floor(Math.random() * (max - min + 1) + min)
} 

(function () {

	let playerId;
	let playerRef;

	onAuthStateChanged(auth, (user) => {
		console.log(user);
		if (user) {
			playerId = user.uid;
			playerRef = ref(db, `players/${playerId}`);

			set(playerRef, {
				id: playerId,
				name: "Test",
				color: "Blue",
			});
		} else {
		  // User is signed out
		  // ...
		}
	});

	signInAnonymously(auth)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log('Signed in anonymously with:', user); 
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('Error signing in anonymously:', errorCode, errorMessage);
		});


	// app.auth().onAuthStateChanged((user) => {
	//     console.log(user);
	//     if (user) {
	//         // logged in!
	//         playerId = user.uid;
	//         playerRef = app.database().ref(`players/${playerId}`);

	//         playerRef.set({
	//             id: playerId,
	//             name: "Test",
	//             color: "Blue",
	//         })
	//     } else {
	//         // logged out
	//     }
	// });

	// app.auth().signInAnonymously().catch((error) => {
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
	// 	console.log(errorCode, errorMessage);
	// });

})();