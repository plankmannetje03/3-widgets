const startButton = document.getElementById("js--start")
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");

let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minuteTimer = document.getElementById("js--minuteTimer");

let timer;


startButton.onclick = function () {
  if (running === true) {
    return;
  }
  running = true;

  timer = setInterval(function () {
    seconds = seconds + 1;
    if (seconds === 60) {
      minutes = minutes + 1;
      minuteTimer.innerText = minutes < 10 ? '0' + minutes : minutes;  
      seconds = 0;
    }
    secondsTimer.innerText = seconds < 10 ? '0' + seconds : seconds; 
  }, 1000);
}


stopButton.onclick = function () {
  clearInterval(timer);
  running = false;
}


resetButton.onclick = function () {
  clearInterval(timer);  
  running = false;
  seconds = 0;
  minutes = 0;
  secondsTimer.innerText = "00"; 
  minuteTimer.innerText = "00";  
}


const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider")
const body = document.getElementById("js--body");

slider.value = 2;

slider.oninput = function(){
 


  
  rangeValue.innerText = slider.value + "x";
  body.style.fontSize = slider.value + "rem"
}

const paragraph = document.getElementById("js--text")
//data ophalen
let data = fetch("data.json");

data.then(function(BinnenGekomenData) {
  console.log(BinnenGekomenData);
  return BinnenGekomenData.json();
  }).then(
      function(echteData){
        paragraph.innerHTML = echteData.text;
      }
  );















