var firebaseConfig = {
    apiKey: "AIzaSyDMCnU12UEgQ8vvqPEzDF6rWWM12Xh-DAQ",
    authDomain: "chatverse-277d2.firebaseapp.com",
    databaseURL: "https://chatverse-277d2-default-rtdb.firebaseio.com",
    projectId: "chatverse-277d2",
    storageBucket: "chatverse-277d2.appspot.com",
    messagingSenderId: "726963304338",
    appId: "1:726963304338:web:a039a58dcda23c505ff34b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}