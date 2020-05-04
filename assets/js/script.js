
// * date
var dateVar = new Date();
document.getElementById("dateID").innerHTML = dateVar;

// * variables
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var nameH = document.querySelector('.nameID');
var descH = document.querySelector('.descID');
var tempH = document.querySelector('.tempID');
var iconH = document.querySelector('.iconID');
var humidityH = document.querySelector('.humidityID');
var windH = document.querySelector('.windID');
// var uvIndexH = document.querySelector('.uvIndexID');

// * button event listener
button.addEventListener('click', function(){
    //fetch JSON data
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&APPID=002e1e79cccfda7d0bac3ab7d5597c0f')
    .then(response => response.json())
    .then(data => {
            //JSON data parameters
            var nameValue = data.name;              //data['name'];
            var tempValue = Math.floor(data.main.temp); //var tempValue = data['main']['temp'];
            var descValue = data.weather[0].main;   //data['weather'][0]['main'];
            var iconValue = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; //data['weather'][0]['icon'];
            var humidityValue = data.main.humidity; 
            var windValue = Math.floor(data.wind.speed);
            // var uvIndexValue = data.weather[0].main;   
            //HTML ID associating to the JSON values
            nameH.innerHTML = nameValue;
            tempH.innerHTML = tempValue;
            descH.innerHTML = descValue;
            iconH.setAttribute("src", iconValue);
            humidityH.innerHTML = humidityValue;
            windH.innerHTML = windValue;
            // uvIndexH.innerHTML = uvIndexValue;
    })
    .catch(err => alert("Incorrect city name, please try again.  Or only provide the city, not state."))
})