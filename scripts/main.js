var UserText;
var myButton;

var image;

$(document).ready(function(){
  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  7000);
	UserText = document.querySelector('#usermessage');
		 myButton = document.querySelector('#nameuser');
		 deleteuserbutton = document.querySelector('#deleteuser');
		




if(localStorage.getItem('name')) {
  var storedName = localStorage.getItem('name');
  UserText.innerHTML = "Welcome,&nbsp;" + storedName;
  $('#deleteuser').show();
}else{
	$('#deleteuser').hide();
}

var setUserName = function(){
var myName = prompt('Please enter your name.');
localStorage.setItem('name', myName)
UserText.innerHTML = "Welcome, " + myName;
}


myButton.addEventListener('click', function(){
    setUserName()
}, false);
deleteuserbutton.addEventListener('click', function(){
     localstorage.deleteItem("name");
 UserText.innerHTML = "Welcome";
 $('#deleteuser').hide();
}, false);
});





