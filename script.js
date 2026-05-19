
console.log("Running Sal's Strawberries")
// const favoriteFruit = document.getElementById("favoriteFruit").value;

// the vars that i will need for the code //
var GLOBAL_user;
var authenticationListener; 

// to read errors //
function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}

// to login the user for the website

function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}
//to check if the user is login//
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user;
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
  }
}
// to have the user login //
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("User has logged in")
  });
}
//to logout the user//

function fb_logout() {
  authenticationListener();
  firebase.auth().signOut();
  console.log("Sign out(hopefully)");
}



// to display the stuff //

function display(snapshot) {
  let dbData = snapshot.val();
    HTML_OUTPUT.innerHTML = "";
  console.log(dbData);
if (dbData == null) {
  HTML_OUTPUT.innerHTML = "There is no data";
} else {
  snapshot.forEach(stringifiedData);
  console.log("data transfered")
}
}
function stringifiedData(strings){
  let data = strings.val();
  console.log(strings);
  let usertext = "";
  for (let [usernames] of strings.key) {
  usertext += usernames
}
 HTML_OUTPUT.innerHTML += usertext + ": " + data + "<br>";
}

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}

