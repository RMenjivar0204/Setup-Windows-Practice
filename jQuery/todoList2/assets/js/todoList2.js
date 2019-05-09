// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


// Click on X to delete Todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});



$("input[type='text']").on("keypress", function(e){
    if(e.which === 13){
        // Grabbing New Todo Text from Input
        var todoText = $(this).val();
        $(this).val("");
        // Create New li and Add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(100);
});