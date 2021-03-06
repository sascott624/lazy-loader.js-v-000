"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var divRow = '<div class="row">';
  $.each(carsJSON, function(index, car){
//      $('#cars div.row:last').append(
        divRow += '<div class="col-md-4 car">';
        divRow += '<h2>' + car.Make + '</h2>';
        divRow += '<p><strong>Model:</strong> ' + car.Model + '</p>';
        divRow += '<p><strong>Year:</strong> ' + car.Year + '</p>';
        divRow += '</div>';
//      "</div>");
  });
  divRow += '</div>'
  return divRow;
}


function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var result = formatCars(carsJSON);
  $('#cars').append(result);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var pageNumber = 3;
  var url = baseUrl + pageNumber + '/3';
  var pageNumber = pageNumber + 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    }
  });
}
