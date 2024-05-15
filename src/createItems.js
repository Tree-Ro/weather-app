import { format } from 'date-fns';

function createWeatherItem(weatherPromise) {
  const wrapper = document.createElement('div');
  wrapper.className = 'weatherWrapp';

  const weatherTitle = wrapper.appendChild(document.createElement('h2'));
  const weatherIcon = wrapper.appendChild(document.createElement('img'));
  const weatherTemp = wrapper.appendChild(document.createElement('p'));
  const weatherHumid = wrapper.appendChild(document.createElement('p'));
  const weatherLastUpdate = wrapper.appendChild(document.createElement('p'));
  const weatherCountry = wrapper.appendChild(document.createElement('p'));
  const weatherLocation = wrapper.appendChild(document.createElement('p'));

  weatherPromise
    .then((data) => {
      console.log(data);
      weatherTitle.textContent = data.condition.misc.text;
      weatherIcon.src = data.condition.misc.icon;

      weatherTemp.textContent = `${data.condition.temp_c}°C`;
      weatherHumid.textContent = `${data.condition.humidity}% Humid`;

      weatherLastUpdate.textContent = `Last Updated: ${data.location.last_updated}`;
      weatherCountry.textContent = data.location.country;
      weatherLocation.textContent = data.location.place;
    })
    .catch();

  return wrapper;
}

export default createWeatherItem;
