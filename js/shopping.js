//简化document.getElementById(id)
function $id(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}


/*
 ******************************************用户登陆******************************  可以存到storage！！！！********
 */
; (function UserLogin() {
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[1]);
    var userName = 0;
    if (str) {
        //得先判断存在才可以进行操作
        var str2 = str.split('=')[1];
        if (str2) {
            var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
            var str3 = str2.trim().match(reg);
            if (str3) {
                str3 = str3.join('');
                userName = str3;
            }
        }
    }
    if (userName != '0') {
        $("#loginUserName").text(userName);
        $("#quietLogin").text("退出登录");
        $('#replaceUser').text('更换用户');
        $('#replaceUser').attr('href', '../html/login.html');
        $("#quietLogin").attr('href', '../index.html');
        //继续购物
        $('#shoppingIng').attr("href", "../index.html?userName=" + userName)
    }
})();

/*
 ******************************************     加载数据    ******************************  可以存到storage！！！！********
 */
; (function myShop() {
    //用户名不一定存在
    var str = (decodeURI(decodeURI(window.location.href)).split("?")[1]);
    var shoppingShow = $('.shoppingShow');
    var userName = 0;
    var NoLogin = $('.NoLogin');
    if (str) {
        //得先判断存在才可以进行操作
        var str2 = str.split('=')[1];
        if (str2) {
            var reg = /[a-zA-Z0-9\u4e00-\u9fa5]/g;
            var str3 = str2.trim().match(reg);
            if (str3) {
                str3 = str3.join('');
                userName = str3;
            }
        }
    }

    if (userName == '0') {
        shoppingShow.hide();
        NoLogin.show();
    }
    else {
        shoppingShow.show();
        NoLogin.hide();
        getStorage(userName);
    }

})();
/*
******************  字符串拼接  **************
*/
function getStorage(userName) {
    var shoppingShow = $('.shoppingShow');
    var NoShop = $('.NoShop');
    var newMyShop = localStorage.getItem(userName + "myShopJson");
    var newMyShopJson = JSON.parse(newMyShop); //转为JSON
    // console.log(newMyShopJson);
    // console.log(typeof newMyShopJson[0].gid);


    //这里字符串拼接代码重复严重，，，可以简化下
    var str = '';
    var tab = $('#tab');
    if (newMyShopJson) {
        for (var i = 0; i < newMyShopJson.length; i++) {
            if (newMyShopJson[i].gid === '1') {
                str += `
                    <tbody id ="supplier" >
                        <tr class="selected">
                            <td class="GidNo">
                                ${newMyShopJson[i].gid}
                            </td>
                            <td class="bar" rowspan="1">
                                <input type="checkbox" class="track ckb" value="">
                            </td>
                            <td class="image">
                                <a  href="../html/goods.html?g1id=${newMyShopJson[i].gid}?userNmae=${newMyShopJson[i].userName}">
                                    <img alt="长袖 男 黑色" src="../images/xiao1.jpg">
                                </a>
                            </td>
                            <td class="name">
                                <a href="javascript:;" title="商品名称">
                                    长袖 男 黑色
                                </a>
                            </td>
                            <td class="size">
                                <a href="javascript:;" title="尺码">
                                    ${newMyShopJson[i].size}
                                </a>
                            </td>
                            <td class="price">
                                ￥${newMyShopJson[i].price}
                            </td>
                            <td class="sMun">
                                <a class="track" href="javascript:;">-</a>
                                <input type="text" value="${newMyShopJson[i].number}" class="sMunShow">
                                <a class="increase" href="javascript:;">+</a>
                            </td>
                            <td>
                                -￥20-
                            </td>
                            <td class="subtotal subtotalPrice">
                                ￥${newMyShopJson[i].number * 38}.00
                            </td>
                            <td class="operate">
                                <a class="del track" href="javascript:;">
                                删除</a>
                            </td>
                            <td class="white">
                                &nbsp;
                            </td>
                        </tr>
            </tbody> `;
            }
            if (newMyShopJson[i].gid === '2') {
                str += `
                    <tbody id = "supplier" >
                        <tr class="selected">
                            <td class="GidNo">
                                ${newMyShopJson[i].gid}
                            </td>
                            <td class="bar" rowspan="1">
                                <input type="checkbox" class="track ckb" value="">
                            </td>
                            <td class="image">
                                <a  href="../html/goods.html?g1id=${newMyShopJson[i].gid}?userNmae=${newMyShopJson[i].userName}">
                                    <img alt="外套 男 黑色" src="../images/xiao2.jpg">
                                </a>
                            </td>
                            <td class="name">
                                <a  href="javascript:;" title="商品名称">
                                    外套 男 黑色
                                </a>
                            </td>
                            <td class="size">
                                <a target="_blank" title="尺码">
                                    ${newMyShopJson[i].size}
                                </a>
                            </td>
                            <td class="price">
                                ￥${newMyShopJson[i].price}
                            </td>
                            <td class="sMun">
                                <a class="track" href="javascript:;">-</a>
                                <input type="text" value="${newMyShopJson[i].number}" class="sMunShow">
                                <a class="increase" href="javascript:;">+</a>
                            </td>
                            <td>
                                -￥30-
                            </td>
                            <td class="subtotal subtotalPrice">
                            ￥${newMyShopJson[i].number * 38}.00
                            </td>
                            <td class="operate">
                                <a class="del track"  href="javascript:;">
                                    删除
                                </a>
                            </td>
                            <td class="white">
                                &nbsp;
                            </td>
                        </tr>
            </tbody> `;
            }
            if (newMyShopJson[i].gid === '3') {
                str += `
                    <tbody id = "supplier" >
                        <tr class="selected">
                            <td class="GidNo">
                                ${newMyShopJson[i].gid}
                            </td>
                            <td class="bar" rowspan="1">
                                <input type="checkbox" class="track ckb" value="">
                            </td>
                            <td class="image">
                                <a href="../html/goods.html?g1id=${newMyShopJson[i].gid}?userNmae=${newMyShopJson[i].userName}">
                                    <img alt="牛仔 男 黑色" src="../images/xiao4.jpg">
                                </a>
                            </td>
                            <td class="name">
                                <a  href="javascript:;" title="商品名称">
                                    牛仔 男 黑色
                                </a>
                            </td>
                            <td class="size">
                                <a target="_blank" title="尺码">
                                    ${newMyShopJson[i].size}
                                </a>
                            </td>
                            <td class="price">
                                ￥${newMyShopJson[i].price}
                            </td>
                            <td class="sMun">
                                <a class="track" href="javascript:;">-</a>
                                <input type="text" value="${newMyShopJson[i].number}" class="sMunShow">
                                <a class="increase" href="javascript:;">+</a>
                            </td>
                            <td>
                                -￥10-
                            </td>
                            <td class="subtotal subtotalPrice">
                            ￥${newMyShopJson[i].number * 38}.00
                            </td>
                            <td class="operate">
                                <a class="del track" href="javascript:;">
                                    删除
                                </a>
                            </td>
                            <td class="white">
                                &nbsp;
                            </td>
                        </tr>
            </tbody> `;
            }
            if (newMyShopJson[i].gid === '4') {
                str += `
                    <tbody id = "supplier" >
                        <tr class="selected">
                        <td class="GidNo">
                            ${newMyShopJson[i].gid}
                        </td>
                        <td class="bar" rowspan="1">
                            <input type="checkbox" class="track ckb" value="">
                        </td>
                        <td class="image">
                            <a href="../html/goods.html?g1id=${newMyShopJson[i].gid}?userNmae=${newMyShopJson[i].userName}">
                                <img alt="牛仔 男 黑色" src="../images/xiao1.jpg">
                            </a>
                        </td>
                        <td class="name">
                            <a  href="javascript:;" title="商品名称">
                                牛仔 男 黑色
                            </a>
                        </td>
                        <td class="size">
                            <a target="_blank" title="尺码">
                                ${newMyShopJson[i].size}
                            </a>
                        </td>
                        <td class="price">
                            ￥${newMyShopJson[i].price}
                        </td>
                        <td class="sMun">
                            <a class="track" href="javascript:;">-</a>
                            <input type="text" value="${newMyShopJson[i].number}" class="sMunShow">
                            <a class="increase" href="javascript:;">+</a>
                        </td>
                        <td>
                            -￥30-
                        </td>
                        <td class="subtotal subtotalPrice">
                        ￥${newMyShopJson[i].number * 38}.00
                        </td>
                        <td class="operate">
                            <a class="del track" href="javascript:;">
                                删除
                            </a>
                        </td>
                        <td class="white">
                            &nbsp;
                        </td>
                </tr>
            </tbody> `;
            }
        }
    }
    if (str == '') {
        shoppingShow.hide();
        NoShop.show();
    }
    if (str != '') {
        tab.append(str);
        shoppingShow.show();
        NoShop.hide();
        shopUpdate(userName);
    }
}

//小数时简单。先用正则筛选出所有数字，然后原来是2位小数，就除100保留小数后两位。numberTotal6.innerText.replace(/[^0-9|.]/ig, "")这个是匹配数字和.
//购物车修改 js和JQ混合使用
function shopUpdate(userName) {
    var newMyShop = localStorage.getItem(userName + "myShopJson");
    var newMyShopJson = JSON.parse(newMyShop); //转为JSON
    var totalShop = $id('totalShop');
    var totalShopNumPrice = $id('totalShopNumPrice');
    var checkNum = 0;
    $('#tab').off().on('click', function (e) {
        var e = e || event;
        var target = e.target || e.SrcElement;
        //点击的是a标签
        if (target.nodeName.toLowerCase() == 'a') {
            //加减
            var flag = false;
            if (target.innerText == '-') {
                var reduce = target.nextElementSibling;
                if (reduce.value == 1) {
                    reduce.value == 1;
                }
                else {
                    reduce.value--;
                    flag = true;
                    //更新localStorage
                    var numberTotal2 = target.parentNode.parentNode.parentNode;
                    var gid = numberTotal2.firstElementChild.firstElementChild.innerText.trim();
                    if (newMyShopJson) {
                        for (var i = 0; i < newMyShopJson.length; i++) {
                            if (newMyShopJson[i].gid === gid) {
                                newMyShopJson[i].number--;
                                var newMyShopJsonToStr = JSON.stringify(newMyShopJson); //将JSON转为字符串存到变量里
                                localStorage.setItem(userName + "myShopJson", newMyShopJsonToStr);
                            }
                        }
                    }

                }
                var numberTotal = target.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling;
                numberTotal.innerText = '￥' + (reduce.value * 38) + ".00";
                if (flag) {
                    //判断加减时，是否选中  在选中做了,还得再做一次，因为全选时,没有点击input说不加上
                    var numberTotal8 = target.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild;
                    if (numberTotal8.checked == true) {
                        totalShop.innerText = parseInt(totalShop.innerText) - 1;
                        totalShopNumPrice.innerText = parseInt(totalShopNumPrice.innerText) - 38;
                    }
                }
            }
            if (target.innerText == '+') {
                var insertNum = target.previousElementSibling;
                insertNum.value++;
                var numberTotal2 = target.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling;
                numberTotal2.innerText = '￥' + (insertNum.value * 38) + ".00";

                //更新localStorage
                var numberTotal888 = target.parentNode.parentNode.parentNode;
                var gid = numberTotal888.firstElementChild.firstElementChild.innerText.trim();
                if (newMyShopJson) {
                    for (var i = 0; i < newMyShopJson.length; i++) {
                        if (newMyShopJson[i].gid === gid) {
                            newMyShopJson[i].number++;
                            var newMyShopJsonToStr = JSON.stringify(newMyShopJson); //将JSON转为字符串存到变量里
                            localStorage.setItem(userName + "myShopJson", newMyShopJsonToStr);
                        }
                    }
                }
                //判断加减时，是否选中  在选中做了,还得再做一次，因为全选时,没有点击input说不加上
                var numberTotal9 = target.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild;
                if (numberTotal9.checked == true) {
                    //总价
                    totalShopNumPrice.innerText = parseInt(totalShopNumPrice.innerText) + 38;
                    //件数
                    totalShop.innerText = parseInt(totalShop.innerText) + 1;
                }

            }
            //删除
            if (target.innerText == '删除') {
                var numberTotal2 = target.parentNode.parentNode.parentNode;
                numberTotal2.remove();
                var gid = numberTotal2.firstElementChild.firstElementChild.innerText.trim();
                //更新localStorage
                if (newMyShopJson) {
                    for (var i = 0; i < newMyShopJson.length; i++) {
                        if (newMyShopJson[i].gid === gid) {
                            newMyShopJson.splice(i, 1);
                            var newMyShopJsonToStr = JSON.stringify(newMyShopJson); //将JSON转为字符串存到变量里
                            localStorage.setItem(userName + "myShopJson", newMyShopJsonToStr);
                        }
                    }
                }
            }
        }


        //选择==点击的是input标签
        if (target.nodeName.toLowerCase() == 'input') {
            if (target.value == '') {
                //选中就加钱啊
                var numberTotal5 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
                if (target.checked == true) {
                    var numberTotall = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
                    var numberTotala = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild;
                    numberTotall.onclick = function () {
                        if (numberTotal5.value > 1) {
                            totalShop.innerText = parseInt(totalShop.innerText) - 1;
                            //总价
                            totalShopNumPrice.innerText = parseInt(totalShopNumPrice.innerText) - 38;
                        }
                    }
                    numberTotala.onclick = function () {
                        totalShop.innerText = parseInt(totalShop.innerText) + 1;
                        totalShopNumPrice.innerText = parseInt(totalShopNumPrice.innerText) + 38;
                    }
                    //总数量
                    var numberTotal4 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
                    totalShop.innerText = parseInt(numberTotal4.value) + parseInt(totalShop.innerText);
                    //总价
                    var numberTotal6 = target.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling;
                    var totalShopPrice = parseInt(numberTotal6.innerText.replace(/[^0-9|.]/ig, ""));
                    totalShopNumPrice.innerText = totalShopPrice + parseInt(totalShopNumPrice.innerText);
                }
                if (target.checked == false) {
                    if (parseInt(totalShop.innerText) > 0) {
                        totalShop.innerText = parseInt(totalShop.innerText) - parseInt(numberTotal5.value);
                    }
                    if (parseInt(totalShop.innerText) < 0) {
                        totalShop.innerText = 0;
                    }
                    if (parseInt(totalShopNumPrice.innerText) > 0) {
                        //总价
                        var numberTotal7 = target.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling;
                        var totalShopPrice1 = parseInt(numberTotal7.innerText.replace(/[^0-9|.]/ig, ""));
                        totalShopNumPrice.innerText = parseInt(totalShopNumPrice.innerText) - totalShopPrice1;
                    }
                    if (parseInt(totalShopNumPrice.innerText) < 0) {
                        totalShopNumPrice.innerText = 0;
                    }
                }
            }
            else {
                target.onkeyup = function () {
                    if (target.value >= 0) {
                        var numberTotal3 = target.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling;
                        numberTotal3.innerText = '￥' + (target.value * 38) + ".00";

                        //更新localStorage
                        //这里ocalStorage数据实时刷新
                        var numberTotal999 = target.parentNode.parentNode;
                        var gid = numberTotal999.firstElementChild.innerText.trim();;
                        if (newMyShopJson) {
                            for (var i = 0; i < newMyShopJson.length; i++) {
                                if (newMyShopJson[i].gid === gid) {
                                    newMyShopJson[i].number = parseInt(target.value);
                                    var newMyShopJsonToStr = JSON.stringify(newMyShopJson); //将JSON转为字符串存到变量里
                                    localStorage.setItem(userName + "myShopJson", newMyShopJsonToStr);
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}

/**
 * **********   全选  **********
 */
(function () {
    // 全选
    $('#allckbtop').on('click', function () {
        var allInput = $('#allckbtop').prop("checked");
        if (allInput) {
            $('article').find("input[type='checkbox']").prop("checked", true);
            $('#allckbtopText').text('取消全选');
            $('#allckbbtText').text('取消全选');

            var valueTotal = 0;
            // var priceTotal = 0;
            $('article').find("input[type='text']").each(function () {
                var valueText = $(this).val(); //这里的value就是每一个input的value值
                valueTotal += parseInt(valueText);
            });
            // $('.subtotalPrice').each(function () {
            //     var PriceText = $(this).text().replace(/[^0-9]/ig, "");
            //     priceTotal += parseInt(PriceText);
            // });
            $('#totalShop').text(valueTotal);
            // $('#totalShopNumPrice').text((priceTotal / 100).toFixed(2));
            $('#totalShopNumPrice').text(valueTotal * 38);
            // console.log(valueTotal);
            // console.log(priceTotal);
        } else {
            $('article').find("input[type='checkbox']").prop("checked", false);
            $('#allckbtopText').text('全选');
            $('#allckbbtText').text('全选');
            $('#totalShop').text(0);
            $('#totalShopNumPrice').text(0);
        }
    });
    $('#allckbbt').on('click', function () {
        var allInput = $('#allckbbt').prop("checked");
        if (allInput) {
            $('article').find("input[type='checkbox']").prop("checked", true);
            $('#allckbtopText').text('取消全选');
            $('#allckbbtText').text('取消全选');
            var valueTotal = 0;
            // var priceTotal = 0;
            $('article').find("input[type='text']").each(function () {
                var valueText = $(this).val(); //这里的value就是每一个input的value值
                valueTotal += parseInt(valueText);
            });
            // $('.subtotalPrice').each(function () {
            //     var PriceText = $(this).text().replace(/[^0-9]/ig, "");
            //     priceTotal += parseInt(PriceText);
            // });
            $('#totalShop').text(valueTotal);
            // $('#totalShopNumPrice').text((priceTotal / 100).toFixed(2));
            $('#totalShopNumPrice').text(valueTotal * 38);

        } else {
            $('article').find("input[type='checkbox']").prop("checked", false);
            $('#allckbtopText').text('全选');
            $('#allckbbtText').text('全选');
            $('#totalShop').text(0);
            $('#totalShopNumPrice').text(0);
        }
    });
    //点input
    $('#tab input').filter(".ckb").on('click', function () {
        var allInput = $(this).prop("checked");
        var allInput1 = true;
        $('#tab input').filter(".ckb").each(function () {
            allInput1 = $(this).prop("checked");
            if (!allInput1) {
                return allInput1;
            }
        });
        if (allInput1) {
            $('#allckbtop').prop("checked", true);
            $('#allckbbt').prop("checked", true);
            $('#allckbtopText').text('取消全选');
            $('#allckbbtText').text('取消全选');
        }
        if (allInput) {
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
            $('#allckbtop').prop("checked", false);
            $('#allckbbt').prop("checked", false);
            $('#allckbtopText').text('全选');
            $('#allckbbtText').text('全选');
        }
    })
})();
