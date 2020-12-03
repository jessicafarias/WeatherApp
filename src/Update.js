import * as helper from './style_helpers';

export const celsius= (jsonfile)=>{
  for (var i = 0; i < 25; i+=5) {
    const icon = jsonfile.list[0].weather[0].icon;
    const url = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
    const dt = new Date(jsonfile.list[i].dt_txt);
    helper.img('img'+i, url);
    helper.overrite('date'+i,dt.toLocaleDateString());
    helper.overrite('hour'+i,dt.toLocaleTimeString());
    helper.overrite('Deep'+i,jsonfile.list[0].weather[0].description );
  }

  helper.overrite('CityName', jsonfile.city.name);
  helper.overrite('CountryName',jsonfile.city.country );
  helper.overrite('Weather', jsonfile.list[0].weather[0].main);
  helper.overrite('TempC',parseInt(jsonfile.list[0].main.temp-273.15)+"°C");
  helper.overrite('TempF',parseInt((jsonfile.list[0].main.temp-273.15)*(9/5)+32)+"°F");
  helper.overrite('MaxTemp', parseInt(jsonfile.list[0].main.temp_max-273.15)+"°C");
  helper.overrite('MinTemp', parseInt(jsonfile.list[0].main.temp_min-273.15)+"°C");
  helper.overrite('WindSpeed',jsonfile.list[0].wind.speed);
  helper.overrite('SensationTemp', parseInt(jsonfile.list[0].main.feels_like-273.15)+"°C");
}


export const farenheit= (jsonfile)=>{
  for (var i = 0; i < 25; i+=5) {
    const icon = jsonfile.list[0].weather[0].icon;
    const url = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
    const dt = new Date(jsonfile.list[i].dt_txt);
    helper.img('img'+i, url);
    helper.overrite('date'+i,dt.toLocaleDateString());
    helper.overrite('hour'+i,dt.toLocaleTimeString());
    helper.overrite('Deep'+i,jsonfile.list[0].weather[0].description );
  }

  helper.overrite('CityName', jsonfile.city.name);
  helper.overrite('CountryName',jsonfile.city.country );
  helper.overrite('Weather', jsonfile.list[0].weather[0].main);
  helper.overrite('TempC',parseInt((jsonfile.list[0].main.temp-273.15)*(9/5)+32)+"°F");
  helper.overrite('TempF',parseInt(jsonfile.list[0].main.temp-273.15)+"°C");
  helper.overrite('MaxTemp', parseInt(jsonfile.list[0].main.temp_max-273.15)*(9/5)+32+"°F");
  helper.overrite('MinTemp', parseInt(jsonfile.list[0].main.temp_min-273.15)*(9/5)+32+"°F");
  helper.overrite('WindSpeed',jsonfile.list[0].wind.speed);
  helper.overrite('SensationTemp', parseInt(jsonfile.list[0].main.feels_like-273.15*(9/5)+32)+"°F");
}
