//business logic
  function Places(city, country, year) {
    this.city = city;
    this.country = country;
    this.year = year;
  }
  Places.prototype.full = function() {
  return this.city + " " + this.country + "" + this.year;
}

  // user interface logic
  $(document).ready(function() {
    $("form#new-places").submit(function(event) {
      event.preventDefault();

      var inputtedcity = $("input#new-city").val();
      var inputtedcountry = $("input#new-country").val();
        var inputtedyear = $("input#new-year").val();

      var newplaces = new Places(inputtedcity, inputtedcountry, inputtedyear);

     $("ul#places").append("<li><span class='places'>" + newplaces.full() + "</span></li>");
      $(".places").last().click(function() {
          $("#show-information").show();
          $("#show-information h2").text(newplaces.country);
          $(".city-name").text(newplaces.city);
          $(".country-name").text(newplaces.country);
          $(".year-name").text(newplaces.year);
        });

      $("input#new-city").val("");
      $("input#new-country").val("");
      $("input#new-year").val("");
    });
  });
