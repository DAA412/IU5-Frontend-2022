function handleError() 
{
    alert('К сожалению, такого города я не нашел, поэтому посмотрите на прекрасное Щёлково');
    fillWeather('Щёлково');
}

function setBackground(code) {
    const wCard = document.getElementById("wCard");
    if (code > 800) 
    {
        wCard.style.background = "url(images/cloudy.jpg) no-repeat";
        wCard.style.backgroundSize = "cover";
    } 
    else if (code === 800) 
    {
        wCard.style.background = "url(images/sunny.jpg) no-repeat";
        wCard.style.backgroundSize = "cover";
    } 
    else if (code >= 700) 
    {
        wCard.style.background = "url(images/mist.jpg) no-repeat";
        wCard.style.backgroundSize = "cover";
    } 
    else if (code >= 600) 
    {
        wCard.style.background = "url(images/snow.jpg) no-repeat";
        wCard.style.backgroundSize = "cover";
    } 
    else if (code >= 500) 
    {
        wCard.style.background = "url(images/rain.jpg) no-repeat";
        wCard.style.backgroundSize = "cover";
    } 
    else if (code >= 300) 
    {
        wCard.style.background = "url(images/drizzle.jpg) no-repeat";
        wCard.style.backgroundSize = "cover";
    }
    else if (code >= 200) 
    {
        wCard.style.background = "url(images/thunder.jpg) no-repeat";
        wCard.style.backgroundSize = "cover";
    }
}

function getTemp(temp)
{
    let sign = "";
    temp -= 273.15;
    if (temp > 0) degSign = "+";
    return sign + Math.round(temp);
}

function buildWCard(data) 
{
    setBackground(data.weather[0].id);
    document.getElementById("cityName").innerText = "Погода: " + data.name;
    document.getElementById("degrees").innerText = getTemp(data.main.temp) + '°';
    document.getElementById("description").innerText = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
    document.getElementById("feel").innerText = getTemp(data.main.feels_like) + '°';
    document.getElementById("range").innerText = getTemp(data.main.temp_max) + '°' + '/' + getTemp(data.main.temp_min) + '°';
    document.getElementById("humidity").innerText = data.main.humidity + '%';
    document.getElementById("pressure").innerText = Math.round(data.main.pressure) + ' мбар';
}

function fillWeather(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&lang=ru&appid=65ef32afbd246a1a02aecbd6bc316d6d").then((resp) => resp.json()).then((data) => 
    {
        console.log(data);
        if (data.cod === "404") handleError();
        else buildWCard(data);
    });
}

function handler(e) 
{
    if (e.target === document.getElementById("sButton")) {
        fillWeather(document.getElementById("sBox").value);
    } else if (e.code === "Enter") {
        console.log("Enter");
        if (document.querySelector('input:focus')) {
            fillWeather(document.getElementById("sBox").value);
        }
    }
}
addEventListener('click', handler, false);
addEventListener('keydown', handler, false);