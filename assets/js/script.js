
//date
var dateVar = new Date();
document.getElementById("dateID").innerHTML = dateVar;

//Reference: connecting to open API Open Weather
//This function: gets the JSON data, creates variables to hold JSON data, then associates them for the HTML ID's
//add imperial to URL
//original URL without farenheit: $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=002e1e79cccfda7d0bac3ab7d5597c0f", function(data){
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID=002e1e79cccfda7d0bac3ab7d5597c0f", function(data){
    //1. validate you are receiving JSON data
    console.log(data);
    //create variable of icon (get details from JSON)
    //2. var icon = "https://openweathermap.org/img/w/10d.png"s //to test the image URL
    //3. add the icon detail from the JSON file
    var tempIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //console.log(icon);    //test for the icon URL, validate URLs resolves to an icon in the browser

    //5. add the temperature variable found from the JSON data
    //var tempNum = data.main.temp;
    //8. remove the decimal
    var tempNum = Math.floor(data.main.temp);

    //7. add the temperature description variable found from the JSON data
    //var weatherDescText = data.weather[0].description;
    var weatherDescText = data.weather[0].main;

    //4. connect the <img class="icon"> to the .icon class through the source attribute with the icon variable
    $('.iconID').attr('src', tempIcon);
    //6. add the temp class and append the data
    $('.tempID').append(tempNum);
    //7. add the weather description
    $('.descriptionID').append(weatherDescText);

});




