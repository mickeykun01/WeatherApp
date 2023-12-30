const apiKey = 'e620c875216ebc131d23066bbaea5910' ;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weather = document.querySelector('.Weather-icon')
const showWeather = document.querySelector('.whether')


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        showWeather.style.display = 'none'
    }
    else{

        const data = await response.json();
        console.log(data);
    
    
    
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.humidity').innerHTML = data.main.humidity + " %"
        document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h"
    
        if(data.weather[0].main == 'Clouds'){
            weather.src = 'images/clouds.png'
        }
        else if(data.weather[0].main == 'Clear'){
            weather.src = 'images/clear.png'
        }
        else if(data.weather[0].main == 'Rain'){
            weather.src = 'images/rain.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            weather.src = 'images/drizzle.png'
        }
        else if(data.weather[0].main == 'Mist'){
            weather.src = 'images/mist.png'
        }
        else if(data.weather[0].main == 'Snow'){
            weather.src = 'images/snow.png'
        }
    
        showWeather.style.display = 'block';
        document.querySelector('.error').style.display = 'none'
    }
    
}

searchBtn.addEventListener('click', ()=>{
    
    checkWeather(searchBox.value);
})