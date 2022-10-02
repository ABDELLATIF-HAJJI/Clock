setInterval(Clock, 1000)

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function Clock() {
  let currentDate = new Date()
  let seconds = currentDate.getSeconds() / 60
  let minutes = (seconds + currentDate.getMinutes()) / 60
  let hours = (minutes + currentDate.getHours()) / 12
  getRotation(second, seconds)
  getRotation(minute, minutes)
  getRotation(hour, hours)
}
function getRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
Clock()