
/*
 * 10.0;
 *   处理了zIndex
 * 
 * 
 */

	function animate(ele,obj,callBack,speedTime){//callBack = function(){alert("动画执行完毕")}
		
		clearInterval(ele.timer);
		if(speedTime == undefined){
			speedTime = 20;
		}else if(speedTime == "slow"){
			speedTime = 50;
		}else if(speedTime == "quickly"){
			speedTime = 30;
		}else if(speedTime == "fast"){
			speedTime = 10;
		}
		ele.timer = setInterval(function(){
			
			var flag = true;
			for(var attr in obj){
				var current = 0;
				if(attr == "opacity"){//当要运动的是元素的透明度的时候。
					current = getStyle(ele,attr)*100;
					console.log(current);
				}else{
					current =  parseInt(getStyle(ele,attr));
				}
				var speed = (obj[attr] - current)/10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				
				if(Math.abs(obj[attr] - current) > speed){ //没到目标值。
					flag = false;
				}
				if(attr == "opacity"){//当要运动的是元素的透明度的时候。
					//透明度不需要单位。
					ele.style[attr] = (current + speed)/100;
				}else if(attr == "zIndex"){//zIndex直接设置目标值。
					ele.style[attr] = obj[attr];
				}
				else{
					ele.style[attr] = current + speed + "px";
					
				}
			}
			if(flag){
				clearInterval(ele.timer);
				if(callBack){
					callBack();
				}
			}
			
		},speedTime);
	}
	
	//跨浏览器兼容ie8及以下获取元素计算后样式值。
	function getStyle(obj,attr){
		//如果在这里parseint()，获取透明度的时候，会把小数去掉，得到的永远是0；
		//return window.getComputedStyle ? parseInt(window.getComputedStyle(obj,null)[attr])  : parseInt(obj.currentStyle[attr]);
		return window.getComputedStyle ? window.getComputedStyle(obj,null)[attr]  : obj.currentStyle[attr];
	}