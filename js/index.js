var ids;
$(function ($) {
    layui.use(['element','carousel'], function () {
        var element = layui.element;
        var carousel = layui.carousel;
        //建造实例
        $(".content_img").hide()
        function localIndex() {
            var url = location.search
            var theRequest = new Object()
            if (url.indexOf('?') != -1) {
                var str = url.substr(1)
                var strs = str.split('&')
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
                }
            }
            return theRequest.id
        }
        var stringHtml = ''
        if (localIndex() != undefined) ids = localIndex()
        $(".nav_1").hide()
        //一楼
        if (ids == 1) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/一楼检验科.jpg" alt=""></div>              
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 4) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/一楼放射科zs.jpg" alt=""></div>
                                <div><img src="img/pics/一楼放射科zs1.jpg" alt=""></div>                
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 3) {
            stringHtml =  `<div carousel-item>
                                 <div><img src="img/pics/一楼儿童休闲区.jpg" alt=""></div>                
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 2) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/一楼X光.jpg" alt=""></div>              
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        //二楼
        if (ids == 16) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/二楼孕期筛查.jpg" alt=""></div>              
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 17) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/二楼孕期保健.jpg" alt=""></div>              
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 18||ids == 19||ids == 20) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/二楼登记室男检室女检室1.jpg" alt=""></div>         <div><img src="img/pics/二楼登记室男检室女检室2.jpg" alt=""></div>
                                <div><img src="img/pics/二楼登记室男检室女检室3.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 21) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/二楼盆底功能障碍诊疗门诊1.jpg" alt=""></div>   <div><img src="img/pics/二楼盆底功能障碍诊疗门诊2.jpg" alt=""></div>  </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 22) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/二楼计划生育门诊1.jpg" alt=""></div>              <div><img src="img/pics/二楼计划生育门诊2.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 23) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/孕期保健1.jpg" alt=""></div>              <div><img src="img/pics/孕期保健2.jpg" alt=""></div>
                                <div><img src="img/pics/孕期保健3.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 24) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/孕期筛查1.jpg" alt=""></div>              <div><img src="img/pics/孕期筛查2.jpg" alt=""></div>
                                <div><img src="img/pics/孕期筛查3.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 25) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/二楼妇科检查室1.jpg" alt=""></div>              <div><img src="img/pics/二楼妇科检查室2.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 26) {
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/二楼孕期体重管理.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        //三楼
        if (ids == 40){
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/三楼儿童保健.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 41){
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/三楼亲子乐园.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 42){
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/三楼心理行为发育评估室.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 43){
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/三楼测量室.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 44){
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/三楼共享空间.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 45){
            stringHtml =  `<div carousel-item>
                                <div><img src="img/pics/三楼口腔科1.jpg" alt=""></div>
                                <div><img src="img/pics/三楼口腔科2.jpg" alt=""></div>
                                <div><img src="img/pics/三楼口腔科3.jpg" alt=""></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 46){
            stringHtml =  `<div carousel-item>
                                <div><p>智测室</p></div>
                                <div><p>智测室</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 47){
            stringHtml =  `<div carousel-item>
                                <div><p>高危儿门诊</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 48){
            stringHtml =  `<div carousel-item>
                                <div><p>口腔保健</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 49){
            stringHtml =  `<div carousel-item>
                                <div><p>亲子乐园</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 50){
            stringHtml =  `<div carousel-item>
                                <div><p>儿童保健</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 51){
            stringHtml =  `<div carousel-item>
                                <div><p>心理行为发育评估室</p></div>
                                <div><p>心理行为发育评估室</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 52){
            stringHtml =  `<div carousel-item>
                                <div><p>白内障筛查 眼保健</p></div>
                                <div><p>白内障筛查 眼保健</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 53){
            stringHtml =  `<div carousel-item>
                                <div><p>髋关节筛查</p></div>
                                <div><p>髋关节筛查</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        if (ids == 54){
            stringHtml =  `<div carousel-item>
                                <div><p>听力保健</p></div>
                             </div>`
            $(".content_img").show()
            $(".layui-carousel").html(stringHtml)
        }
        //负一楼

        if (ids>4&&ids<16){
            let img_1 = `<img src="img/1.png" alt="">`
            $(".floor_img").html(img_1)
        }
        if (ids>26&&ids<40){
            let img_1 = `<img src="img/2.png" alt="">`
            $(".floor_img").html(img_1)
        }
        if (ids>54&&ids<65){
            let img_1 = `<img src="img/3.png" alt="">`
            $(".floor_img").html(img_1)
        }
        if (ids>64){
            let img_1 = `<img src="img/4.png" alt="">`
            $(".floor_img").html(img_1)
        }
        carousel.render({
            elem: '#test1'
            ,width: '100%' //设置容器宽度
            ,height:"100%"
            ,arrow: 'always' //始终显示箭头
            //,anim: 'updown' //切换动画方式
        });
        $(".con_1").click(function () {
                let con_1 = `<div class="nav_1">
                <div class="nav_1_img">
                    <img src="img/doctor.png" alt="">
                </div>
                <div class="nav_1_datils">
                    <p>天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区</p>
                    <p>天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区</p>
                    <p>天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区</p>
                </div>
            </div>`
                $(".floor_img").html(con_1)
            })
        $(".con_2").click(function () {
            let con_2 = `<div class="nav_1">
                            <div class="nav_1_datils">
                                <p>天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区</p>
                                <p>天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区</p>
                                <p>天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区天津市河西区</p>
                            </div>
                        </div>`
            $(".floor_img").html(con_2)
        })
        $(".con_3").click(function () {
            let img_1 = `<img src="img/1.png" alt="">`
            $(".floor_img").html(img_1)
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