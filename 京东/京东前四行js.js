$("b").click(function(){
	$("header").hide();
});
$("#address span,#address ul").hover(function(){
	$("#address ul").css("display","block");
	$("#address,#address span,#address span a").css("background-color","white");
},function(){
	$("#address ul").css("display","none");
	$("#address,#address span,#address span a").css("background-color","#e3e4e5");
});

$(".cw-iron").hover(function(){
	$(".dropdown-layer").css("display","block");
},function(){
	$(".dropdown-layer").css("display","none");
});
document.onscroll = function(){
	var scrollTop = $(document).scrollTop();
	var height = $(window).height();
//	console.log(scrollTop);
	if (scrollTop > 300) {
		$("#search,#fivePartCenterTour").css("display","block");
	}
	else{
		$("#search,#fivePartCenterTour").css("display","none");
	}
}
//我的京东
$("#wdjd").hover(function(){
	$("#wdjdul").css("display","block");
	$("#wdjd,#wdjd span,#wdjd .twoRight").css("background-color","white");
},function(){
	$("#wdjdul").css("display","none");
	$("#wdjd,#wdjd span,#wdjd .twoRight").css("background-color","#e3e4e5");
});
//企业采购
$("#qycg").hover(function(){
	$("#qycgul").css("display","block");
	$("#qycg,#qycg span,#qycg .twoRight").css("background-color","white");
	
},function(){
	$("#qycgul").css("display","none");
	$("#qycg,#qycg span,#qycg .twoRight").css("background-color","#e3e4e5");
});
//客户服务
$("#khfw").hover(function(){
	$("#khfwdl").css("display","block");
	$("#khfw,#khfw span,#khfw .twoRight").css("background-color","white");
	
},function(){
	$("#khfwdl").css("display","none");
	$("#khfw,#khfw span,#khfw .twoRight").css("background-color","#e3e4e5");
});
//网站导航
$("#wzdh").hover(function(){
	$("#wzdhnav").css("display","flex");
	$("#wzdh,#wzdh span,#wzdh .twoRight").css("background-color","white");
	
},function(){
	$("#wzdhnav").css("display","none");
	$("#wzdh,#wzdh span,#wzdh .twoRight").css("background-color","#e3e4e5");
});
function fenjingdou(){
	var str1 = ["分千万京豆","百图大牌日","满199减100"];
	var str2 = ["U盘","想女朋女","无聊啊"];
	var i = 0,j = 0;
	setInterval(function(){
		$("#fjd").text(str1[i]);
		$("#firstLine input").attr("placeholder",str2[j]);
		i++;
		j++;
		if (i>str1.length) {
			i=0;
		}
		if (j>str2.length) {
			j=0;
		}
	},2000);
}
fenjingdou();
$("#rightMessage div.right").hover(function(){
	$("#rightMessage div.right .shoppingcar").css("display","block");
	$("#rightMessage div.right").css({"border":"solid 1px red","border-bottom":"solid 0px red"});
},function(){
	$("#rightMessage div.right .shoppingcar").css("display","none");
	$("#rightMessage div.right").css("border","solid 1px #eeeeee");
});

$("#fourPartCenterOne").hover(function(){
	$("#contentUl").css("display","block");
},function(){
	$("#contentUl").css("display","none");
});



//轮播
var pics = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/1.jpg"];
// 表示当前轮播到的索引
var currentIndex = 0;

// 填充图片 
pics.forEach(function(pic,index){
	$("<div></div>").css({
		"background-image": "url(" + pic + ")",
		"left": 590*index,
	}).addClass("lbt-item").appendTo($("#content"));
});
// 创建轮播图的指示器
for (var i = 0; i < pics.length-1; i++) {
	$("<li></li>").addClass("indication-item").attr("index",i)
	.appendTo($("#indication")).on("click",function(){
		changeIndicationAndImage($(this).attr("index")*1);
	});
}

// 切换指示器和图片
function changeIndicationAndImage(index){
	// 清除上一个指示点的高亮
	$(".indication-item").eq(currentIndex).removeClass("indication-high-lighted");
	// 改变索引
	currentIndex = index;
	// console.log(currentIndex);
	// 切换下一张图片
	$(".indication-item").eq(currentIndex).addClass("indication-high-lighted");
	$("#content").css("left",-590*currentIndex);
}


$(".indication-item").eq(currentIndex).addClass("indication-high-lighted");
// 自动轮播
var timer = setInterval(next,3000);
// 切换下一张
function next() {
	changeIndicationAndImage(currentIndex+1);
	// 判断是否切换到最后一张
	if (currentIndex == pics.length-1) {
		currentIndex = 0;
		$(".indication-item").eq(currentIndex).addClass("indication-high-lighted");
		// 等待500毫秒的原因是想让第5张完全切换出来
		setTimeout(function(){
			$("#content").css("left",0);
			// 从第5张切换到第1张时不需要动画
			$("#content").css("transition","none");
			// 随后再把动画加上
			setTimeout(function(){
				$("#content").css("transition","left 0.5s");
			},50);
		},500);
	}
}

// 鼠标移动轮播图上时，停止轮播
$("#lbt").hover(function(){
	// 关闭定时器
	clearInterval(timer);
	timer = null;
},function(){
	// 重新轮播
	timer = setInterval(next,3000);
	$("#arrowleft").show();
	$("#arrowright").show();
});

// 控制两个箭头的显示和隐藏
$("#lbt").mousemove(function(e){
	// 鼠标相对于文档的左边缘的位置。
	// console.log(e.pageX);
	// 获取匹配元素在当前视口的相对偏移
	// console.log($(this).offset().left);
	// 当前点距离#lbt左边的距离
    // console.log(e.pageX - $(this).offset().left);
    // 轮播图宽度
    // console.log($(this).outerWidth());
   	if (e.pageX - $(this).offset().left < $(this).outerWidth()/2) {
   		$("#arrowleft").show();
   		$("#arrowright").show();
   	} else{
   		$("#arrowleft").show();
   		$("#arrowright").show();
   	}
});

// 给左右箭头绑定事件
$("#arrowleft").click(function(){
	if (currentIndex <= 0) {
		currentIndex = 6;
	}
	changeIndicationAndImage(currentIndex-1);
});
$("#arrowright").click(function(){
	// console.log(this.moving);
	if (this.moving == true) return;
	next();
	this.moving = true;
	// 等动画做完改为false
	var that = this;
	setTimeout(function(){
		that.moving = false;
	},500);
});



//三张图轮播
var showIndex = 0;
var timer;
$(function() {
	$("#fourPartCenterThree .item").not(":eq(0)").css("display", "none");
	startTimer();
    $("#arrowRightleft").click(function() {
		clearInterval(timer);
		if(showIndex == 0) showIndex = 3;
		showIndex--;
		showImg();
		startTimer();
		
	});
	$("#arrowRightright").click(function() {
		clearInterval(timer);
		if(showIndex == 2) showIndex = -1;
		showIndex++;
		showImg();
		startTimer();
	});
});
function startTimer() {
	timer = setInterval(function() {
		showIndex++;
		if(showIndex >= 3) showIndex = 0;
		showImg();
	}, 4000);
}
function showImg() {
	$("#fourPartCenterThree .item").stop(true, true);
	$("#fourPartCenterThree .item").fadeOut(400).eq(showIndex).fadeIn(400);
}

