import './style.css';
import retrieveWeather from './retrieveData';

const data = retrieveWeather('Mexico City');

console.log(data);
