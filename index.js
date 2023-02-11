

for(var i =0;i<document.querySelectorAll(".drum").length;i++)
{
  //triggered when button is pressed
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
     
  });
  
}
//triggered when keyboard key is pressed and this event listener is added to the entire document
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})
function makeSound(key){
  switch(key)
     {
        case "w":
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
        case "a":
          var tom2=new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
        case "s":
          var tom3=new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
        case "d":
          var tom4=new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;
        case "j":
          var snare=new Audio("sounds/snare.mp3");
          snare.play();
        break;
        case "k":
          var crash=new Audio("sounds/crash.mp3");
          crash.play();
        break;
        case "l":
          var kick=new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;
  
        default:console.log(buttonInnerHTML);
     }

}
function buttonAnimation(key)
{
  var activeButton=  document.querySelector("."+key).classList.add("pressed");
  /*but this  class must be removed after sometime the particulr button is pressed
   it can be done using setTimeout function*/
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
   },100);
}



   
