var stops_81=[]
var stops_82=["A lot/Upper Stop","Jessup/Pleasant Grove","Robrt Purcell Community Center","Jessup/Triphammer","Thurston/Balch Hall","Rockefeller Hall","Kenndy Hall","Bradfield Hall"]
$('#next_name').html('<h2>Route 82</h2>')
for (const iterator of stops_82) {
    $('#stop').append('<div class="stop_single"> <div class="circle"></div>			<div class="stop_name">	<h3>'+ iterator+'</h3>	</div></div>')
}