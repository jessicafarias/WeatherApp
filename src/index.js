import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css'
import './style.css';
import * as helper from './style_helpers';

const apikey = 'e07023ef36e4fb48fc91efb895731682';



helper.btn('btnFind', ()=>{
  const cityname = document.getElementById('city').value;
  const link = 'https://api.openweathermap.org/data/2.5/forecast?q='+cityname+'&appid='+apikey;
  getData(link);
}, 'empty')


async function getData(nurl){
  let response = await fetch(nurl ,{mode:"cors"});
  if (response.ok) {
    const jsonfile = await response.json();
    if(jsonfile.cod ==='200'){
      Update(jsonfile);
    }

  } else {
      alert('No found, try again');    
  }
}


const Update= (jsonfile)=>{
  const icon = jsonfile.list[0].weather[0].icon;
  const url = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
  for (var i = 0; i < 25; i+=5) {
    const dt = new Date(jsonfile.list[i].dt_txt);
    helper.img('img'+i, url);
    helper.overrite('date'+i,dt.toLocaleDateString());
    helper.overrite('hour'+i,dt.toLocaleTimeString());
    helper.overrite('Deep0',jsonfile.list[0].weather[0].description );
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


getData('https://api.openweathermap.org/data/2.5/forecast?q=Merida&appid='+apikey);