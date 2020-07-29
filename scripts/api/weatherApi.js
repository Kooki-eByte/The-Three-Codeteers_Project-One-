// This is for the weather api only aspects of the website

function getMainForecast(city, isHotel, isRestaurant) {
  let queryUrlMain =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=b69a42c83210378fa102751081b2696f";

  $.ajax({
    url: queryUrlMain,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}

// grab 5 day forecast

// display weather info here

// check if the isHotel and/or isRestaurant are true or false

// getHotelInfo(city);
// getRestaurantInfo(lat, lon);
