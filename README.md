🌤️ Server-Side Weather Application

A simple server-side weather application built using Node.js and Express that fetches real-time weather data from the OpenWeatherMap API and serves it through a RESTful API endpoint. A lightweight frontend consumes this API and displays the results to the user.

🚀 Features

Server-side API built with Express.js

Fetches real-time weather data using OpenWeatherMap API

RESTful POST endpoint (/weather)

Clean JSON responses

Simple frontend using HTML, CSS, and Fetch API

Demonstrates client–server communication

🛠️ Technologies Used

Node.js

Express.js

Axios

HTML & CSS

JavaScript (Fetch API)

OpenWeatherMap API

📁 Project Structure
weather-project/
│── index.js
│── index.html
│── package.json
│── package-lock.json

⚙️ Setup & Installation
1️⃣ Clone or Download the Project
git clone <repository-url>
cd weather-project

2️⃣ Install Dependencies
npm install

3️⃣ Add Your API Key


with your OpenWeatherMap API key.

▶️ How to Run the Project
Start the Backend Server
node index.js


Server will run at:

http://localhost:3000

Run the Frontend

Open index.html in a browser

Enter a city name

Click Check Weather

📡 API Details
Endpoint
POST /weather

Request Body
{
  "city": "Kolkata"
}

Sample Response
{
  "temp": 29,
  "weather": "Clouds"
}

🧪 Sample Test Cases
Input City	Expected Output
Kolkata	Temperature & Weather
London	Temperature & Weather
Invalid	Error message
📸 Screenshots

(Add screenshots of UI, server running, and API testing here)

⚠️ Limitations

Displays only current weather

No AQI or forecast

Requires active internet connection

Depends on third-party API availability

🔮 Future Enhancements

Add AQI support

Weekly weather forecast

Cloud deployment

Database for search history

Improved UI and animations

📚 References

https://openweathermap.org

https://nodejs.org

https://expressjs.com
