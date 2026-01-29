const apiKey = "5ed8e29bdde61518e73d153f994ab0f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=colombo";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    }

checkWeather();