
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


FoodTable = {
  Foods: {
    users: {
      lukas: Cheese,
      Coby: Egg,
      Pasha: Ham,
      Josh: Bread,
      Callum: Onion
    }

  },
}

firebase.database().ref('/').set(FoodTable)
