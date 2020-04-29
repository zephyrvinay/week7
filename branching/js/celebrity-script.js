$(document).ready(function(){
  $("form#celebrity").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val(); 
     
    if (gender === 'male' && age > 26) {
      $("#match").text("jessica alba");
      $("#result").show();
    } else if (gender === 'female' && age > 26){
      $("#match").text("Rick Sanchez");
      $("#result").show();
    } else {
      $("#match").text("Morty");
      $("#result").show();
    }
    event.preventDefault();
    //adding a comment to test rebase

  });
});