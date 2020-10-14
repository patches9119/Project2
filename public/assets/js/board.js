var dir = "sports";
var winCounter = 0;
const winArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const randomArray = randomImages();
var game = 0;
var pick1 = 0;
var pick2 = 0;
console.log(randomArray);
function randomImages() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  
  array.sort(() => Math.random() - 0.5);
  return array;
}
function flipUp(location) {
  var cardsList = document.getElementById("Cards_List").children;
  var board = [];
  
  for (let index = 0; index < cardsList.length; index++) {
    board.push(cardsList[index].childNodes[1]);
  }
  
  board[location].src = `assets/media/${dir}/${randomArray[location]}.png`;
}
function flipDown(location) {
  var cardsList = document.getElementById("Cards_List").children;
  var board = [];
  
  for (let index = 0; index < cardsList.length; index++) {
    board.push(cardsList[index].childNodes[1]);
  }
  
  board[location].src = `assets/media/back.png`;
}
function checkGame() {
  if (randomArray[pick1] == randomArray[pick2]) {
    winArray[pick1] = 1;
    winArray[pick2] = 1;
    console.log(winArray);
    checkifWin();
  } else {
    flipDown(pick1);
    flipDown(pick2);
  }
}

function checkifWin(){
  var counter=0;
  winArray.forEach(element => {
    
    counter+= parseInt(element);

    
  });
  console.log(counter);
  
if(counter==16){
  console.log("you Won");

 
 var userName = document.getElementById("userName").textContent;

 setStoraged(userName);

}
 

}



/*
function loadStoraged(){

  if(JSON.parse(localStorage.getItem("users"))){
      var storedTasks = JSON.parse(localStorage.getItem("users"));
       
  }
      
  else
      console.log("not storaged");

  
}
*/

// set the local storage the value 
function setStoraged(usertosave){
  

  if(JSON.parse(localStorage.getItem("users")))
      var users = JSON.parse(localStorage.getItem("users"));
  else
      var users = [];


  users.push(usertosave);
  localStorage.setItem("users", JSON.stringify(users));

}


//clear the local storage
function clearTasks(){

  var tasks = JSON.parse(localStorage.getItem("users"));
  tasks= [];

  localStorage.setItem("users", JSON.stringify(tasks));

}

$(function () {
  $(".grid-item").on("click", function (event) {
    event.preventDefault();
   
    
    flipUp(event.target.id);
    game++;
    
    if (game == 1) {
      pick1 = event.target.id;
      
    }
    
    if (game == 2) {
      pick2 = event.target.id;
     
      setTimeout(function(){ 
        checkGame();
              
      pick1 = 0;
      pick2 = 0;
      game = 0;
      
        ; }, 1000);
     
    }
  });
});