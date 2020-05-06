
//   ----------------------- date ----------------------------------- //

// today's date in nav bar

        // * month 
        var month = new Date();
        document.getElementById("monthID").innerHTML = month.getMonth() + 1 + '/';
        // // * day
        var day = new Date();
        document.getElementById("dayID").innerHTML = day.getDate() + "/"
        // * year 
        var year = new Date();
        document.getElementById("yearID").innerHTML = year.getFullYear();

        
//   ----------------------- weather ----------------------------------- //

    // * variables - current weather
    var button = document.querySelector('.button');
    var inputValue = document.querySelector('.inputValue');
    var nameH = document.querySelector('.nameID');
    var descH = document.querySelector('.descID');
    var tempH = document.querySelector('.tempID');
    var iconH = document.querySelector('.iconID');
    var humidityH = document.querySelector('.humidityID');
    var windH = document.querySelector('.windID');
    // var uvIndexH = document.querySelector('.uvIndexID');
    var apiKey = '002e1e79cccfda7d0bac3ab7d5597c0f';
    //var cnt = 3;  //to limit the num of lines in response


//  --------------------  current conditions -------------------------- //

button.addEventListener('click', function(){
    //fetch JSON data
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey + "&cnt=3")
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
                tempH.innerHTML = tempValue + "°F";
                descH.innerHTML = descValue;
                iconH.setAttribute("src", iconValue);
                humidityH.innerHTML = humidityValue + "%";
                windH.innerHTML = windValue + " MPH";
                // uvIndexH.innerHTML = uvIndexValue;           //to add later
                localStorage.setItem("inputValue", nameValue); 
    })
    .catch(err => alert("Incorrect city name, please try again.  Or only provide the city, not state."))
    
})

// --------------------  forecasted conditions -------------------------- //

// day 1
    var tempHF = document.querySelector('.tempIDF');
    var iconHF = document.querySelector('.iconIDF');
    var humidityHF = document.querySelector('.humidityIDF');
    var forecastDateF = document.querySelector('.forecastDateIDF')

var forecast = function(){
    //fetch JSON data
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey)
    // console.log(data)
    .then(response => response.json())
    .then(data => {
            //JSON data parameters
                var tempValueF = Math.floor(data.list[01].main.temp); 
                var iconValueF = "https://openweathermap.org/img/w/" + data.list[01].weather[0].icon + ".png"; 
                var humidityValueF = data.list[01].main.humidity;
                var forecastDateValueF = data.list[01].dt_txt;
                tempHF.innerHTML = tempValueF + "°F";
                iconHF.setAttribute("src", iconValueF);
                humidityHF.innerHTML = humidityValueF + "%";
                forecastDateF.innerHTML = forecastDateValueF;
    })
    .catch(err => alert("Incorrect city name, please try again."))
}

// day 2
    var tempHFo = document.querySelector('.tempIDFo');
    var iconHFo = document.querySelector('.iconIDFo');
    var humidityHFo = document.querySelector('.humidityIDFo');
    var forecastDateFo = document.querySelector('.forecastDateIDFo');    

var forecastTwo = function(){
    //fetch JSON data
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey)
    // console.log(data)
    .then(response => response.json())
    .then(data => {
                var tempValueFo = Math.floor(data.list[09].main.temp); 
                var iconValueFo = "https://openweathermap.org/img/w/" + data.list[09].weather[0].icon + ".png"; 
                var humidityValueFo = data.list[09].main.humidity;
                var forecastDateValueFo = data.list[09].dt_txt;  
                tempHFo.innerHTML = tempValueFo + "°F";
                iconHFo.setAttribute("src", iconValueFo);
                humidityHFo.innerHTML = humidityValueFo + "%";
                forecastDateFo.innerHTML = forecastDateValueFo;
    })
    .catch(err => alert("Incorrect city name, please try again."))
}

// day 3
var tempHFor = document.querySelector('.tempIDFor');
var iconHFor = document.querySelector('.iconIDFor');
var humidityHFor = document.querySelector('.humidityIDFor');
var forecastDateFor = document.querySelector('.forecastDateIDFor');    

var forecastThree = function(){
//fetch JSON data
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey)
// console.log(data)
.then(response => response.json())
.then(data => {
            var tempValueFor = Math.floor(data.list[17].main.temp); 
            var iconValueFor = "https://openweathermap.org/img/w/" + data.list[17].weather[0].icon + ".png"; 
            var humidityValueFor = data.list[17].main.humidity;
            var forecastDateValueFor = data.list[17].dt_txt;  
            tempHFor.innerHTML = tempValueFor + "°F";
            iconHFor.setAttribute("src", iconValueFor);
            humidityHFor.innerHTML = humidityValueFor + "%";
            forecastDateFor.innerHTML = forecastDateValueFor;
})
.catch(err => alert("Incorrect city name, please try again."))
}

// day 4
var tempHFore = document.querySelector('.tempIDFore');
var iconHFore = document.querySelector('.iconIDFore');
var humidityHFore = document.querySelector('.humidityIDFore');
var forecastDateFore = document.querySelector('.forecastDateIDFore');    

var forecastFour = function(){
//fetch JSON data
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey)
// console.log(data)
.then(response => response.json())
.then(data => {
            var tempValueFore = Math.floor(data.list[25].main.temp); 
            var iconValueFore = "https://openweathermap.org/img/w/" + data.list[25].weather[0].icon + ".png"; 
            var humidityValueFore = data.list[25].main.humidity;
            var forecastDateValueFore = data.list[25].dt_txt;  
            tempHFore.innerHTML = tempValueFore + "°F";
            iconHFore.setAttribute("src", iconValueFore);
            humidityHFore.innerHTML = humidityValueFore + "%";
            forecastDateFore.innerHTML = forecastDateValueFore;
})
.catch(err => alert("Incorrect city name, please try again."))
}

// day 5
var tempHForec = document.querySelector('.tempIDForec');
var iconHForec = document.querySelector('.iconIDForec');
var humidityHForec = document.querySelector('.humidityIDForec');
var forecastDateForec = document.querySelector('.forecastDateIDForec');

var forecastFive = function(){
    //fetch JSON data
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey)
        // console.log(data)
    .then(response => response.json())
    .then(data => {
                var tempValueForec = Math.floor(data.list[33].main.temp); 
                var iconValueForec = "https://openweathermap.org/img/w/" + data.list[33].weather[0].icon + ".png"; 
                var humidityValueForec = data.list[33].main.humidity;
                var forecastDateValueForec = data.list[33].dt_txt;  
                // console.log(forecastDateValueFor);
                tempHForec.innerHTML = tempValueForec + "°F";
                iconHForec.setAttribute("src", iconValueForec);
                humidityHForec.innerHTML = humidityValueForec + "%";
                forecastDateForec.innerHTML = forecastDateValueForec;
    })
    .catch(err => alert("Incorrect city name, please try again."))
}


//* ------------------------------- UV index --------------------------- //

var long = document.querySelector('.longitudeID');
var lati = document.querySelector('.latitudeID');
var uvI = document.querySelector('.uvIndexID');

var uvIndex = function(){
//fetch JSON data
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey + '&cnt=1')
// console.log(data)
.then(response => response.json())
.then(data => {
            var longitude = data.city.coord.lon;
            var latitude = data.city.coord.lat;
            // long.innerHTML = longitude;
            // lati.innerHTML = latitude;
            // uvI.innerHTML = uvIndexResult;

                    //  http://api.openweathermap.org/data/2.5/uvi/forecast?appid={appid}&lat={lat}&lon={lon}&cnt={cnt}
                    fetch('https://api.openweathermap.org/data/2.5/uvi/forecast?appid=' + apiKey + '&lat=' + latitude + '&lon=' + longitude + '&cnt=1')
                    .then(response => response.json())
                    .then(data => {            
                                var uvIndexResult = data.value;
                                uvI.innerHTML = uvIndexResult;
                    })
                    // .catch(err => alert("Did not catch UV index correctly."))
})
// .catch(err => alert("Error getting the longitude and latitude values."))
}


// * ----------------------- display last city input ----------------------- //


// var userInputSpan = document.querySelector("#showCities");

// function renderLastCities() {
//     var displayCity = document.querySelector("#pastCities");
//         displayCity.textContent = localStorage.getItem("#inputValue");
        
// renderLastCities();

// * ----------------------- additional items to add ----------------------- //

// format date
// add local Storage & search history
// add UV index & color
// add search by city & state, include country
// add option for Celcius or Fahrenheit
// include min | max

