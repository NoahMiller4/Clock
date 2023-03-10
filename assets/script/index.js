  'use strict';

/*
    Noah Miller

    Assignment 1

    _Clock_

*/

// making clock function, setInterval to milliseconds
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

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Application

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Store date object of alarm
let alarm = null;
// Store reference to set alarm and loop till clear
let alarmTimeout = null;

const alarmSound = new Audio('./assets/audio/alarm.mp3');
alarmSound.type = 'audio/mp3';

const clock = document.querySelector('.clock')
const output = document.querySelector('.output')
const input = document.querySelector('.input')
const button = document.querySelector('.set')

// function to display time in div, trim to last 5 characters
function display() {
  output.innerHTML = input.value.slice(-5);
}
button.addEventListener('click', display);

// Set time to start alarm. must add onchange to html file
function setAlarmTime(value) {
  alarm = value;
  // console.log(alarm)
};

// set onclick to button to assign setAlarm to it
// must use window setTimeout to apply a timer
function setAlarm() {
  if(alarm) {
    // get current date again
    let current = new Date();
    // create another date object with alarm time
    const alarmLength = new Date(alarm);

    if (alarmLength > current) {
      let timeout = alarmLength.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => alarmSound.play(), timeout)
    }
  }
};

// function to clear the audio, clear all timeouts
// don't forget to set onclick to clear button to access function
function clearAll() {
  alarmSound.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
  }
  output.innerHTML = '00:00';
  button.addEventListener('click', display);
}