$(function ($) {
    layui.use('element', function () {
        var element = layui.element;
        $(".con_1").click(function () {
            let con_1 = `<img src="img/1.png" alt="">`
            $(".floor_img").html(con_1)
        })
        $(".img_1").click(function () {
            let img_1 = `<img src="img/1.png" alt="">`
            $(".floor_img").html(img_1)
        })
        $(".img_2").click(function () {
            let img_1 = `<img src="img/2.png" alt="">`
            $(".floor_img").html(img_1)
        })
        $(".img_3").click(function () {
            let img_1 = `<img src="img/3.png" alt="">`
            $(".floor_img").html(img_1)
        })
        $(".img_4").click(function () {
            let img_1 = `<img src="img/4.png" alt="">`
            $(".floor_img").html(img_1)
        })
        $("#dd1").click(function (e) {
            $("#dd1 .nav_right").toggle();
            $("#dd2 .nav_right").hide();
            $("#dd3 .nav_right").hide();
            $("#dd4 .nav_right").hide();
        });
        $("#dd2").click(function (e) {
            $("#dd2 .nav_right").toggle();
            $("#dd1 .nav_right").hide();
            $("#dd3 .nav_right").hide();
            $("#dd4 .nav_right").hide();
        });
        $("#dd3").click(function (e) {
            $("#dd3 .nav_right").toggle();
            $("#dd2 .nav_right").hide();
            $("#dd1 .nav_right").hide();
            $("#dd4 .nav_right").hide();
        });
        $("#dd4").click(function (e) {
            $("#dd4 .nav_right").toggle();
            $("#dd1 .nav_right").hide();
            $("#dd3 .nav_right").hide();
            $("#dd2 .nav_right").hide();
        });

    });

})