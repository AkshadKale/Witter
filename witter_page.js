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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function sent(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message : msg,
          like:0
      });
      document.getElementById("msg").innerHTML ="";
  }

  function getData(){ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like']
    name_with_tag = "<h4>" + name + "</h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button  class='btn btn-warning'  id="+firebase_message_id+" value="+like+"  onclick='updateLike(this.id)'>";
    span_with_tag = "<span  class='glyphicon glyphicon-thumps-up'> Like: " + like + "</span></button><hr>";
    
    row = name_with_tag + message_with_tag + like_button + span_with_tag ; 
    document.getElementById("output").innerHTML += row;
} });  }); }

getData();

function updateLike(message_id)
{
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+ 1;
    firebase.database().ref( room_name).child(message_id).update({
        like : updated_likes
    });
}

function logout()

{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}