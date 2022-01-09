let key = 'dffd8dc21003f443dba070601bb18e41';
let form = document.getElementById('weatherForm');
let cityInput = document.getElementById('cityInput');

const getResponse = async () => {
  let res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=philadelphia&units=imperial&appid=${key}`
  );
  console.log(res.data.main);
};

getResponse();
