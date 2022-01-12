let key = 'dffd8dc21003f443dba070601bb18e41';
let form = document.getElementById('weatherForm');
let cityInput = document.getElementById('cityInput');
let weatherText = document.getElementById('weatherText');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${key}`
  );

  let text = document.createTextNode(
    `Todays temp is ${res.data.main.temp} but it feels like ${res.data.main.feels_like}`
  );

  weatherText.appendChild(text);
  console.log(cityInput.value);
});
