 let time;
 let content;
 var k;
 let btnStop = document.getElementById('Stop');
 btnStop.addEventListener('click', onBtnStop)
 let btnStart = document.getElementById('Start');
 btnStart.addEventListener('click', onBtnStart);


 function onBtnStart() {
     content = document.getElementById('content');
     time = document.getElementById('time').value;

     k = setInterval(() => {

         content.innerHTML = time;

         if (time < 0) {
             content.innerHTML = " Time's up";
             clearInterval(k);
         }
         time = time - 1;

     }, 1000);


 }




 function onBtnStop() {
     clearInterval(k);
     content.innerHTML = "Stopped";

 }