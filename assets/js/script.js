
// *  ----------------------- date ----------------------------------- //

// var dateVar = new Date();
// document.getElementById("dateID").innerHTML = dateVar;

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

        /*
// today's date + 1 (forecast)
        // * month 
        var month = new Date();
        document.getElementById("monthID").innerHTML = month.getMonth() + 1 + '/';
        // // * day
        var dayOne = new Date();
        document.getElementById("dayIDOne").innerHTML = dayOne.getDate() + 1 + "/"
        // * year 
        var year = new Date();
        document.getElementById("yearID").innerHTML = year.getFullYear();

// today's date + 2 (forecast)
        // * month 
        var month = new Date();
        document.getElementById("monthID").innerHTML = month.getMonth() + 1 + '/';
        // // * day
        var dayTwo = new Date();
        document.getElementById("dayIDTwo").innerHTML = dayTwo.getDate() + 2 + "/"
        // * year 
        var year = new Date();
        document.getElementById("yearID").innerHTML = year.getFullYear();

// today's date + 3 (forecast)
        // * month 
        var month = new Date();
        document.getElementById("monthID").innerHTML = month.getMonth() + 1 + '/';
        // // * day
        var dayThree = new Date();
        document.getElementById("dayIDThree").innerHTML = dayThree.getDate() + 3 + "/"
        // * year 
        var year = new Date();
        document.getElementById("yearID").innerHTML = year.getFullYear();

// today's date + 4 (forecast)
        // * month 
        var month = new Date();
        document.getElementById("monthID").innerHTML = month.getMonth() + 1 + '/';
        // // * day
        var dayFour = new Date();
        document.getElementById("dayIDFour").innerHTML = dayFour.getDate() + 4 + "/"
        // * year 
        var year = new Date();
        document.getElementById("yearID").innerHTML = year.getFullYear();

// today's date + 5 (forecast)
        // * month 
        var month = new Date();
        document.getElementById("monthID").innerHTML = month.getMonth() + 1 + '/';
        // // * day
        var dayFive = new Date();
        document.getElementById("dayIDFive").innerHTML = dayFive.getDate() + 5 + "/"
        // * year 
        var year = new Date();
        document.getElementById("yearID").innerHTML = year.getFullYear();

        */

// *  ----------------------- weather ----------------------------------- //

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
            tempH.innerHTML = tempValue + "°F";
            descH.innerHTML = descValue;
            iconH.setAttribute("src", iconValue);
            humidityH.innerHTML = humidityValue + "%";
            windH.innerHTML = windValue + " miles per hour";
            // uvIndexH.innerHTML = uvIndexValue;
    })
    .catch(err => alert("Incorrect city name, please try again.  Or only provide the city, not state."))
})