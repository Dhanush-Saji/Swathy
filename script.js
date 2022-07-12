function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
let hrElement;
let counter = 20;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.2 + Math.random() * 5 + "s";
    hrElement.style.animationDelay = Math.random() * 10 + "s";
 
  document.body.appendChild(hrElement);
}

