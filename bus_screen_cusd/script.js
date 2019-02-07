$(document).ready(function() {
	var data = getTimetable();
	console.log(data)
	data[0].RouteDirections;
	for (let route of data[0].RouteDirections) {
		$("#serv_info").append("<p>" + route.RouteId + "</p>");
	}
})


