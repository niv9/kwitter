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

  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")

  function send(){
    sendd=document.getElementById("msg").value
    firebase.database ().ref(room_name).push({
        name:user_name,
        msg:sendd,like:0

    })
document.getElementById("msg").value=" "
  }
  function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id=childKey
message_data=childData
name= message_data["name"]
message=message_data["msg"]
like=message_data["like"]

namewidthtag="<h4>"+name+"<img src = 'tick.png' class='user_tick'></h4> "
messagewidthtag = "<h4 class='message_h4'>"+message+"</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=namewidthtag+messagewidthtag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row

  }})})}
  getData()
  
function updateLike(message_id){
  button_id=message_id
  likes = document.getElementById(button_id).value
  updated_likes= Number(likes)+1
  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  })
}


function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html"

}

