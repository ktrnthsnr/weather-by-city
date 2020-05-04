
/*
var forecasting = function(){
    //fetch JSON data -- forecasting
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=imperial&APPID=' + apiKey + "&cnt=5")
    .then(response => response.json())
    .then(data => {
            //JSON data parameters
            var nameValueF = data.city.name;              //data['name'];
            var tempValueF = Math.floor(data.main.temp); //var tempValue = data['main']['temp'];
            var descValueF = data.weather[0].main;   //data['weather'][0]['main'];
            var iconValueF = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; //data['weather'][0]['icon'];
            var humidityValueF = data.main.humidity;
            var windValueF = Math.floor(data.wind.speed);
            var forecastDateValueF = data.list[0].dt_txt;
            // var uvIndexValue = data.weather[0].main;   
            
            //HTML ID associating to the JSON values
            nameH.innerHTML = nameValueF;
            tempH.innerHTML = tempValueF + "°F";
            descH.innerHTML = descValueF;
            iconH.setAttribute("src", iconValueF);
            humidityH.innerHTML = humidityValueF + "%";
            windH.innerHTML = windValueF + " miles per hour";
            forecastDateF.inneerHTML = "Date: " + forecastDateValueF;
            // uvIndexH.innerHTML = uvIndexValue;
    })
    .catch(err => alert("Incorrect city name, please try again.  Or only provide the city, not state."))
})

*/



// var data = "";
// var temp = Math.floor(data.main.temp);
// var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
// var weather = data.weather[0].main;
// var name = data.name;
 


// ------------------------------------- Ajax functions to retrieve JSON - not used -------------------------------------



            //This function: gets the JSON data, creates variables to hold JSON data, then associates them for the HTML ID's
                //add imperial to URL
                //original URL without farenheit: $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=002e1e79cccfda7d0bac3ab7d5597c0f", function(data){
                //$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID=002e1e79cccfda7d0bac3ab7d5597c0f", function(data){
// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + cityVar + "&units=imperial&APPID=" + apiKEYVar, function(data){
//         //1. validate you are receiving JSON data
//     console.log(data);
//         //create variable of icon (get details from JSON)
//         //2. var icon = "https://openweathermap.org/img/w/10d.png"s //to test the image URL
//         //3. add the icon detail from the JSON file
//     var tempIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
//         //console.log(icon);    //test for the icon URL, validate URLs resolves to an icon in the browser

//         //5. add the temperature variable found from the JSON data
//         //var tempNum = data.main.temp;
//         //8. remove the decimal
//     var tempNum = Math.floor(data.main.temp);
//         //7. add the temperature description variable found from the JSON data
//         //var weatherDescText = data.weather[0].description;
//     var weatherDescText = data.weather[0].main;
//         //9. add the city
//     var cityText = data.main.name;
//         //4. connect the <img class="icon"> to the .icon class through the source attribute with the icon variable
//     $('.iconID').attr('src', tempIcon);
//         //6. add the temp class and append the data
//     $('.tempID').append(tempNum);
//         //7. add the weather description
//     $('.descriptionID').append(weatherDescText);
//         //10. connect city data to HTML cityID
//     $('.cityID').append(cityText);
// });




