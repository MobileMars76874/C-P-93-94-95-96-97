user_name = localStorage.getItem("user");
Room_Name = localStorage.getItem("room_name");

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


function Send(){
msg = document.getElementById("msg").value;
firebase.database().ref(Room_Name).push({
name:user_name,
message:msg,
likes:0
});
document.getElementById("msg").value = "";
}
















function getData() { firebase.database().ref("/"+Room_Name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
  Name = message_data['name'];
  Message = message_data['message'];
  Likes = message_data['likes'];
  Name_line = "<h4>"+Name+"</h4>";
  Message_Line = "<h3 class='message_h4'>"+Message+"</h3>"
  Button_Line = "<button class='btn btn-warning 'id="+firebase_message_id+" value="+Likes+" onclick='update_Likes(this.id)'>"
  span_tag_Line = "<span class='glyphicon glyphicon-thumbs-up'>Likes: "+Likes+"</span></button>"
  row = Name_line + Message_Line + Button_Line + span_tag_Line;
  document.getElementById("output").innerHTML += row;
//End code
  } });  }); }
getData();

function update_Likes(message_id){
console.log("Function Exicuted")
Button_id = message_id;
current_likes = document.getElementById(Button_id).value;
updated_Likes = Number(current_likes) + 1;
console.log(updated_Likes);
firebase.database().ref(Room_Name).child(message_id).update({
likes : updated_Likes
});
}

function LogOut(){
localStorage.removeItem("Username");
localStorage.removeItem("room_name");
window.location = "index.html";
}