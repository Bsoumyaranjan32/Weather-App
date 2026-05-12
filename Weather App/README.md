# 🌤️ Glassmorphism Weather App

A beautiful, responsive, and interactive Weather Application built with HTML, CSS, and vanilla JavaScript. This project utilizes the **OpenWeatherMap API** to fetch real-time weather data and features a modern **Glassmorphism** UI design.

## ✨ Features

- **Real-time Weather Data**: Search for any city in the world and get accurate, up-to-date weather conditions.
- **Dynamic Weather Icons**: The main weather icon changes automatically based on the current weather (Clear, Clouds, Rain, Snow, Mist, etc.).
- **Detailed Insights**: Displays Temperature (°C), Weather Description, Humidity (%), and Wind Speed (Km/h).
- **Smooth Animations**: Includes floating animations for icons and smooth fade-in transitions when data loads.
- **Modern UI**: Features a dark aesthetic with glowing ambient orbs and a frosted glass (glassmorphism) container.
- **Error Handling**: Displays a friendly 404 "Not Found" message if an invalid city name is entered.
- **Responsive Design**: Adapts beautifully to mobile devices and smaller screens.

## 🛠️ Technologies Used

- **HTML5**: For semantic structure.
- **CSS3**: For styling, Flexbox layouts, animations (`@keyframes`), and Glassmorphism effects (`backdrop-filter`).
- **JavaScript (ES6+)**: For DOM manipulation, Event handling, and asynchronous API requests (`fetch`, `async/await`).
- **OpenWeatherMap API**: For fetching live weather data.
- **FontAwesome**: For scalable vector icons.
- **Google Fonts**: Uses 'Poppins' for clean typography.

## 🚀 Live Demo
<!-- You can add your live project link here once hosted (e.g., Vercel, Netlify, or GitHub Pages) -->
[Click here to view the live project](#)

## 💻 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You will need an API key from OpenWeatherMap.
1. Go to [OpenWeatherMap](https://openweathermap.org/).
2. Create a free account and generate an API key.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd weather-app
   ```
3. **Configure the API Key:**
   - Open `script.js` in your code editor.
   - Replace the `api_key` variable value with your own OpenWeatherMap API key:
     ```javascript
     const api_key = "YOUR_API_KEY_HERE";
     ```
4. **Run the App:**
   - Simply open `index.html` in your web browser, or use an extension like **Live Server** in VS Code.

## 📸 Screenshots

<!-- Replace these placeholder image paths with actual screenshots of your app -->
*You can add screenshots of your app here (e.g., default state, weather result, and error state).*

![App Preview](images/screenshot.png)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
