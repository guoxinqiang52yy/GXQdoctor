$(function ($) {
    layui.use(['layer', 'laypage', 'laytpl', 'flow','carousel'], function () {
        var layer = layui.layer
        var laypage = layui.laypage;
        var laytpl = layui.laytpl
        var carousel = layui.carousel;


        $(".layui-col-md5 .clumn_1").click(function (e) {
            var title,htmlText;
            if (e.target.id == 1) {
                title = "儿童休闲区房间展示"
                htmlText = $('#modelUser').html()
            }
            if (e.target.id == 2) {
                title = "放射科房间展示"
                htmlText = $('#modelUser1').html()

            }
            clumn_1Model(title,htmlText)
        })
        function clumn_1Model(title,html) {
            layer.open({
                type: 1,
                anim: 1,
                title: title,
                area: ['80%', '100%'],
                offset: 'center',
                content: html,
                success: function (layero, dIndex) {
                    carousel.render({
                        elem: '#test1'
                        ,width: '100%' //设置容器宽度
                        ,height:"100%"
                        ,arrow: 'always' //始终显示箭头
                    });
                }
            })
        }


    })
})