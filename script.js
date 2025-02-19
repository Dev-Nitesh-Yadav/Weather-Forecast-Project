document.getElementById("getWeather").addEventListener("click", function () {
    let city = document.getElementById("locationInput").value;
    
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    let apiKey = "cb6538f8a8fc4df1be492634250201";
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city").textContent = `📍 ${data.location.name}, ${data.location.country}`;
            document.getElementById("temperature").textContent = `🌡️ ${data.current.temp_c}°C`;
            document.getElementById("condition").textContent = `⛅ ${data.current.condition.text}`;
            document.getElementById("weatherIcon").src = data.current.condition.icon;
            document.querySelector(".weather-info").style.display = "block";
        })
        .catch(error => {
            alert("Invalid city name or API error!");
            console.error(error);
        });
});
