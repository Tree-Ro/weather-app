async function retrieveWeather(location) {
  let defaultLocation;
  if (!location) {
    defaultLocation = 'auto:ip';
  } else {
    defaultLocation = location;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0b5762764c564390961153629241305&q=${defaultLocation}`
    );
    const responseData = await response.json();
    return processData(responseData);
  } catch (error) {
    alert("Couldn't get data on that location");
  }
}

function processData(responseData) {
  let processedData = {
    condition: {
      misc: responseData.current.condition,
      temp_c: responseData.current.temp_c,
      humidity: responseData.current.humidity,
    },
    location: {
      country: responseData.location.country,
      place: responseData.location.name,
      localtime_epoch: responseData.location.localtime_epoch,
    },
  };

  return processedData;
}

export default retrieveWeather;
