// Define the URL to your JSON file
const jsonUrl = "./data.json";

const workHour = document.querySelector(".workDaily");
const workWeek = document.querySelector(".workWeek");
const playHour = document.querySelector(".playDaily");
const playWeek = document.querySelector(".playWeek");
const studyHour = document.querySelector(".studyDaily");
const studyWeek = document.querySelector(".studyWeek");
const exerciseHour = document.querySelector(".exerciseDaily");
const exerciseWeek = document.querySelector(".exerciseWeek");
const socialHour = document.querySelector(".socialDaily");
const socialWeek = document.querySelector(".socialWeek");
const careHour = document.querySelector(".careDaily");
const careWeek = document.querySelector(".careWeek");

function updateContentDaily(data) {
  // Work
  const workHourCurrent = data[0].timeframes.daily.current;
  const workWeekPast = data[0].timeframes.daily.previous;
  workHour.textContent = `${workHourCurrent}hrs`;
  workWeek.textContent = `Last Week - ${workWeekPast}hrs`;

  // Play
  const playHourCurrent = data[1].timeframes.daily.current;
  const playWeekPast = data[1].timeframes.daily.previous;
  playHour.textContent = `${playHourCurrent}hrs`;
  playWeek.textContent = `Last Week - ${playWeekPast}hrs`;

  // Study
  const studyHourCurrent = data[2].timeframes.daily.current;
  const studyWeekPast = data[2].timeframes.daily.previous;
  studyHour.textContent = `${studyHourCurrent}hrs`;
  studyWeek.textContent = `Last Week - ${studyWeekPast}hrs`;

  // Exercise
  const exerciseHourCurrent = data[3].timeframes.daily.current;
  const exerciseWeekPast = data[3].timeframes.daily.previous;
  exerciseHour.textContent = `${exerciseHourCurrent}hrs`;
  exerciseWeek.textContent = `Last Week - ${exerciseWeekPast}hrs`;

  // Social
  const socialHourCurrent = data[4].timeframes.daily.current;
  const socialWeekPast = data[4].timeframes.daily.previous;
  socialHour.textContent = `${socialHourCurrent}hrs`;
  socialWeek.textContent = `Last Week - ${socialWeekPast}hrs`;

  // Care
  const careHourCurrent = data[5].timeframes.daily.current;
  const careWeekPast = data[5].timeframes.daily.previous;
  careHour.textContent = `${careHourCurrent}hrs`;
  careWeek.textContent = `Last Week - ${careWeekPast}hrs`;
}

function updateContentWeekly(data) {
  // Work
  const workHourCurrent = data[0].timeframes.weekly.current;
  const workWeekPast = data[0].timeframes.weekly.previous;
  workHour.textContent = `${workHourCurrent}hrs`;
  workWeek.textContent = `Last Week - ${workWeekPast}hrs`;

  // Play
  const playHourCurrent = data[1].timeframes.weekly.current;
  const playWeekPast = data[1].timeframes.weekly.previous;
  playHour.textContent = `${playHourCurrent}hrs`;
  playWeek.textContent = `Last Week - ${playWeekPast}hrs`;

  // Study
  const studyHourCurrent = data[2].timeframes.weekly.current;
  const studyWeekPast = data[2].timeframes.weekly.previous;
  studyHour.textContent = `${studyHourCurrent}hrs`;
  studyWeek.textContent = `Last Week - ${studyWeekPast}hrs`;

  // Exercise
  const exerciseHourCurrent = data[3].timeframes.weekly.current;
  const exerciseWeekPast = data[3].timeframes.weekly.previous;
  exerciseHour.textContent = `${exerciseHourCurrent}hrs`;
  exerciseWeek.textContent = `Last Week - ${exerciseWeekPast}hrs`;

  // Social
  const socialHourCurrent = data[4].timeframes.weekly.current;
  const socialWeekPast = data[4].timeframes.weekly.previous;
  socialHour.textContent = `${socialHourCurrent}hrs`;
  socialWeek.textContent = `Last Week - ${socialWeekPast}hrs`;

  // Care
  const careHourCurrent = data[5].timeframes.weekly.current;
  const careWeekPast = data[5].timeframes.weekly.previous;
  careHour.textContent = `${careHourCurrent}hrs`;
  careWeek.textContent = `Last Week - ${careWeekPast}hrs`;
}

function updateContentMonthly(data) {
  // Work
  const workHourCurrent = data[0].timeframes.monthly.current;
  const workWeekPast = data[0].timeframes.monthly.previous;
  workHour.textContent = `${workHourCurrent}hrs`;
  workWeek.textContent = `Last Week - ${workWeekPast}hrs`;

  // Play
  const playHourCurrent = data[1].timeframes.monthly.current;
  const playWeekPast = data[1].timeframes.monthly.previous;
  playHour.textContent = `${playHourCurrent}hrs`;
  playWeek.textContent = `Last Week - ${playWeekPast}hrs`;

  // Study
  const studyHourCurrent = data[2].timeframes.monthly.current;
  const studyWeekPast = data[2].timeframes.monthly.previous;
  studyHour.textContent = `${studyHourCurrent}hrs`;
  studyWeek.textContent = `Last Week - ${studyWeekPast}hrs`;

  // Exercise
  const exerciseHourCurrent = data[3].timeframes.monthly.current;
  const exerciseWeekPast = data[3].timeframes.monthly.previous;
  exerciseHour.textContent = `${exerciseHourCurrent}hrs`;
  exerciseWeek.textContent = `Last Week - ${exerciseWeekPast}hrs`;

  // Social
  const socialHourCurrent = data[4].timeframes.monthly.current;
  const socialWeekPast = data[4].timeframes.monthly.previous;
  socialHour.textContent = `${socialHourCurrent}hrs`;
  socialWeek.textContent = `Last Week - ${socialWeekPast}hrs`;

  // Care
  const careHourCurrent = data[5].timeframes.monthly.current;
  const careWeekPast = data[5].timeframes.monthly.previous;
  careHour.textContent = `${careHourCurrent}hrs`;
  careWeek.textContent = `Last Week - ${careWeekPast}hrs`;
}

// Change data on click
const dailyButton = document.getElementById("dailyButton");
const weeklyButton = document.getElementById("weeklyButton");
const monthlyButton = document.getElementById("monthlyButton");

dailyButton.addEventListener("click", () => {
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      updateContentDaily(data);
      dailyButton.classList.add("focus");
      weeklyButton.classList.remove("focus");
      monthlyButton.classList.remove("focus");
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});

weeklyButton.addEventListener("click", () => {
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      updateContentWeekly(data);
      dailyButton.classList.remove("focus");
      weeklyButton.classList.add("focus");
      monthlyButton.classList.remove("focus");
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});

monthlyButton.addEventListener("click", () => {
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      updateContentMonthly(data);
      dailyButton.classList.remove("focus");
      weeklyButton.classList.remove("focus");
      monthlyButton.classList.add("focus");
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});
