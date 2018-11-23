/*
***********************选择登录方法*************************
*/
; $(function () {
    $('#chooseLogin').unbind('click').on('click', function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName.toLowerCase() == 'li') {
            $(target).addClass('on').siblings().removeClass('on');
            if ($(target).index() == 0) {
                $(".mainLoginIn").show();
                $(".quickLogin").hide();
            }
            else if ($(target).index() == 1) {
                $(".mainLoginIn").hide();
                $(".quickLogin").show();
            }
        };
    });
    if ($(".mainLoginIn").show()) {
        login();
    }
});


/*
  ******************************** 普通登录****************************************
 */
function login() {
    //var reg = /[a-zA-Z]|\w{1,20}$/;//中文/^(\w|[\u4e00-\u9fa5]){2,20}$/;
    registerUserLogin();
    //用户名
    var inputtextcolor1 = $("#inputtextcolor1");
    var tipstwo = $(".tipstwo");
    inputtextcolor1.on("focus", function () {
        if (tipstwo.show()) {
            tipstwo.hide();
        }
    });
    inputtextcolor1.on("blur", function () {
        var reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{2,20}$/;
        var str = inputtextcolor1.val();
        if ((str == '') || (!reg.test(str))) {
            tipstwo.show();
        }
        else {
            tipstwo.hide();
        }
    });

    //密码
    var tips2 = $(".tips2");
    var inputtextcolor2 = $("#inputtextcolor2");
    inputtextcolor2.on("focus", function () {
        if (tips2.show()) {
            tips2.hide();
        }
    });
    inputtextcolor2.on("blur", function () {
        if (inputtextcolor2.val() == '') {
            tips2.show();
        }
        else {
            tips2.hide();
        }
    });

    //登录   可以存到storage！！！！********
    var mainLoginBtn = $(".mainLoginBtn");
    var tips1 = $(".tips1");
    mainLoginBtn.on("click", function () {
        var str1 = inputtextcolor1.val();
        var str2 = inputtextcolor2.val();
        if (str1 && str2) {
            $.ajax({
                type: "post",
                url: "../php/login.php",
                data: { userName: str1, password: str2 },
                success: function (res) {
                    if (res == 1) {
                        window.location.href = encodeURI(encodeURI("../index.html?userName=" + str1));
                    }
                    else {
                        alert("用户名或密码错误");
                        window.location.href = encodeURI(encodeURI("login.html?userName=" + str1));
                        // "login.html";
                        // tips1.show();
                    }
                }
            });
        }
        else {
            tips1.show();
        }
    });
}

/*
*********************************   注册后用户登录  *******************************  可以存到storage！！！！********
*/
function registerUserLogin() {
    var str = $.trim(decodeURI(decodeURI(window.location.href)).split("=")[1]);
    if (str) {
        $("#inputtextcolor1").attr('value', str);
    }
}
