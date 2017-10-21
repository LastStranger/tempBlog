$("ul li").on({
    mouseover:function () {
        $(this).css({
            "border-radius": "5px",
            "transform": "scale(1.2)",
            "background": "darkgray",
            "transition": "all 1s"
        })
    },
    mouseout:function () {
        $(this).css({
            "transform": "scale(1)",
            "background": "none",
            "transition": "all 1s"
        })
    }

});


    var click = setInterval(function () {
        var time = new Date();


        $("#click").html(time.toLocaleTimeString())
            .css({
                "color":"#"+parseInt(10*Math.random())+parseInt(10*Math.random())+parseInt(10*Math.random()),
//                "color": "orange",
                "transition": "color 3s linear"
            });
    }, 1000);