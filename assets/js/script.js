
// *  ----------------------- date ----------------------------------- //

// today's date

        // * month 
        var month = new Date();
        document.getElementById("monthID").innerHTML = month.getMonth() + 1 + '/';
        // // * day
        var day = new Date();
        document.getElementById("dayID").innerHTML = day.getDate() + "/"
        // * year 
        var year = new Date();
        document.getElementById("yearID").innerHTML = year.getFullYear();

        
// *  ----------------------- weather ----------------------------------- //

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


// * --------------------  current conditions -------------------------- //

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
                // uvIndexH.innerHTML = uvIndexValue;            
    })
    .catch(err => alert("Incorrect city name, please try again.  Or only provide the city, not state."))
    
})

// * --------------------  forecasted conditions -------------------------- //

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
                // var nameValueF = data.city.name;              
                var tempValueF = Math.floor(data.list[0].main.temp); 
                // var descValueF = data.weather[0].main;   
                var iconValueF = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"; 
                var humidityValueF = data.list[0].main.humidity;
                var forecastDateValueF = data.list[0].dt;      
            //HTML ID associating to the JSON values
                // nameH.innerHTML = nameValueF;
                tempHF.innerHTML = tempValueF + "°F";
                // descHF.innerHTML = descValueF;
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
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey + "&cnt=5")
    .then(response => response.json())
    .then(data => {
            //JSON data parameters
                // var nameValueF = data.city.name;              
                var tempValueFo = Math.floor(data.list[10].main.temp); 
                var iconValueFo = "https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png"; 
                var humidityValueFo = data.list[10].main.humidity;
                var forecastDateValueFo = data.list[10].dt;            
            //HTML ID associating to the JSON values
                tempHFo.innerHTML = tempValueFo + "°F";
                iconHFo.setAttribute("src", iconValueFo);
                humidityHFo.innerHTML = humidityValueFo + "%";
                forecastDateFo.innerHTML = forecastDateValueFo;
    })
    .catch(err => alert("Incorrect city name, please try again."))
}

// --- additional items
// add date dt
// add local Storage & search history
// add UV index & color
// add lat\lon
// add search by city, state

