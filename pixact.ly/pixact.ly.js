javascript:(function(){
    var $ = jQuery,
        container = $("#height-width");

    var cheat_square = $("#user-rect"),
        cheat_objective_w,
        cheat_objective_h,
        mousemove_handler = function(event){
            var h = cheat_square.outerHeight(),
                w = cheat_square.outerWidth();

            if(w == cheat_objective_w && h == cheat_objective_h){
              cheat_square.css("background-color", "rgba(50,210,50,0.5)");
            }
            else{
                cheat_square.css("background-color", "rgba(109, 207, 246, 0.2)");
            }

        };

    var values = container.find(".value");


    $("body").on("mousedown", "#canvas", function(){
            cheat_square = $("#user-rect");
            cheat_objective_w = parseInt(values[0].innerHTML, 10);
            cheat_objective_h = parseInt(values[1].innerHTML, 10);

            $("#system-rect")
                .css("width", cheat_objective_w + "px")
                .css("height", cheat_objective_h + "px")
                .addClass("marching-ants")
                .css("opacity", 1);
                



            $("body").on("mousemove.cheat", "#canvas", mousemove_handler);
        })
        .on("mouseup", function(){
            $("body").off("mousemove.cheat", "#canvas");
        });

})();void(0);
