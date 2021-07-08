const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const colorLng = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStop = document.querySelector("button[data-action = stop]");

const btnStart = document.querySelector("button[data-action = start]");

const bodyEl = document.querySelector('body');
console.log(bodyEl )

const timer = {
    intervalId : null,
    isActive: false,

start (){
if (this.isActive) {
  return;
}
this.isActive = true;
this.intervalId = setInterval(() => {
  const numArray = randomIntegerFromInterval(0,colors.length - 1);
  console.log( numArray + ' - ' + colors[numArray]);
      bodyEl.style.backgroundColor = colors[numArray]
},1000)
},
stop (){
  clearInterval(this.intervalId);
  this.isActive = false;
},
};

btnStart.addEventListener('click',() => {
  timer.start();
});

  btnStop.addEventListener('click', () => {
      timer.stop();
  });
 
  

 



