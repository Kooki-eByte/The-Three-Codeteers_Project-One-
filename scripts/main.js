$(document).ready(function () {
  // This is the main logic (event listeners and storing data and calling the functions for the APIs)

  // Get the current date for user
  let now = moment().format("LL");
  console.log("now", now);

  // hold the bool value of the check boxes (set to true in the beginning but can be switched to false if user unchecks the box)

  // Prevent the enter button from leading to a page not wanted
  $(document).on("submit", (event) => {
    event.preventDefault();
  });

  // When user presses enter they will start the chain of events
  $(document).on("submit", ".search-bar", () => {
    let cityName = $("#search").val();

    console.log(cityName);
    getMainForecast(cityName, isHotelAccepted, isRestaurantAccepted);
  });

  $(document).on("click", ".search-icon", () => {
    let cityName = $("#search").val();

    getMainForecast(cityName, isHotelAccepted, isRestaurantAccepted);
  });

  $("select").formSelect();
  let isHotelAccepted = $("select").formSelect($("#hotelOption")[0][0]);
  console.log("isHotelAccepted", isHotelAccepted);
  let isRestaurantAccepted = $("select").formSelect($("#restaurantOption"));
  console.log("isRestaurantAccepted", isRestaurantAccepted);
});
