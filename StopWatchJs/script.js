let showTime = document.getElementById("display");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let intervalId = null;

// Format time to HH:MM:SS
function formatTime(totalSeconds) {
  let hrs = Math.floor(totalSeconds / 3600);
  let mins = Math.floor((totalSeconds % 3600) / 60);
  let secs = totalSeconds % 60;

  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

// Pad numbers to 2 digits (e.g. 04)
function pad(num) {
  return num.toString().padStart(2, "0");
}

// Start button logic
startBtn.addEventListener("click", () => {
  if (intervalId !== null) return; // Prevent multiple intervals

  intervalId = setInterval(() => {
    seconds++;
    showTime.textContent = formatTime(seconds);
  }, 1000);
});

// Pause button logic
pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

// Reset button logic
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  showTime.textContent = "00:00:00";
});
