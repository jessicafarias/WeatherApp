//const img = document.querySelector('img');
const apikey = 'e07023ef36e4fb48fc91efb895731682';
const cityname = 'Merida';
const link = 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid='+apikey;


async function getData(){
  const response = await fetch(link ,{mode:"cors"});
  const jsonfile = await response.json();
  console.log(jsonfile.main.temp);
  console.log(jsonfile.name);
  console.log(jsonfile);
}
getData();