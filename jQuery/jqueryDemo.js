if (jQuery){
    alert("jQuery Loaded!");
}
else {
    alert("No jQuery");
}

//gives divs purple background
$("div").css("background", "purple");


//selects tags with class of "highlight" and changes their width
$(".highlight").css("width", "200px");

//selects tags with id of "third" and gives it a purple border
$("#third").css("border", "2px solid orange");


//selects first div and changes its font color
$("div:first-of-type").css("color", "pink");