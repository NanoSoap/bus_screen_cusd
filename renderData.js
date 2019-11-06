// In this file I'm going to get bus arrival data from the TCAT API and display it
// on an html page

// render data into html
// msg is JSON data from API
function render(msg) {
    departures = []
    for (let route of msg[0].RouteDirections) {
        for (let departure of route.Departures) {
            eta = new Date(departure.ETALocalTime)
            arrival =  eta.getMinutes() - (new Date()).getMinutes() // current time minus arrival
            name = departure.Trip.InternalSignDesc
            routeId = route.RouteId
            departures.push({arrival: arrival, name:name, routeId:routeId})
            
        }

    }
    console.log(departures);
    sortedDepartures = departures.sort(function(a, b) { return a.arrival - b.arrival; })
    for (let dep of sortedDepartures) {
        if (dep.arrival > 0) {
            $('#time_info').append("<div class='time_info_sub'><p>" + dep.arrival + " min</p></div>");
            $("#serv_info").append("<div class='serv_info_sub'><p>" + dep.routeId + "</p></div>");
            $('#dest_info').append('<div class="dest_info_sub"><h5>' + dep.name + ' </h5></div>');
        }
    }
}

function renderTimetable() {
    // header auth token from TCAT
    var token = 'Bearer e5159b89-86c1-3cca-8412-59de037c674b';

    $.ajax({
      url: 'https://gateway.api.cloud.wso2.com:443/t/mystop/tcat/v1/rest/StopDepartures/Get/165',
      type: 'GET',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", token);
      },
      success: render
    });
  }


// when the document is loaded render the timetable
$(document).ready(renderTimetable)

