  'use strict';

/*
    Noah Miller

    Assignment 1

*/

setInterval(displayTime, 1000);

function displayTime() {
  // Declare time
  const now = new Date();

  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds()
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hour + ":" + minutes + ":" + seconds;
  // return content in inner html *
  document.getElementById('Clock').innerHTML = time;
}

displayTime();