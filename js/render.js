var click = setInterval(function () {
    var time = new Date();


    $("#click").html(time.toLocaleTimeString())
        .css({
            "color":"#"+parseInt(10*Math.random())+parseInt(10*Math.random())+parseInt(10*Math.random()),
//                "color": "orange",
            "transition": "color 3s linear"
        });
}, 1000);


$(".update ul li").on({
    mouseover:function () {
        var temp = new Date().getTime()%2;
// var angel = temp%2
        var angel = temp? "rotate(5deg)": "rotate(-5deg)";
        $(this).css({
            "border-radius": "5px",
            "transform": "scale(1.2)" + angel,
            "transform-origin": "20% 50%",
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


$(".nav ul li a:not(.active)").on({
    mouseover:function () {
//         var temp = new Date().getTime()%2;
// // var angel = temp%2
//         var angel = temp? "rotate(5deg)": "rotate(-5deg)";
        $(this).css({
            "border-radius": "5px",
            "transform": "scale(1.3)",
            "transform-origin": "20% 50%",
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