//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=imperial


let API_KEY = "0a6c200a056201b23eafc8e7ce9f366a";

getweatherData = (city) =>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather';

    const Full_url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(Full_url);
    console.log(city)

    return weatherPromise.then((response) => {
        return response.json()


    })

}

function searchcity(){
    const city = document.getElementById('city-input').value;

    getweatherData(city)
    .then((response) =>{
        showWeatherData(response)
        console.log(response)

    })
    .catch((err) =>{
        console.log(err)
        window.alert("Please Enter City Name")
    })

}

showWeatherData = (weatherData) =>{
       document.getElementById('city-name').innerText = weatherData.name;
       document.getElementById('weather-type').innerText = weatherData.weather[0].main;
       document.getElementById('temp').innerText = weatherData.main.temp;
       document.getElementById('wind-degree').innerText = weatherData.wind.deg;
       document.getElementById('max-temp').innerText = weatherData.main.temp_max;
       document.getElementById('icon').src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
       
}      