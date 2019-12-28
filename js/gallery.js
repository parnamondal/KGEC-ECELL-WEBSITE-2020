   $(document).ready(function()
{
    $(".item").find("img").css("transition", "transform 250ms ease-in-out");

    $(".item").hover(    
        // Handler for mouseenter
        function()
        {
            $(this).find("img").css("transform", "scale(1.2)");
        },
        // Handler for mouseleave
        function()
        {
            $(this).find("img").css("transform", "scale(1)");
        }
    );
});