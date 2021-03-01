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

} });  }); }

getData();