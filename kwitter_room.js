username = localStorage.getItem("user");
document.getElementById("W").innerHTML = "Welcome - "+username;

var firebaseConfig = {
apiKey: "AIzaSyBqvWqUvRg014OgjxyHRzSeTBr-iuJyBWs",
authDomain: "kwitter-p.firebaseapp.com",
databaseURL: "https://kwitter-p-default-rtdb.firebaseio.com",
projectId: "kwitter-p",
storageBucket: "kwitter-p.appspot.com",
messagingSenderId: "624614476558",
appId: "1:624614476558:web:3fec6cbb68f6588bd4255f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function Go(){
var Room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({
purpose : "Adding_roomname"
});
localStorage.setItem("room_name", Room_name);
window.location = "kwitter_main.html";
}

function LogOut(){
localStorage.removeItem("Username");
localStorage.removeItem("room_name");
window.location = "index.html";
}






