import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css'
import './style.css';
const apikey = 'e07023ef36e4fb48fc91efb895731682';
const cityname = 'cancun';
const link = 'https://api.openweathermap.org/data/2.5/forecast?q='+cityname+'&appid='+apikey;
//forecast
const image = document.getElementById('dia1');

async function getData(){
  const response = await fetch(link ,{mode:"cors"});
  const jsonfile = await response.json();
  const icon = jsonfile.list[0].weather[0].icon;
  const url = 'http://openweathermap.org/img/wn/'+icon+'@2x.png'
  image.src= url;
}

getData();