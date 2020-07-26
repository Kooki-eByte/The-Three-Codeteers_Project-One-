// This is for the weather api only aspects of the website

function getMainForecast(queryUrl) {
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
