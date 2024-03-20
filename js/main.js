document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clickable-one").addEventListener("click", () => {
    displayTimer();
  });
  document.getElementById("clickable-two").addEventListener("click", () => {
    overdueWarning();
  });
  document
    .querySelector("aiting-dialog")
    .addEventListener("buttonClicked", (ev) => {
      handleEvent(ev);
    });
});

function handleEvent(ev) {
  let detail = { ...ev.detail };
  if (detail.func && typeof eval(detail.func) === "function") {
    eval(detail.func)();
  }
}

function overdueWarning() {
  const div = document.getElementById("warning");
  div.style.display = "block";
  let seconds = Math.floor(Math.random() * 60);
  let minutes = Math.floor(Math.random() * 60);
  let hours = Math.floor(Math.random() * 24);
  let days = Math.floor(Math.random() * 30);
  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    if (hours === 24) {
      hours = 0;
      days++;
    }
    div.textContent = `Assignment Overdue: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }, 1000);
}

function displayTimer() {
  const div = document.getElementById("timer");
  div.style.display = "block";
  let seconds = 0;
  let minutes = 0;
  const timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    div.textContent = `You have been distracted for ${minutes} minutes ${seconds} seconds.`;
    if (minutes === 15) {
      clearInterval(timer);
    }
  }, 1000);
}
