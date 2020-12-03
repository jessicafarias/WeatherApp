import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';
import './style.css';
import * as Update from './Update';
import Onclic from './onclic';
import * as helper from './style_helpers';

async function getData(nurl) {
  const response = await fetch(nurl, { mode: 'cors' });
  if (response.ok) {
    const jsonfile = await response.json();
    if (jsonfile.cod === '200') {
      Onclic(jsonfile);
      helper.unstyle('btnC', 'selected');
      helper.style('btnC', 'toggle');
      helper.style('btnF', 'selected');
      Update.celsius(jsonfile);
    }
  } else {
    alert('No found, try again');
  }
}

const apikey = 'e07023ef36e4fb48fc91efb895731682';
helper.btn('btnFind', () => {
  const cityname = document.getElementById('city').value;
  const link = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apikey}`;
  getData(link);
}, 'empty');

getData('https://api.openweathermap.org/data/2.5/forecast?q=Merida&appid=e07023ef36e4fb48fc91efb895731682');