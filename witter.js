
var firebaseConfig = {
  apiKey: "AIzaSyATd_b6hACCfgn_2ZzIP6K3wiw7DkKo5YA",
  authDomain: "project-93-1cebb.firebaseapp.com",
  databaseURL: "https://project-93-1cebb-default-rtdb.firebaseio.com",
  projectId: "project-93-1cebb",
  storageBucket: "project-93-1cebb.appspot.com",
  messagingSenderId: "472846211761",
  appId: "1:472846211761:web:205488d10c8699d1152090",
  measurementId: "G-ZJ65D9L5WQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username:");
function add_room(){
  
  room_name = document.getElementById("room_name_input").value;
    
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding_user"

}); 
 localStorage.setItem("room_name" , room_name);
  
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("room_name_div").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
row = "<div class='room_name'  id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>";
document.getElementById("room_name_div").innerHTML  += row;
});});}

getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name" , name);
      window.location = "witter_page.html";
}

function log_out(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("username:");
  window.location = "index.html";
}