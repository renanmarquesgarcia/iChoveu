const TOKEN = import.meta.env.VITE_TOKEN;
const API_URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=`;

export const searchCities = async (term) => {
  const response = await fetch(`${API_URL}${term}`);
  const data = await response.json();
  if (!data.length) {
    window.alert('Nenhuma cidade encontrada');
    return data;
  }
  return data;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
