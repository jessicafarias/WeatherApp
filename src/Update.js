import * as helper from './style_helpers';

const toFahrenheit = (kelvin) => `${parseInt(kelvin - 273.15, 10) * (9 / 5) + 32}°F`;
const toCelsius = (kelvin) => `${parseInt(kelvin - 273.15, 10)}°C`;

export const celsius = (jsonfile) => {
  for (let i = 0; i < 25; i += 5) {
    const { icon } = jsonfile.list[0].weather[0];
    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const dt = new Date(jsonfile.list[i].dt_txt);
    helper.img(`img${i}`, url);
    helper.overrite(`date${i}`, dt.toLocaleDateString());
    helper.overrite(`hour${i}`, dt.toLocaleTimeString());
    helper.overrite(`Deep${i}`, jsonfile.list[0].weather[0].description);
  }

  helper.overrite('CityName', jsonfile.city.name);
  helper.overrite('CountryName', jsonfile.city.country);
  helper.overrite('Weather', jsonfile.list[0].weather[0].main);
  helper.overrite('TempC', toCelsius(jsonfile.list[0].main.temp));
  helper.overrite('TempF', toFahrenheit(jsonfile.list[0].main.temp));
  helper.overrite('MaxTemp', toCelsius(jsonfile.list[0].main.temp_max));
  helper.overrite('MinTemp', toCelsius(jsonfile.list[0].main.temp_min));
  helper.overrite('WindSpeed', jsonfile.list[0].wind.speed);
  helper.overrite('SensationTemp', toCelsius(jsonfile.list[0].main.feels_like));
};


export const fahrenheit = (jsonfile) => {
  for (let i = 0; i < 25; i += 5) {
    const { icon } = jsonfile.list[0].weather[0];
    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const dt = new Date(jsonfile.list[i].dt_txt);
    helper.img(`img${i}`, url);
    helper.overrite(`date${i}`, dt.toLocaleDateString());
    helper.overrite(`hour${i}`, dt.toLocaleTimeString());
    helper.overrite(`Deep${i}`, jsonfile.list[0].weather[0].description);
  }

  helper.overrite('CityName', jsonfile.city.name);
  helper.overrite('CountryName', jsonfile.city.country);
  helper.overrite('Weather', jsonfile.list[0].weather[0].main);
  helper.overrite('TempC', toFahrenheit(jsonfile.list[0].main.temp));
  helper.overrite('TempF', toCelsius(jsonfile.list[0].main.temp));
  helper.overrite('MaxTemp', toFahrenheit(jsonfile.list[0].main.temp_max));
  helper.overrite('MinTemp', toFahrenheit(jsonfile.list[0].main.temp_min));
  helper.overrite('WindSpeed', jsonfile.list[0].wind.speed);
  helper.overrite('SensationTemp', toFahrenheit(jsonfile.list[0].main.feels_like));
};
