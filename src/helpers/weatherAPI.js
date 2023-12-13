const TOKEN = import.meta.env.VITE_TOKEN;
const forecastDays = 7;

export const searchCities = async (term) => {
  const API_URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=`;

  const response = await fetch(`${API_URL}${term}`);
  const data = await response.json();

  if (!data.length) {
    window.alert('Nenhuma cidade encontrada');
    return data;
  }

  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const API_URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=`;

  const response = await fetch(`${API_URL}${cityURL}`);
  const { current, location } = await response.json();

  return {
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    country: location.country,
    name: location.name,
    url: cityURL,
  };
};

export const get7DaysWeatherForecast = async (cityURL, days = forecastDays) => {
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=`;
  const response = await fetch(`${API_URL}${cityURL}&days=${days}`);
  const { forecast: { forecastday } } = await response.json();
  return forecastday.map(({ date, day }) => ({
    date,
    maxTemp: day.maxtemp_c,
    minTemp: day.mintemp_c,
    condition: day.condition.text,
    icon: day.condition.icon,
  }));
};
