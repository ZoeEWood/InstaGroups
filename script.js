/* Zoe Wood * InstaGroupings * HW3 * November 19, 2015 */

/*test: getting popular images*/

var d = 0;

var searchInstagram = function(query){

	var user = $("input[name='users']").val(); 

}

document.getElementById('search-form').addEventListener('submit', function (e) {
	e.preventDefault(); 
	searchInstagram(document.getElementById('query').value);
}, false); 

$.ajax({
  type: "GET",
  dataType: "jsonp",
	cache: false,
  url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1075336788.0a2acbd.98943cbf4457430c9ae361dfa590ee24",
  success: function(data) {
  		for(var i = 0; i < data["data"].length; i++)
  		{
  			var img = new Image(); 
  			img.src = data["data"][i]["standard_resolution"];
  			//img.src = data["data"][i]["user"]["profile_picture"]; 
  			$("#put").append(img); 

  			//$("#put").append(data["data"][i]["user"]["profile_picture"]);
  		}
	}
});

