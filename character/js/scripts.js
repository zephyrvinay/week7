$(document).ready(function() {
  $("form#character").submit(function() {
    event.preventDefault();
    var name = ($("#name1")).val();
    console.log(name);
  });
})    