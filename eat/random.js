    $(function () {
    var run = 0,
        heading = $(".middleSay"),
        timer,
        food,
        lablePeople = 0;
    $("#start").click(function () {
        var list = $("#list").val().replace(/( |,|，)+/g, " ").replace(/^ | $/g, "").split(" ");
        var listLady = [];
        if ($('.shakeBody').length) {
            // listLady=['苏浙汇','雕爷牛腩','麒麟雅苑','盘古大观西餐','满汉全席','全聚德','老北京','东来顺','辽宁大厦','白家大院','香格里拉'];
            listLady = ['京味家常','蜀香坊','麻辣香锅','每日精选','亚洲风情','麻辣烫','东北老厨','源蒸原味','赛百味','胡椒厨房','喜八方水饺','弥勒米线','滇峰对决','面鲜森','有饼痴','易间','盒饭','煎饼','罗森','奶茶','你太幸运了再来一次吧','减肥不吃了']
        }
        var listNew = list.concat(listLady);
        var m = list.length,
        n=listLady.length;

        if (!run) {
            heading.html("吃啥呢？正在选择...");
            $(this).val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * (m+n));
                    food = listNew[r - 1];
                if (r > m ) {
                    lablePeople = 1;
                    if (r == m + 1) {
                        lablePeople = 2;
                    }
                }else{
                    lablePeople = 0;
                }
                $("#what").html(food);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(food).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 100);
            run = 1;
        } else {
            if (lablePeople == 1) {
                // heading.html(food+"！吃什么呢？吃这个么？那好吧，<b>为了让你开心，下次，下次好吧</b>"+" 下次，下次就要吃这个了。主要有点儿贵...");
                heading.html(food+"  ！就吃这个吧，不犹豫了");
                lablePeople = 0;
            }else if (lablePeople == 2) {
                // heading.html(food+"！吃这个干吗，咋吃？怎么吃？那好吧，<b>为了让你开心，下次吧</b>"+"主要这次吃这个太贵了");
                heading.html(food+"！吃这个吗，这个行么？<b>要不下次吧</b>");
                lablePeople = 0;
            }else{
                heading.html("吃啥？这个？就这个了吧！");
            }
            $(this).val("不行，换一个");
            clearInterval(timer);
            run = 0;
        };
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});