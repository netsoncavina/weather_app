async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Sao%20Paulo&units=metric&lang=pt_br&appid=591ed98225dfbeadd70c189a6eb67766`
  );
  const res_1 = await res.json();
  return [
    res_1.name,
    res_1.main.temp,
    res_1.main.temp_min,
    res_1.main.temp_max,
    res_1.weather[0].description,
  ];
}

// async function getWeather_1() {
//   const info = await getWeather();
//   const name = info[0];
//   let temp = info[1];
//   let tempMin = info[2];
//   let tempMax = info[3];
//   let description = info[4];
//   return [name, temp, tempMin, tempMax, description];
// }

export default function Test() {
  let weatherInfo = getWeather();
  //   let cityName = weatherInfo[0];
  //   let temp = weatherInfo[1];
  //   let tempMin = weatherInfo[2];
  //   let tempMax = weatherInfo[3];
  //   let description = weatherInfo[4];
  //   console.log(cityName, temp, tempMin, tempMax, description);
  console.log(weatherInfo);
  return null;
}
