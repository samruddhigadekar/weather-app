const apiKey = "4d6071a83b4bd5b3350bcfdbbf558412";

async function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        const temp = data.main.temp;
        const weather = data.weather[0].description;

        document.getElementById("weatherResult").innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${temp}°C</p>
            <p>Condition: ${weather}</p>
        `;
    } catch (error) {
        console.log(error);
    }
}