function showTime() {
  const time = new Date();
  
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(showTime, 1000);
showTime(); 
