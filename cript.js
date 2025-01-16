document.addEventListener("DOMContentLoaded", () => {
    let getWeatherBtn = document.getElementById("get-weather-btn")
    let cityNameInput = document.getElementById("city-input")
    let displayCityName = document.getElementById("city-name")
    let displayErrorMessage = document.getElementById("error-message")
    let weatherInfo = document.getElementById("weather-info")
    let displayDescription = document.getElementById("description")
    displayTemprature = document.getElementById("tempruture")

    //data is stored in other continent
    //it takes sometime to fetch
    const API_KEY = "1f202cf08c1a4a7e367f7ddsvergrevdvawgasdd65cebe2d0"
    console.log("Working fine....")
    getWeatherBtn.addEventListener("click", async () => {
        const inputText = cityNameInput.value.trim();
        if (inputText == "") return

        try {
            const weatherData = await fetchData(inputText);
            displayData(weatherData)

        } catch (e) {
            showError()
        }
        cityNameInput.value = ""
    })

    //for fetch the data from server
    async function fetchData(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        const response = fetch(url);
        if (!(await response).ok) {
            throw new Error("City not found!");
        }
        const data = (await response).json();
        return data;


    }

    //function to display the data on screen
    function displayData(data) {
        const { name, main, weather } = data
        displayCityName.textContent = name
        displayTemprature.textContent = `Temprature: ${main.temp}`
        displayDescription.textContent = `Description: ${weather[0].description}`

        //unlock the screen
        weatherInfo.classList.remove("hidden");
        displayErrorMessage.classList.add("hidden")

    }

    //function to show error message
    function showError() {
        weatherInfo.classList.add("hidden")
        displayErrorMessage.classList.remove("hidden")
    }
})
