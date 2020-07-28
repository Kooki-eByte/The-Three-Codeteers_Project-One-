// This is the main logic (event listeners and more)
// Weather api info
let cityName = "boston";
let queryUrlMain =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=b69a42c83210378fa102751081b2696f";
getMainForecast(queryUrlMain);

// Hotel api info
let settings = {
  async: true,
  crossDomain: true,
  url:
    "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" +
    cityName,
  method: "GET",
  headers: {
    "x-rapidapi-host": "hotels4.p.rapidapi.com",
    "x-rapidapi-key": "5b3926684fmshb888e3231348c52p1496d1jsn3859b4010f0d",
  },
};
getHotelInfo(settings);

// Zomato api info
// apikey = bffa959245d269c69eb15660012c5300
let zomatoSettings = {
  async: true,
  crossDomain: true,
  url: "https://developers.zomato.com/api/v2.1/geocode?lat=40.74&lon=-74.00",
  method: "GET",
  headers: {
    Accept: "application/json",
    "user-key": "bffa959245d269c69eb15660012c5300",
  },
};
getRestaurantInfo(zomatoSettings);
