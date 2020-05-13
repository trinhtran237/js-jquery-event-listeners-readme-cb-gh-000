//define functions here
function getIt (){
  $("p").on("click",function(){
    alert("Hey!")
  })
}
function frameIt(){
  $("img").on("load",function (){
    $("img").addClass("tasty");
  }
  )
}
$(document).ready(function(){

// call functions here
$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
});
