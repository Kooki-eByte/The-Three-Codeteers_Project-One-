// This is the main logic (event listeners and storing data and calling the functions for the APIs)
// Weather api info

// getMainForecast(queryUrlMain);

// // Hotel api info
// let settings = {
//   async: true,
//   crossDomain: true,
//   url:
//     "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" +
//     cityName,
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "hotels4.p.rapidapi.com",
//     "x-rapidapi-key": "5b3926684fmshb888e3231348c52p1496d1jsn3859b4010f0d",
//   },
// };
// getHotelInfo(settings);

// // Zomato api info
// // apikey = bffa959245d269c69eb15660012c5300
// let zomatoSettings = {
//   async: true,
//   crossDomain: true,
//   url:
//     "https://developers.zomato.com/api/v2.1/geocode?lat=" +
//     lat +
//     ".74&lon=" +
//     lon,
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//     "user-key": "bffa959245d269c69eb15660012c5300",
//   },
// };
// getRestaurantInfo(zomatoSettings);

// Prevent the enter button from leading to a page not wanted
$(document).on("submit", (event) => {
  event.preventDefault();
});

// When user presses enter they will start the chain of events
$(document).on("submit", ".search-bar", () => {
  let cityName = $("input").val();
  console.log("cityName is", cityName);
});
