setInterval(function(hour,minutes,seconds){
	var now = new Date();
	var mubiaoHour = 24;
	var mubiaominutes = 60;
	var mubiaoseconds = 60;
	var hour = mubiaoHour - now.getHours();
	var minutes = mubiaominutes - now.getMinutes();
	var seconds = mubiaoseconds - now.getSeconds();
	if (hour<10) {
		hour = "0"+hour;
	}
	if (minutes<10) {
		minutes = "0"+minutes;
	}
	if (seconds<10) {
		seconds = "0"+seconds;
	}
	if (minutes==60) {
		minutes = "00";
	}
	if (seconds==60) {
		seconds = "00";
	}
	$("#titlethreeOne").text(hour);
	$("#titlethreeTwo").text(minutes);
	$("#titlethreeThree").text(seconds);
},1000);

var count =0;
function run(){
	count++;
	count = count==2?0:count;
	for (var i = 0;i<2;i++) {
		$(".PicOneOne").eq(i).css("display","none").fadeOut(1000);
	}
	$(".PicOneOne").eq(count).css("display","block").fadeIn(1000);
	
}
setInterval(run,1000);
var lef = 0;

$(".slider_control_next").on("click",function(){
	lef = lef-800;
	$(".seckill-item").css("left",lef);
	if (lef == -2400) {
		lef = 0;
		$(".seckill-item").css("left",lef);
		$(".seckill-item").css("transition","none");
		setTimeout(function(){
			$(".seckill-item").css("transition","left 0.5s");
		},100);
	}
});

$(".slider_control_prev").on("click",function(){
	lef = lef+800;
	$(".seckill-item").css("left",lef);
	if (lef == 800) {
		lef = -1600;
		$(".seckill-item").css("left",lef);
		$(".seckill-item").css("transition","none");
		setTimeout(function(){
			$(".seckill-item").css("transition","left 0.5s");
		},100);
	}
	
});

$(".ToTop").onclick = function () {
	// 回到顶部
	document.documentElement.scrollTop = 0;
};