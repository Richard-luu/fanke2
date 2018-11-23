/*
 *****************************************************8轮播图*********************************************************
*/
var index = 0;
var timer = null;
var liSum = $(".bannerBox>li").length;

//页面加载完毕后
; $(function () {
    //自动轮播
    $(".bannerDisc>li").eq(index).stop().addClass("current").siblings().removeClass("current");
    timer = setInterval(autoPlay, 1500);

    //鼠标进入
    $(".banner").unbind("mouseenter").on("mouseenter", function () {
        clearInterval(timer);

        //点击下一张
        $(".banBtnRight").unbind('click').click(function () {//也可以用unbind()
            //这里得先加后再判断index
            index++;
            if (index == liSum) {
                index = 0;
            }
            $(".bannerBox>li").eq(index).stop().fadeTo("slow", 1).siblings().fadeTo("fast", 0);
            $(".bannerDisc>li").eq(index).stop().addClass("current").siblings().removeClass("current");
        });

        //点击上一张
        $(".banBtnLeft").unbind('click').click(function () {//也可以用unbind()
            //这里得先判断后再计算index
            if (index == 0) {
                index = liSum;
            }
            index--;
            $(".bannerBox>li").eq(index).stop().fadeTo("slow", 1).siblings().fadeTo("fast", 0);
            $(".bannerDisc>li").eq(index).stop().addClass("current").siblings().removeClass("current");
        });

        //下标点击
        //$("ol>li").bind('click').on("click", function () {//也可以用unbind()
        $(".bannerDisc>li").unbind("mouseenter").on("mouseenter", function () {
            index = $(this).index();
            $(".bannerBox>li").eq(index).stop().fadeTo("slow", 1).siblings().fadeTo("fast", 0);
            $(".bannerDisc>li").eq(index).stop().addClass("current").siblings().removeClass("current");
        });
    });

    //鼠标移出
    $(".banner").on("mouseleave", function () {
        timer = setInterval(autoPlay, 1500);
    });

    //调用回到顶部
    ToTop();
    //调用用户登录
    UserLogin();
})
//轮播移动方法
function autoPlay() {
    index++;
    index = (index == liSum) ? 0 : index;
    $(".bannerBox>li").eq(index).stop().fadeTo("slow", 1).siblings().fadeTo("fast", 0);
    $(".bannerDisc>li").eq(index).stop().addClass("current").siblings().removeClass("current");
};


/*
**********************************************************回到顶部*******************************************
*/
function ToTop() {
    $(".BlackTop").unbind('click').on("click", function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
        return false;
    });
}

/*
 ******************************************用户登陆******************************  可以存到storage！！！！********
 */

function UserLogin() {
    // var str = (decodeURI(decodeURI(window.location.href)).split("?")[2]).split('=')[1].trim().match(reg).join('');
    var str = (decodeURI(decodeURI(window.location.href))).split("=")[1];
    if (str) {//得先判断存在才可以操作
        var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
        str = str.trim().match(reg).join('');
        //获取存储的数据
        var newMyShopJson = localStorage.getItem(str + "myShopJson");
        newMyShopJson = JSON.parse(newMyShopJson); //转为JSON
        if (newMyShopJson) {
            var a = 0;
            for (var i = 0; i < newMyShopJson.length; i++) {
                if (newMyShopJson[i].userName == str) {
                    a += newMyShopJson[i].number;
                }
                $('#carNum').text("(" + a + ")");
            }
        }
        $("#loginUserName").text(str);
        $("#quietLogin").text("退出登录");
        $('#replaceUser').text('更换用户');
        $('#replaceUser').attr('href', 'html/login.html');
        $("#quietLogin").attr('href', 'index.html');
    }
}

// ; (function UserLogin() {
//封装id选择器
//function $id(id) {
//    return document.getElementById(id);
//}
//     var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
//     var str = (decodeURI(decodeURI(window.location.href))).split('=')[1].trim().match(reg);
//     if (str) {
//         $id('loginUserName').innerText = str.join('');
//         $id('quietLogin').innerText = '退出登录';
//         $id('replaceUser').innerText = '更换用户';
//         $id('replaceUser').setAttribute('href', 'html/login.html');
//         $id('quietLogin').setAttribute('href', 'index.html');
//     }
// })();

/*
******************************  商品点击   ***************************** 可以存到storage！！！！********
*/
// ; $(function () {
//     $('#toGoods').on('click', function () {
//         var str = $.trim(decodeURI(decodeURI(window.location.href)).split("=")[1]);
//         if (str) {
//             location.href = "html/goods.html?userName=" + str;
//         }
//     });
// });



/*
*********************************   去我的购物车    ******************************
*/
; $('#toMyCar').on('click', function () {
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[1]);
    var userName = 0;
    if (str) {
        var str2 = str.split('=')[1];
        if (str2) {
            var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
            var str3 = str2.trim().match(reg);
            if (str3) {
                userName = str3.join('');
            }
        }
    }
    window.location.href = encodeURI(encodeURI("html/shopping.html?userName=" + userName));
});