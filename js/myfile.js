$(document).ready(function(){
	

$( "#line1" ).click(function() {
  $("#line1").addClass('actived');
  $("#line2").removeClass('actived');
	$("#line3").removeClass('actived');
	
$("#testboxes1").css('display','block');	
$("#testboxes2").css('display','none');
$("#testboxes3").css('display','none');		

});	
	

  
  

	
$( "#line2" ).click(function() {
	
	
  $("#line2").addClass('actived');
  $("#line1").removeClass('actived');
  	$("#line3").removeClass('actived');

$("#testboxes1").css('display','none');	
$("#testboxes2").css('display','block');
$("#testboxes3").css('display','none');			
	
});	
	
$( "#line3" ).click(function() {
	
	$("#line1").removeClass('actived');
	$("#line2").removeClass('actived');
  $("#line3").addClass('actived');
 
 $("#testboxes1").css('display','none');	
$("#testboxes2").css('display','none');
$("#testboxes3").css('display','block');		

  
});
	
	

  
	$( "div#box1" ).mouseover(function() {
  
  $( "div#box1 h4" ).css('color','white');
   $( "div#box1 p" ).css('color','white');
   
  
});


$( "div#box1" ).mouseout(function() {
  
  $( "div#box1 h4" ).css('color','black');
   $( "div#box1 p" ).css('color','black');
   
  
});
	
	
  
	$( "div#box2" ).mouseover(function() {
 
     $( "div#box2 h4" ).css('color','white');
   $( "div#box2 p" ).css('color','white');
  
});


$( "div#box2" ).mouseout(function() {
   
        $( "div#box2 h4" ).css('color','black');
   $( "div#box2 p" ).css('color','black');
  
});


$( "div#box3" ).mouseover(function() {
 
     $( "div#box3 h4" ).css('color','white');
   $( "div#box3 p" ).css('color','white');
  
});


$( "div#box3" ).mouseout(function() {
   
        $( "div#box3 h4" ).css('color','black');
   $( "div#box3 p" ).css('color','black');
  
});		
	

$( "div#box4" ).mouseover(function() {
 
     $( "div#box4 h4" ).css('color','white');
   $( "div#box4 p" ).css('color','white');
  
});


$( "div#box4" ).mouseout(function() {
   
        $( "div#box4 h4" ).css('color','black');
   $( "div#box4 p" ).css('color','black');
  
});	
 
	
});



