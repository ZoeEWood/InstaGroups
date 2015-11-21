/* Zoe Wood * InstaGroupings * HW3 * November 19, 2015 */

/*var searchInstagram = function(query){

	var user = $("input[name='users']").val(); 
	var request = 'https://api.instagram.com/v1/users/search?q=' + encodeURIComponent(user) + '&access_token=1075336788.0a2acbd.98943cbf4457430c9ae361dfa590ee24'
	$.ajax({
  		type: "GET",
  		dataType: "jsonp",
		cache: false,
  		url: request,
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
}*/ 

/*document.getElementById('search-form').addEventListener('submit', function (e) {
	e.preventDefault(); 
	searchInstagram(document.getElementById('query').value);
}, false);*/

var parent = null; 
var newGroup = null; 
var groupCount = 0; 
var editButton = null; 
var buttonText; 

document.getElementById('addnew').onclick = function(){
	
	groupCount++; 
	parent = document.getElementById('parent'); 
	
	newGroup = document.createElement("div"); 
	newGroup.setAttribute("id", "group" + groupCount); 
	newGroup.setAttribute("className", "newGroup");
	parent.appendChild(newGroup); 
	newGroup.innerHTML = "Group " + groupCount;

	editButton = document.createElement("button"); 
	buttonText = document.createTextNode("Edit"); 
	editButton.appendChild(buttonText);  
	editButton.setAttribute("id", "edit" + groupCount); 
	editButton.setAttribute("className", "editButton"); 
	editButton.setAttribute("onClick", "getID(this.id)"); 
	parent.appendChild(editButton);

	return false; 
}; 

var buttonID = null; 
var subID = null; 
function getID(clicked_id){

	buttonID = clicked_id; 
	subID = buttonID.substr(4, 5); 
	alert(subID); 
}


/*
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
});*/ 
