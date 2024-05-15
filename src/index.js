import './style.css';
import retrieveWeather from './retrieveData';
import createWeatherItem from './createItems';

const data = retrieveWeather('Nyc');

console.log(createWeatherItem(data));
