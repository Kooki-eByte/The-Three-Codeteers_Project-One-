function getRestaurantInfo(settings) {
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
