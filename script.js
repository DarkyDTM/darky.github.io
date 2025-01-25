function copyText(text) {
    var dummyInput = document.createElement("textarea");
    document.body.appendChild(dummyInput);
    dummyInput.value = text;
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);
}

function playSound(path) {
  var audio = new Audio(path);
  audio.play();
}

function daysToTargetDate(targetMonth, targetDay) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const targetDate = new Date(currentYear, targetMonth - 1, targetDay);
  if (targetDate < currentDate) {
    targetDate.setFullYear(currentYear + 1);
  }
  const targetDateMS = targetDate.getTime();
  const currentDateMS = currentDate.getTime();
  const timeDifferenceMS = targetDateMS - currentDateMS;
  const days = Math.floor(timeDifferenceMS / (1000 * 60 * 60 * 24));
  return days;
}

document.addEventListener('DOMContentLoaded', function() {
    const toHB_element = document.getElementById("toHB");
    toHB_element.innerHTML = "До дня рождения " + daysToTargetDate(10, 2) + " дней";
});