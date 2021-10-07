
const API_KEY ="ee7f12b34aff09e5b1e5e1e83b93f723"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `🌡${data.main.temp}℃`;
    });
}

function onGeoError(){
    alert("Can't find you you. No weather for you.")

}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);