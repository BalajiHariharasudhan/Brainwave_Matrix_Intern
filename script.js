const planner = document.getElementById('planner');
const clock = document.getElementById('clock');

const hours = [
  "9 AM", "10 AM", "11 AM", "12 PM",
  "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"
];

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function getHourNumber(label) {
  let [time, period] = label.split(' ');
  let hour = parseInt(time);
  return period === 'PM' && hour !== 12 ? hour + 12 : hour;
}

function createPlanner() {
  planner.innerHTML = "";
  const currentHour = new Date().getHours();

  hours.forEach((hourLabel, i) => {
    const hourNum = getHourNumber(hourLabel);

    const row = document.createElement('div');
    row.className = 'time-block';

    const hourDiv = document.createElement('div');
    hourDiv.className = 'hour';
    hourDiv.textContent = hourLabel;

    const text = document.createElement('textarea');
    text.id = `text-${i}`;
    text.value = localStorage.getItem(`hour-${i}`) || '';

    if (hourNum < currentHour) {
      text.classList.add('past');
    } else if (hourNum === currentHour) {
      text.classList.add('present');
    } else {
      text.classList.add('future');
    }

    const saveBtn = document.createElement('button');
    saveBtn.className = 'saveBtn';
    saveBtn.textContent = '💾';
    saveBtn.onclick = () => {
      localStorage.setItem(`hour-${i}`, text.value);
      alert("Task saved!");
    };

    const delBtn = document.createElement('button');
    delBtn.className = 'deleteBtn';
    delBtn.textContent = '🗑️';
    delBtn.onclick = () => {
      localStorage.removeItem(`hour-${i}`);
      text.value = '';
    };

    row.appendChild(hourDiv);
    row.appendChild(text);
    row.appendChild(saveBtn);
    row.appendChild(delBtn);

    planner.appendChild(row);
  });
}

function saveAll() {
  hours.forEach((_, i) => {
    const val = document.getElementById(`text-${i}`).value;
    localStorage.setItem(`hour-${i}`, val);
  });
  alert("All tasks saved!");
}

function clearAll() {
  if (confirm("Clear all tasks?")) {
    hours.forEach((_, i) => {
      localStorage.removeItem(`hour-${i}`);
      document.getElementById(`text-${i}`).value = '';
    });
  }
}

createPlanner();
