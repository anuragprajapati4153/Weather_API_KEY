document.addEventListener('DOMContentLoaded', () => {
    let cityInputText = document.getElementById("city-input")
    let getWeatherBtn = document.getElementById("get-weather-btn")
    let getWeatherInfo = document.getElementById("weather-info")
    let displayCityName = document.getElementById("city-name")
    let displayTemprature = document.getElementById("tempruture")
    let displayDescrption = document.getElementById("description")
    let displayError = document.getElementById("error-message")

    const API_KEY = "f202cf08c1a4a7e367f7dd65cebe2d0"
    console.log("working fine...")

    getWeatherBtn.addEventListener('click', async () => {
        const inputCityName = cityInputText.value.trim()
        if (!inputCityName) return
        //get the data
        //server may throw the error
        //server/database is always in another continent
        try {
            const weatherData = await fetchWeatherData(inputCityName)
            displayData(weatherData)
        } catch (error) {
            ShowError()
        }
        fetchWeatherData(inputCityName)
        console.log(`You have Entered ${inputCityName}`)
        cityInputText.value = ""
    })

    async function fetchWeatherData(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        const response = fetch(url);
        console.log(typeof response)
        console.log(response)
    }

    function displayData(data) {
        //display data
    }

    function ShowError() {
        getWeatherInfo.classList.add("hidden")
        displayError.classList.remove("hidden")
    }
})