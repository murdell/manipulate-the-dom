$(document).ready(function(){
 /*
  //hides all panels when a panel is clicked
$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
   })
*/
 
//adds  a fadeTo to all panels when a panel is clicked
$(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5);
   });

//restores all panels to full opacity when reset button clicked 

$(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);	
   });

 $(".theButton").mouseenter(function() {
    $(this).addClass("black");
 });

 $(".theButton").mouseleave(function() {
    $(this).removeClass("black");
 });



});