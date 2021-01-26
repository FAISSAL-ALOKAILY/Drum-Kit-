var numberOfDrumButtons = document.querySelectorAll('.drum').length;
// for counting the buttons in the loop

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
  var buttonInnerHTML = this.innerHTML; // 'this' refer to tag which is the entire button
  letterSound(buttonInnerHTML); //calling the method whichdefine wich letter sound
  buttonAnimation(buttonInnerHTML);
}); } // for making the sounds for every button using the loop
//detecting Button press in the interface





document.addEventListener("keydown",function(event){
  letterSound(event.key);
  buttonAnimation(event.key);
  // alert("hello");
  // console.log(event);
}); //here whey detect the button pressed key in the keyboard



function letterSound(Key){
  switch (Key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  // existing method in JS using Audio object
}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);//ex: .a or .s for the classes to get the tag in the loop above
activeButton.classList.add("pressed");//class in css file the make the animation

// setTimeout(removeClass(activeButton),"pressed") , 100); // because we want to flash it after pressing the button
 setTimeout(function(){
   activeButton.classList.remove("pressed");
 } , 100);
}
function removeClass(tag , textClass){
  tag.classList.remove(textClass);
}
