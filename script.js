const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a2e0c1a1d9msh43510bec16bd935p10ee87jsn5f4424a08ffc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const updateWeatherTable = (data) => {
    const table = document.getElementById('weatherTable');
    const city = data.city;
    const weatherData = data.weatherData;

    // Clear table body
    table.innerHTML = '';

    // Create new table body
    const newTbody = document.createElement('tbody');

    // Create table row
    const newTr = document.createElement('tr');
    newTr.innerHTML = `
        <th scope="row" class="text-start">${city}</th>
        <td>${weatherData.cloud_pct}</td>
        <td>${weatherData.feels_like}</td>
        <td>${weatherData.humidity}</td>
        <td>${weatherData.max_temp}</td>
        <td>${weatherData.min_temp}</td>
        <td>${weatherData.sunrise}</td>
        <td>${weatherData.sunset}</td>
        <td>${weatherData.temp}</td>
        <td>${weatherData.wind_degrees}</td>
        <td>${weatherData.wind_speed}</td>
    `;

    // Append row to table body
    newTbody.appendChild(newTr);

    // Append table body to table
    table.appendChild(newTbody);
}

const getWeather = (city) => {
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        updateWeatherTable({city: city, weatherData: response});
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Austin")