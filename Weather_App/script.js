// const inputBox = document.querySelector('.input-box');
// const searchBtn = document.getElementById("searchBtn");
// const weather_img = document.querySelector('.weather-img');
// const temperature = document.querySelector('.temperature');
// const description = document.querySelector('.description');
// const humidity = document.getElementById('humidity');
// const wind_speed = document.getElementById('wind-speed');
// const location_not_found = document.querySelector(".location-not-found");
// const weather_body = document.querySelector('.weather-body');

// async function checkWeather(city){
//     const api_key = "9c398f750bd1b9c3e1f8d9079d67f468";
    
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data = await fetch(`${url}`).then(response => response.json());

//     if(weather_data.cod === `404`){
//         location_not_found.style.display = "flex";
//         weather_body.style.display = "none";
//         console.log("error");
//         return
//     }

//     console.log(weather_data);

//     weather_body.style.display = "flex";

//     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

//     description.innerHTML = `${weather_data.weather[0].description}`;

//     humidity.innerHTML = `${weather_data.main.humidity}%`;

//     wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;

//     switch(weather_data.weather[0].main){
//         case 'Clouds' : 
//             weather_img.src= "./images/cloud.png";
//             break;
//         case 'Clear' : 
//             weather_img.src= "./images/clear.png";
//             break;
//         case 'Rain' : 
//             weather_img.src= "./images/rain.png";
//             break;
//         case 'Mist' : 
//             weather_img.src= "./images/mist.png";
//             break;
//         case 'Snow' : 
//             weather_img.src= "./images/snow.png";
//             break;
//     }
    

    
// }

// searchBtn.addEventListener('click', ()=>{
//     checkWeather(inputBox.value);
// });

// Selecting the necessary elements from the DOM (Document Object Model)
const inputBox = document.querySelector('.input-box'); // Input box where the user types the city name
const searchBtn = document.getElementById("searchBtn"); // Button to trigger the weather search
const weather_img = document.querySelector('.weather-img'); // Image element to display the weather condition icon
const temperature = document.querySelector('.temperature'); // Element to display the temperature
const description = document.querySelector('.description'); // Element to display the weather description
const humidity = document.getElementById('humidity'); // Element to display the humidity percentage
const wind_speed = document.getElementById('wind-speed'); // Element to display the wind speed
const location_not_found = document.querySelector(".location-not-found"); // Element to show if the location is not found
const weather_body = document.querySelector('.weather-body'); // Element that contains the weather information to be displayed

// Asynchronous function to fetch and display weather data for a given city
async function checkWeather(city) {
    const api_key = "9c398f750bd1b9c3e1f8d9079d67f468"; // Your API key for the OpenWeatherMap service
    
    // Constructing the URL to fetch weather data for the specified city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    // Fetching the weather data and converting it to JSON format
    const weather_data = await fetch(`${url}`).then(response => response.json());

    // If the city is not found (error code 404), display an error message and hide the weather information
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex"; // Show the "location not found" message
        weather_body.style.display = "none"; // Hide the weather information
        console.log("error"); // Log the error for debugging purposes
        return; // Exit the function
    }

    // If the city is found, log the weather data to the console (for debugging)
    console.log(weather_data);

    // Display the weather information section
    weather_body.style.display = "flex";

    // Update the temperature, converting from Kelvin to Celsius
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    // Update the weather description (e.g., "clear sky", "light rain")
    description.innerHTML = `${weather_data.weather[0].description}`;

    // Update the humidity percentage
    humidity.innerHTML = `${weather_data.main.humidity}%`;

    // Update the wind speed in km/hr
    wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;

    // Update the weather image based on the main weather condition
    switch(weather_data.weather[0].main){
        case 'Clouds': 
            weather_img.src = "./images/cloud.png"; // Display cloud image
            break;
        case 'Clear': 
            weather_img.src = "./images/clear.png"; // Display clear sky image
            break;
        case 'Rain': 
            weather_img.src = "./images/rain.png"; // Display rain image
            break;
        case 'Mist': 
            weather_img.src = "./images/mist.png"; // Display mist image
            break;
        case 'Snow': 
            weather_img.src = "./images/snow.png"; // Display snow image
            break;
    }
}

// Event listener for the search button click event
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value); // Call the checkWeather function with the city name entered by the user
});
