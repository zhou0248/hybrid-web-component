document.addEventListener("DOMContentLoaded", () => {
  const dialogOne = document.getElementById("custom-dialog-one");
  const dialogTwo = document.getElementById("custom-dialog-two");
  document.getElementById("clickable-one").addEventListener("click", () => {
    dialogOne.openDialog();
  });
  document.getElementById("clickable-two").addEventListener("click", () => {
    dialogTwo.openDialog();
  });

  dialogOne.addEventListener("click", () => {
    dialogOne.closeDialog();
  });

  dialogTwo.addEventListener("click", () => {
    dialogTwo.closeDialog();
  });

  document
    .getElementById("custom-dialog-one")
    .addEventListener("buttonClicked", (ev) => {
      handleEvent(ev);
    });
  document
    .getElementById("custom-dialog-two")
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
  let seconds = Math.floor(Math.random() * 60);
  let minutes = Math.floor(Math.random() * 60);
  let hours = Math.floor(Math.random() * 24);
  let days = Math.floor(Math.random() * 30 + 7);
  div.style.display = "block";
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
  let seconds = Math.floor(Math.random() * 60);
  let minutes = Math.floor(Math.random() * 60);
  let hours = Math.floor(Math.random() * 4);
  const timer = setInterval(() => {
    seconds--;
    if (seconds === 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes === 0) {
      minutes = 59;
      hours--;
    }
    div.textContent = `Assignment due in  ${hours} hours ${minutes} minutes ${seconds} seconds.`;
    if (minutes === 2) {
      clearInterval(timer);
    }
  }, 1000);
}
