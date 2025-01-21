import app from './firebase.js'; 

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

    app.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
            // logged in!
            playerId = user.uid;
            playerRef = app.database().ref(`players/${playerId}`);

            playerRef.set({
                id: playerId,
                name: "Test",
                color: "Blue",
            })
        } else {
            // logged out
        }
    });

    app.auth().signInAnonymously().catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });

})();