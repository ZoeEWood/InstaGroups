$.ajax({
	type: "GET", 
	dataType: "jsonp",
	cache: false, 
	url: "https://api.instagram.com/v1/media/popular?access_token=1075336788.0a2acbd.98943cbf4457430c9ae361dfa590ee24",
	success: function(data){
		for(var i = 0; i < 6; i++){
			 $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a></li>"); 
		}
	}
});