// Select all necessary DOM elements for manipulation
const searchBtn = document.getElementById('searchBtn');
const inputBox = document.querySelector('.input-box');
const weatherBody = document.querySelector('.weather-body');
const error404 = document.querySelector('.not-found');

// Select elements inside the weather-body to update them with data
const image = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');

// Asynchronous function to fetch and display weather data
async function checkWeather(city) {
    // OpenWeatherMap API key and endpoint URL
    const api_key = "dc858bfa6017a241338637eaf925602b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
        // Fetch data from the API and convert the response to JSON
        const response = await fetch(url);
        const weather_data = await response.json();

        // Handle the case where the city is not found (API returns 404 code)
        if (weather_data.cod === `404`) {
            weatherBody.classList.remove('active'); // Hide weather details
            error404.classList.add('active');       // Show error message
            return; // Exit the function early
        }

        // Hide the error section if a valid city is found
        error404.classList.remove('active');

        // Update the main weather image based on the current weather condition
        switch (weather_data.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            case 'Rain':
            case 'Drizzle':
                image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Mist':
            case 'Haze':
            case 'Fog':
            case 'Dust':
            case 'Smoke':
                image.src = 'images/mist.png';
                break;
            default:
                image.src = 'images/cloud.png'; // Default fallback image
        }

        // Update the DOM elements with the dynamically fetched data
        temperature.innerHTML = `${Math.round(weather_data.main.temp)} <sup>°C</sup>`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind.innerHTML = `${Math.round(weather_data.wind.speed * 3.6)} Km/h`; // Convert m/s to Km/h

        // Display the weather data container with a smooth animation
        weatherBody.classList.add('active');

    } catch (error) {
        // Log any network or fetch errors to the console
        console.error("Error fetching weather data:", error);
    }
}

// Add click event listener to the search button
searchBtn.addEventListener('click', () => {
    // Only execute if the input field is not empty
    if(inputBox.value.trim() !== '') {
        checkWeather(inputBox.value.trim());
    }
});

// Add keyup event listener to the input box to trigger search on "Enter" key
inputBox.addEventListener('keyup', (event) => {
    if (event.key === "Enter" && inputBox.value.trim() !== '') {
        checkWeather(inputBox.value.trim());
    }
});