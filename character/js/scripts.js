$(document).ready(function() {
  $("form#character").submit(function() {
    event.preventDefault();
    var name = ($("#name1")).val();
    console.log(name);
    var eveningInput = $("input:radio[name=activity]:checked").val();
    console.log(eveningInput);

    if (eveningInput === "chair") { 
      var result = "Ron Swanson";
    } else if (eveningInput === "club"){
      var result = "Tom haverford";
    } else if (eveningInput === "binders"){
      var result = "Leslie Knope";
    }  
      
    $("#output").text(result);

  });
})    