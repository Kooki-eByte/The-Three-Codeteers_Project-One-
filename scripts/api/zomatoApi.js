function getRestaurantInfo(lat, lon) {
  // Zomato api info
  let zomatoSettings = {
    async: true,
    crossDomain: true,
    url:
      "https://developers.zomato.com/api/v2.1/geocode?lat=" +
      lat +
      "&lon=" +
      lon,
    method: "GET",
    headers: {
      Accept: "application/json",
      "user-key": "bffa959245d269c69eb15660012c5300",
    },
  };

  $.ajax(zomatoSettings).done(function (response) {
    console.log(response);
  });
}
