/*
********************************    注册    ***************************8
*/
; $(function () {
    UserRegister();
    UserRegisterBtn();
});

function UserRegister() {
    //用户名
    var userNameRegister = $('#userNameRegister');
    var succ_user = $('#succ_user');
    var error_user = $('#error_user');
    var repeat_user = $('#repeat_user');
    userNameRegister.on("focus", function () {
        if (error_user.show() || repeat_user.show()) {
            error_user.hide();
            repeat_user.hide();
        }
        if (succ_user.show()) {
            succ_user.hide();
        }
    });
    userNameRegister.on("blur", function () {
        var reg1 = /^[a-zA-Z0-9\u4e00-\u9fa5]{2,20}$/;
        var str1 = userNameRegister.val();
        if ((str1 == '') || (!reg1.test(str1))) {
            error_user.show();
            succ_user.hide();
        }
        else {

            $.ajax({
                type: "get",
                url: "../php/checkUserName.php",
                data: { userName: str1 },
                success: function (res) {
                    if (res == 1) {
                        repeat_user.show();
                        succ_user.hide();
                        error_user.show();
                    }
                    else {
                        repeat_user.hide();
                        succ_user.show();
                        error_user.hide();
                    }
                }
            });
        }
    });

    //密码
    var pwdRegister = $('#pwdRegister');
    var error_pwd = $('#error_pwd');
    var succ_pwd = $('#succ_pwd');
    pwdRegister.on("focus", function () {
        if (error_pwd.show()) {
            error_pwd.hide();
        }
        if (succ_pwd.show()) {
            succ_pwd.hide();
        }
    });
    pwdRegister.on("blur", function () {
        var reg2 = /^\w\S{5,20}$/;
        var str2 = pwdRegister.val();
        if ((str2 == '') || (!reg2.test(str2))) {
            error_pwd.show();
            succ_pwd.hide();
        }
        else {
            error_pwd.hide();
            succ_pwd.show();
        }
    });

}

//点击注册
function UserRegisterBtn() {
    var succ_user = $('#succ_user');
    var succ_pwd = $('#succ_pwd');
    var error_user = $('#error_user');
    var error_pwd = $('#error_pwd');
    var registerIN = $('#registerIN');
    var checkboxFanke = $('#checkboxFanke');
    var repeat_user = $('#repeat_user');
    checkboxFanke.on('click', function () {
        var str1 = $('#userNameRegister').val();
        var str2 = $('#pwdRegister').val();
        if (str1 == '') {
            error_user.show();
        }
        if (str2 == '') {
            error_pwd.show();
        }
        //同意条款   可以存到storage！！！！********
        if (checkboxFanke.prop("checked")) {
            registerIN.css('backgroundColor', '#b52024');
            if (succ_user.is(':visible') && succ_pwd.is(':visible')) {
                registerIN.on('click', function () {
                    var str1 = $('#userNameRegister').val();
                    var str2 = $('#pwdRegister').val();
                    str1 && str2 &&
                        $.ajax({
                            type: "post",
                            url: "../php/register.php",
                            data: { userName: str1, password: str2 },
                            success: function (res) {
                                if (res == 1) {
                                    window.location.href = encodeURI(encodeURI("../html/login.html?userName=" + str1));
                                }
                                else {
                                    alert("注册失败");
                                }
                            }
                        });
                });
            }
            else if (repeat_user.is(':visible')) {
                error_pwd.show();
                error_user.show();
                succ_user.hide();
                succ_pwd.hide();
            }
            else {
                succ_user.hide();
                succ_pwd.hide();
            }
        }
        else {
            registerIN.css('backgroundColor', '#9A9A9A');
        }
    });
    //没有同意条款点击时
    if (!checkboxFanke.prop("checked")) {
        registerIN.on('click', function () {
            registerIN.css('backgroundColor', '#9A9A9A');
            error_pwd.show();
            error_user.show();
            succ_user.hide();
            succ_pwd.hide();
        });
    }
}