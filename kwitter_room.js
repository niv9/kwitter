var firebaseConfig = {
      apiKey: "AIzaSyBHT8WFtcgBa-uf58QVVvYKXPWbQ4NBG0w",
      authDomain: "kwitter-abdf9.firebaseapp.com",
      databaseURL: "https://kwitter-abdf9-default-rtdb.firebaseio.com",
      projectId: "kwitter-abdf9",
      storageBucket: "kwitter-abdf9.appspot.com",
      messagingSenderId: "1033004653134",
      appId: "1:1033004653134:web:11fa5c461e049c2ff7011f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";


}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}


function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"

}