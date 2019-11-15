$(document).ready(function(){
/*
  //hides all panels when a panel is clicked
$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
   })
*/
 
//adds  a fadeTo to all panels when a panel is clicked
    $(".theButton").click(function(){
        var panelText = $(this).css("background-color");
        $("#panel .container").siblings().fadeTo(1000, .5);
        $(this).addClass("makeBorder");
        $(".superButton").css("color", panelText)
    });

//restores all panels to full opacity when reset button clicked 

$(".superButton").click(function(){
      $(".theButton").removeClass("makeBorder");	
      $("#panel .container").siblings().fadeTo(1000,1);
  
   });


/*
 $(".theButton").mouseenter(function() {
    $(this).addClass("black");
 });

 $(".theButton").mouseleave(function() {
    $(this).removeClass("black");
 });
*/




});