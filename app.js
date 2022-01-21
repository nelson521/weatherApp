let key = 'dffd8dc21003f443dba070601bb18e41';
let form = document.getElementById('weatherForm');
let cityInput = document.getElementById('cityInput');
let timeStamp = document.getElementById('timeStamp');
let temp = document.getElementById('temp');
let description = document.getElementById('description');
let icon = document.getElementById('icon');

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
  let currentWeather = document.createTextNode(res.data.main.temp);
  let currentDescription = document.createTextNode(
    res.data.weather[0].description
  );
  // add text node to temp
  temp.appendChild(currentWeather);
  // add description
  description.appendChild(currentDescription);

  console.log(currentWeather);

  // imgIcon.src = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
  // console.log(res.data.weather[0].icon);
  // let text = document.createTextNode(
  //   `Todays temp is ${res.data.main.temp} but it feels like ${res.data.main.feels_like}`
  // );

  // weatherText.appendChild(text);
  // // remove child node from weather text
  // if (weatherText.childNodes.length > 1) {
  //   weatherText.childNodes[0].remove();
  // }
  console.log();
  // Clear
  cityInput.value = '';
});
