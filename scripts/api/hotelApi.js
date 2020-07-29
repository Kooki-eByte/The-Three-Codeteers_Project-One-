function getHotelInfo(city) {
  // Hotel api info
  let settings = {
    async: true,
    crossDomain: true,
    url:
      "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" +
      city,
    method: "GET",
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": "5b3926684fmshb888e3231348c52p1496d1jsn3859b4010f0d",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
