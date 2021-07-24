// var w=window.innerWidth;
// var h=window.innerHeight;
// $(".overall").css("width" , w);
// $(".overall").css("height" , h);

var option = document.querySelectorAll(".option");
var on_off = document.querySelector(".on-off");
//存储内容大盒子是否打开的信号


for (var num = 0; num < option.length; num++) {

    option[num].onclick = function control_option() {

        console.log(option);

        var content = $(this).parent().next();
        var experiment = $(this).parent().next().children(".experiment");
        var contentbox = $(this).parent().parent(".contentbox");

        // 因为按钮与内容放在了不同的盒子
        // 所以需要判断，并且找到，当前是要打开哪个内容
        var option_content = $(this).text();
        console.log(option_content);//输出发现已经获取到了，保存起来

        // var tf = false;

        // 打开内容大盒子
        function open() {

            $(content).animate({
                "height": "401px"
            }, 500);

            $(contentbox).animate({
                "height": "470px"
            }, 500);

            tf = true;
        };

        // 关闭内容大盒子
        function close() {

            $(content).animate({
                "height": "0px"
            }, 500);

            $(contentbox).animate({
                "height": "70px"
            }, 500);

            tf = false;
        };

        // 初始化内容小盒子页面方法
        function initialize() {
            $(experiment).css({
                "display": "none"
            });
            $(".option").css({
                "background": "rgb(255, 190, 130)"
            });
        }
        // 分别记录每个盒子是否打开已经打开
        // var experiment1 = false;
        // var experiment2 = false;
        // var experiment3 = false;
        // var experiment4 = false;


        // option_content == "experiment1"判断当前是要打开哪个内容
        if (option_content == "experiment1") {

            var x = $('.experiment1').css('display')

            if (x === 'none') {
                open();
                // 为了防止已经有别的页面打开了占用了空间，我们先初始化
                initialize();

                // 初始化后打开相应的盒子
                $(".experiment1").css({
                    "display": "block",
                    "background": "rgb(255, 137, 27)"
                });
                $(".option1").css({
                    "background": "rgb(255, 137, 27)"
                });
                console.log("开")
            } else if (x === 'block') {
                close();
                initialize();
                console.log("关")
            }

        } else if (option_content == "experiment2") {

            var x = $('.experiment2').css('display')

            if (x === 'none') {
                open();
                // 为了防止已经有别的页面打开了占用了空间，我们先初始化
                initialize();

                // 初始化后打开相应的盒子
                $(".experiment2").css({
                    "display": "block",
                    "background": "rgb(255, 137, 27)"
                });
                $(".option2").css({
                    "background": "rgb(255, 137, 27)"
                });
                console.log("开")
            } else if (x === 'block') {
                close();
                initialize();
                console.log("关")
            }

        } else if (option_content == "experiment3") {

            var x = $('.experiment3').css('display')

            if (x === 'none') {
                open();
                // 为了防止已经有别的页面打开了占用了空间，我们先初始化
                initialize();

                // 初始化后打开相应的盒子
                $(".experiment3").css({
                    "display": "block",
                    "background": "rgb(255, 137, 27)"
                });
                $(".option3").css({
                    "background": "rgb(255, 137, 27)"
                });
                console.log("开")
            } else if (x === 'block') {
                close();
                initialize();
                console.log("关")
            }

        } else if (option_content == "experiment4") {

            var x = $('.experiment4').css('display')

            if (x === 'none') {
                open();
                // 为了防止已经有别的页面打开了占用了空间，我们先初始化
                initialize();

                // 初始化后打开相应的盒子
                $(".experiment4").css({
                    "display": "block",
                    "background": "rgb(255, 137, 27)"
                });
                $(".option4").css({
                    "background": "rgb(255, 137, 27)"
                });
                console.log("开")
            } else if (x === 'block') {
                close();
                initialize();
                console.log("关")
            }

        }

    }

}



