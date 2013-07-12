
var options = ["bio","blog","portfolio","webpresence"];

$(document).ready( function() {
  $("li.header").click( function(event) {
    
    var option = $(this).attr("class").split(/\s+/)[1];
    
    $("#folder").animate({
      height:"800px"
      }, 300 );
    $("#content").animate({
      height: "0px" 
      }, 300, function() { 
        var i = 0;
        for (i=0;i<=4;i++)
        {
          $("#" + options[i] ).hide();
        }
        $("#" + option).show(); 
      }
    );
      
    finishAnimation(option);
  });
});

function finishAnimation(option) {
/*
  var i = 0;
  for (i=0;i<=4;i++)
  {
    $("#" + options[i] ).hide();
  }
  */
  //$("#" + option).show();
  $("#content").animate({
    height: "800px" 
    }, 300);
  $("#folder").animate({
    height:"20px"
    }, 300);
}
