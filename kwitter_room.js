//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDxHxl7GlmCPpWQieKXTYpcda1NB6nsvrI",
      authDomain: "kwitter-ca0e7.firebaseapp.com",
      databaseURL: "https://kwitter-ca0e7-default-rtdb.firebaseio.com",
      projectId: "kwitter-ca0e7",
      storageBucket: "kwitter-ca0e7.appspot.com",
      messagingSenderId: "749518450116",
      appId: "1:749518450116:web:176a7b022acfab5ac44891"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location = "keitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}
