$(document).ready(function() {
    getTimetable();
    //runClock();
	// console.log(data)
	// data[0].RouteDirections;
	// for (let route of data[0].RouteDirections) {
	// 	$("#serv_info").append("<p>" + route.RouteId + "</p>");
	// }
})


function runClock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    year=today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    
    $("#clock").html(h + ":" + m + ":" + s);
    
    $("#date").html(year+'/'+today.getMonth()+'/'+today.getDate());
    var t = setTimeout(runClock, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}