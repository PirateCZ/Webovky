//initialze variables
let weatherOutput = document.getElementById("temperature")
let selectBox1 = document.getElementById("selectBox1")
let cityName = selectBox1.value 

let APIKey = "53c14da4561d74e71719e1b1b78f8a49"
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;
let weatherData;

fetchWeather(cityName)

selectBox1.addEventListener("change", function(){fetchWeather(selectBox1.value)})

//call API
async function fetchWeather(city){
    try{
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
        let response = await fetch(url)
        weatherData = await response.json()
        console.log(weatherData)
        weatherOutput.innerHTML = 
        `
        <h2>
            Today is ${Math.round(weatherData.main.temp)}°C in ${weatherData.name}
        </h2>
        `
    }
    catch(error){
        console.error("Couldnt fetch data: ", error)
    }
    
}