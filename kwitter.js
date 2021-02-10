function add_user(){
user = document.getElementById("username").value;
localStorage.setItem("user", user);
window.location = "kwitter_room.html";
}