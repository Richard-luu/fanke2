//封装id选择器
function $id(id) {
    return document.getElementById(id);
}
var imgId;
/*
    *******************************************    渲染数据    ****************************
*/
// ; (function GonndsId() {
//     var reg = /[0-9]/g;
//     var gidStr = (decodeURI(decodeURI(window.location.href)).split("?")[1]).split('=')[0].trim();
//     var gidStrVal = (decodeURI(decodeURI(window.location.href)).split("?")[1]).split('=')[1].trim().match(reg).join('');
// })();


//JQ

; $(function () {
    var reg = /[0-9]/g;
    var gidStr = (decodeURI(decodeURI(window.location.href)).split("?")[1]).split('=')[0].trim().match(reg).join('');
    var gidStrVal = (decodeURI(decodeURI(window.location.href)).split("?")[1]).split('=')[1].trim().match(reg).join('');
    var str = 'goods';
    var gidStrDb = str + gidStr;
    var gidStrMun = 'g' + gidStr + 'id';
    // console.log(gidStrDb);
    var arr = [];
    $.ajax(
        {
            type: 'get',
            url: '../php/goods.php',
            data: { gid: gidStrDb, gidVal: gidStrVal, gidMun: gidStrMun },
            success: function (res) {
                arr = JSON.parse(res);
                var strImg = arr[0].spanBack;
                var strShowImg = arr[0].showImg2;
                if (strImg && strShowImg) {
                    $('#showImgUl>.trackCommo>span').css({
                        background: "url(" + strImg + ")"
                    });
                    $('#showImgUl>.track2>span').css(
                        'backgroundPosition', '0px -68px'
                    );
                    $('#showImgUl>.track3>span').css(
                        'backgroundPosition', '0px -136px'
                    );
                    // $('#bigImg>img').removeAttr('src').attr({ src: strShowImg });
                    $('#bigImg>img').attr({ src: strShowImg });
                    $('#showBigImgDiv>img').removeAttr('src').attr({ src: arr[0].showImg2 });
                    imgId = $('#bigImg>img').attr('src');
                }
                else {
                    imgId = 0;
                }
            }
        }
    );
});





/*
**************************************    放大镜  ****************************************
*/

//1.获取元素
var showImgUl = $id('showImgUl');
var bigImg = $id('bigImg');
var showBigImgDiv = $id('showBigImgDiv');
var filter = $id('filter');
var showBigImgDivImg = $id('showBigImgDivImg');
var danpinColCenter = document.getElementsByClassName('danpinColCenter')[0];
var maxX;
var maxY;
var src = bigImg.firstElementChild.src;
//给每一li添加索引， 方便获取
var allLi = showImgUl.children;
for (var i = 0; i < allLi.length; i++) {
    allLi[i].index = i;
}
/*
    计算元素距离顶部的高度：将元素的offsetTop与其offsetParent的相同属性相加，如此循环直至根元素，就可以得到一个基本准确的值
    距离左边也一样
*/
//上
var danpinParentTop = danpinColCenter.offsetTop;
//距离左边
var danpinParentLeft = danpinColCenter.offsetLeft;
var danpinParent = danpinColCenter.offsetParent;
while (danpinParent !== null) {
    danpinParentTop += danpinParent.offsetTop;
    danpinParentLeft += danpinParent.offsetLeft;
    danpinParent = danpinParent.offsetParent;
}


//点击换图片
showImgUl.onclick = function (e) {
    var e = e || event;
    var target = e.target || e.srcElement;
    for (var i = 0; i < allLi.length; i++) {
        allLi[i].style.borderColor = "#B4B4B4";
    }
    if (target.nodeName.toLowerCase() == 'span' && imgId) {
        target.parentNode.style.borderColor = "#a10000";
        bigImg.firstElementChild.src = imgId.replace('1', target.parentNode.index);
        showBigImgDivImg.src = imgId.replace('1', target.parentNode.index);
    }
    else if (target.nodeName.toLowerCase() == 'span' && !(imgId)) {
        target.parentNode.style.borderColor = "#a10000";
        bigImg.firstElementChild.src = src.replace('1', target.parentNode.index);
        showBigImgDivImg.src = src.replace('1', target.parentNode.index);
    }
}

//鼠标进入
// 这里用onmouseenter： 子元素不触发事件
bigImg.onmouseenter = function () {
    showBigImgDiv.style.display = 'block';
    filter.style.display = 'block';
    //获取放大镜尺寸
    maxX = danpinColCenter.clientWidth - filter.offsetWidth;
    maxY = danpinColCenter.clientHeight - filter.offsetHeight;
}

//鼠标移动
bigImg.onmousemove = function (e) {
    //计算放大镜的位置

    var x = e.pageX - filter.offsetWidth / 2 - danpinParentLeft;
    var y = e.pageY - filter.offsetHeight / 2 - danpinParentTop;
    //边界处理
    if (x < 0) {
        x = 0;
    }
    else if (x > maxX) {
        x = maxY;
    }
    if (y < 0) {
        y = 0;
    }
    else if (y > maxY) {
        y = maxY;
    }
    filter.style.left = x + 'px';
    filter.style.top = y + 'px';
    //移动大图片
    showBigImgDivImg.style.left = x * (-3) + 'px';
    showBigImgDivImg.style.top = y * (-3) + 'px';
    // console.log(y);
}


//鼠标离开
bigImg.onmouseleave = function () {
    showBigImgDiv.style.display = 'none';
    filter.style.display = 'none';
}


    /*
    ************************************    谁点击过来的    ****************************
    */
    ; (function UserLogin() {

        //商品id肯定存在
        var hrefStr = (decodeURI(decodeURI(window.location.href))).split('?')[1];
        //用户名不一定存在
        var str = (decodeURI(decodeURI(window.location.href)).split("?")[2]);
        var loginUserName = $id('loginUserName');
        var quietLogin = $id('quietLogin');
        var replaceUser = $id('replaceUser');
        var replaceUser = $id('replaceUser');
        var quietLogin = $id('quietLogin');
        var carNum = $id('carNum');
        if (str) {
            //得先判断存在才可以进行操作
            var str2 = str.split('=')[1];
            if (str2) {
                var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
                var str3 = str2.trim().match(reg);
                if (str3) {
                    str3 = str3.join('');
                    loginUserName.innerText = str3;
                    //获取存储的数据
                    var newMyShop = localStorage.getItem(str3 + "myShopJson");
                    var newMyShopJson = JSON.parse(newMyShop); //转为JSON
                    if (newMyShopJson) {
                        var a = 0;
                        for (var i = 0; i < newMyShopJson.length; i++) {
                            a += newMyShopJson[i].number;
                        }
                        carNum.innerText = "(" + a + ")";
                    }
                    quietLogin.innerText = '退出登录';
                    replaceUser.innerText = '更换用户';
                    replaceUser.setAttribute('href', '../html/login.html?');
                    quietLogin.setAttribute('href', 'goods.html?' + hrefStr);
                }
            }
        }
    })();


/*
**************************************  返回首页带userName  *********************   可以存到storage！！！！********
*/
$id('returnToIndex1').onclick = function () {
    var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[2]);
    if (str) {
        //得先判断存在才可以进行操作
        var str2 = str.split('=')[1];
        if (str2) {
            var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
            var str3 = str2.trim().match(reg);
            if (str3) {
                str3 = str3.join('');
                location.href = "../index.html?userName=" + str3;
            }
            else {
                location.href = "../index.html";
            }
        }
        else {
            location.href = "../index.html";
        }
    }
    else {
        location.href = "../index.html";
    }
}
$id('returnToIndex2').onclick = function () {
    var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[2]);
    if (str) {
        //得先判断存在才可以进行操作
        var str2 = str.split('=')[1];
        if (str2) {
            var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
            var str3 = str2.trim().match(reg);
            if (str3) {
                str3 = str3.join('');
                location.href = "../index.html?userName=" + str3;
            }
            else {
                location.href = "../index.html";
            }

        }
        else {
            location.href = "../index.html";
        }
    }
    else {
        location.href = "../index.html";
    }
}







/*
************************************************    选择尺码    ************************
*/
$('#chooseSize>li').click(function () {
    if ($(this).hasClass("active")) {
        $('#chooseSize>li').eq($(this).index()).removeClass("active").siblings().removeClass("class");
    }
    else {
        $(this).attr("class", "active").siblings('li').removeClass("active");
    }
});
/*
****************    颜色    ************88
*/
$('#chooseColor>.chooseColorli').click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    }
    else {
        $(this).attr("class", "active");
    }
});


/*
********************************************  加入购物车  ***********************************
*/

; $('.inCar').on('click', function () {
    var Scolor = 0;
    var Ssize = 0;
    var Ssum = 0;
    var ShopTotal = 0;
    var userName = 0;
    //价格还没写
    var reg1 = /[0-9]/g;
    //商品id肯定存在
    var hrefStrId = (decodeURI(decodeURI(window.location.href))).split('?')[1].split('=')[1].trim().match(reg1).join('');
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[2]);
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
    if ($('#chooseColorli').hasClass("active")) {
        Scolor = $('#chooseColorli').text().trim();
    }
    if ($('#chooseSize>li').first().hasClass("active")) {
        Ssize = $('#chooseSize>li').first().text().trim();
    }
    if ($('#chooseSize>li').last().hasClass("active")) {
        Ssize = $('#chooseSize>li').last().text().trim();
    }
    Ssum = $('#shopSum').val();
    if (Scolor == 0) {
        alert('请选择颜色');
        return;
    }
    if (Ssize == 0) {
        alert('请选择尺码');
        return;
    }
    if (userName == 0) {
        alert('请先登录,不然我localStorage满了');
        return;
    }
    else {
        var total = (ShopTotal + Number(Ssum));
        ShopTotal += 1;
        var newMyShop = localStorage.getItem(userName + "myShopJson");
        var newMyShopJson = JSON.parse(newMyShop); //转为JSON
        var a = 0;
        $('#carNum').text("(" + total + ")");
        //判断是否存在数据库
        if (newMyShopJson) {
            for (var i = 0; i < newMyShopJson.length; i++) {
                a += newMyShopJson[i].number;
            }
            $('#carNum').text("(" + (a + total) + ")");
            var flag = false;//false表示购物车信息中是没有当前的这个商品
            var shopArr1 = null;
            for (var i = 0; i < newMyShopJson.length; i++) {
                var b = 0;
                if (newMyShopJson[i].gid === hrefStrId) {
                    // newMyShopJson[i].number += total;
                    localStorage.removeItem(userName + "myShopJson");
                    b += total;
                    var shopArr1 = {
                        "userName": userName,
                        "gid": hrefStrId,
                        "color": Scolor,
                        "size": Ssize,
                        "price": 38.00,
                        "number": b
                    };
                    flag = true;
                }
            }
            if (shopArr1) {
                newMyShopJson.push(shopArr1);
                var newMyShopJsonToStr = JSON.stringify(newMyShopJson); //将JSON转为字符串存到变量里
                localStorage.setItem(userName + "myShopJson", newMyShopJsonToStr);
            }
            if (!flag) {
                var shopArr2 = {
                    "userName": userName,
                    "gid": hrefStrId,
                    "color": Scolor,
                    "size": Ssize,
                    "price": 38.00,
                    "number": total
                };
                newMyShopJson.push(shopArr2);
                var newMyShopJsonToStr = JSON.stringify(newMyShopJson); //将JSON转为字符串存到变量里
                localStorage.setItem(userName + "myShopJson", newMyShopJsonToStr);
            }
        }
        else {
            var shopArr2 = [{
                "userName": userName,
                "gid": hrefStrId,
                "color": Scolor,
                "size": Ssize,
                "price": 38.00,
                "number": total
            }];
            // myShop.push(shopArr2);
            var myShopJson2 = JSON.stringify(shopArr2); //将JSON转为字符串存到变量里
            localStorage.setItem(userName + "myShopJson", myShopJson2);//将变量存到localStorage里
        }
    }
    // console.log(newMyShopJson); // 打印出对象
    // localStorage.clear();
});


/*
*********************************   去我的购物车    ******************************
*/
; $('#toMyCar').on('click', function () {
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[2]);
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
    window.location.href = encodeURI(encodeURI("../html/shopping.html?userName=" + userName));
});


/**
 * *************************    立即购买    *************************    
 */
; $('#shopNow').on('click', function () {
    var Scolor = 0;
    var Ssize = 0;
    var Ssum = 0;
    var userName = 0;
    var reg1 = /[0-9]/g;
    //商品id肯定存在
    var hrefStrId = (decodeURI(decodeURI(window.location.href))).split('?')[1].split('=')[1].trim().match(reg1).join('');
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[2]);
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
    if ($('#chooseColorli').hasClass("active")) {
        Scolor = $('#chooseColorli').text().trim();
    }
    if ($('#chooseSize>li').first().hasClass("active")) {
        Ssize = $('#chooseSize>li').first().text().trim();
    }
    if ($('#chooseSize>li').last().hasClass("active")) {
        Ssize = $('#chooseSize>li').last().text().trim();
    }
    Ssum = $('#shopSum').val();
    if (Scolor == 0) {
        alert('请选择颜色');
        return;
    }
    if (Ssize == 0) {
        alert('请选择尺码');
        return;
    }
    if (userName == 0) {
        alert('请先登录,不然我localStorage满了');
        return;
    }
    else {
        var total = Number(Ssum);
        var shopArr2 = [{
            "userName": userName,
            "gid": hrefStrId,
            "color": Scolor,
            "size": Ssize,
            "price": 38.00,
            "number": total
        }];
        var newMyShopJsonToStr = JSON.stringify(shopArr2); //将JSON转为字符串存到变量里
        localStorage.setItem(userName + "myShopJson", newMyShopJsonToStr);
        $('#shopNow').attr("href", "../html/shopping.html?userName=" + userName);
    }
});