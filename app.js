let key = 'dffd8dc21003f443dba070601bb18e41';
let form = document.getElementById('weatherForm');
let cityInput = document.getElementById('cityInput');
let timeStamp = document.getElementById('timeStamp');
let temp = document.getElementById('temp');
let description = document.getElementById('description');

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  // add a zero in front of numbers<10
  m = checkTime(m);

  document.getElementById('timeStamp').innerHTML = h + ':' + m;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${key}`
  );
  let currentWeather = document.createTextNode(Math.trunc(res.data.main.temp));

  let currentDescription = document.createTextNode(
    res.data.weather[0].description
  );

  // add text node to temp
  temp.appendChild(currentWeather);

  // add description
  description.appendChild(currentDescription);

  // Add img to div
  let img = document.createElement('img');
  // Add div
  let div = document.createElement('div');
  // Add class
  div.classList = 'justify-content-end';
  let parent = document.getElementById('parent');
  parent.insertBefore(div, temp);

  // Add source link
  img.src = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
  // append image
  div.appendChild(img);

  // remove child node
  if (temp.childNodes.length > 1 || description.childNodes.length > 1) {
    temp.childNodes[0].remove();
    description.childNodes[0].remove();
  }

  // weatherText.appendChild(text);
  // // remove child node from weather text
  // if (weatherText.childNodes.length > 1) {
  //   weatherText.childNodes[0].remove();
  // }
  // Clear
  cityInput.value = '';
});

// src = ;
