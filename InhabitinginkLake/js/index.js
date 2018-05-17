//适配
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 50 * (clientWidth / 320) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);




//加载
$(function(){
    var imgs = [
        "img/loading2.png","img/cuo1.png","img/cuo3.png",
        "img/cuo2.png","img/cuo4.png","img/dui1.png",
        "img/tc1.png","img/tc2.png","img/tc3.png",
        "img/tc4.png","img/a1.png","img/a2.png","img/a3.png","img/a4.png",
        "img/bg2.jpg","img/bird.png","img/bird2.png","img/boat2.png",
        "img/bridge.png","img/z0.png","img/z1.png","img/z2.png",
        "img/z3.png","img/z4.png","img/z5.png",
        "img/hy.png","img/te.png","img/yun3.png"
    ],
    n = imgs.length, i = 0;
    function loadImage(url,callback){
        var img = new Image();
        img.src = url;
        if(img.complete){
            callback();
            return;
        }
        img.onload = function(){
            callback();
            return;
        }
        img.onerror = function(){
            callback();
            return;
        }
    }
    function success(){
        if(i < n){
            i++;
        }
        var num = parseInt(i/n * 100);
        // console.log(num)
        document.getElementById("text").innerHTML = num + '%';
        // console.log(num)
        if(i == n){
            setTimeout(function(){
                $('#Loading').hide();
                if($('.index').length && $('.index').length>0){
                    goIndex();
                }
            },500);
            clearInterval(timeImage);
        }
    }
    var timeImage = setInterval(function(){
        loadImage(imgs[i],success);
    },50);
})


//全屏自适应
var winW = $(window).width();
var winH = $(window).height();
$DynFun = DynamicAttr('body');
function DynamicAttr(dynClassName) {
	$(dynClassName).height(winH);
}

$(function () {
	$DynFun;
});
$(window).resize(function () {
	$DynFun;
});



//音乐播放暂停
function changeAudio(){
	var audio = document.getElementById('music'); 
    if(audio.paused){
        audio.play();//audio.play();// 播放 
		$(".audio").addClass('rotate')
    }
    else{
        audio.pause();// 暂停
		$(".audio").removeClass('rotate')
    }
}

//解决微信端audio不自动播放
// function audioAutoPlay(id){  
//     var audio = document.getElementById(id);  
//     audio.play();  
//     document.addEventListener("WeixinJSBridgeReady", function () {  
//             audio.play();  
//     }, false);  
//     document.addEventListener('YixinJSBridgeReady', function() {  
//             audio.play();  
//     }, false);  
// }  
// audioAutoPlay('music'); 



//延迟动画
var bl = $('body').width()/320;
function goIndex(){
    $('.zm0,.zb0,.tree,.bird,.woman,.smoke').show();
    setTimeout(function(){
        $('.z0').fadeIn()
        zz(0);
    },5500)
    setTimeout(function() {
        $('.qiao').fadeIn(1000)
    }, 6500);
    setTimeout(function(){
        $('.click0').fadeIn();
        $('.qiao').removeClass('zy').addClass('sx')
    },9000)
}
function go(x){
    index0 = x;
    $('.index').animate({left:-320*bl*x},2000);
    setTimeout(function() {$('.page'+x+' .none').show();}, 2200);
    setTimeout(function() {$('.z'+x).fadeIn();zz(x)}, 6000);
    setTimeout(function(){$('.click'+x).fadeIn();},8500);
    if(index0==1){
        $('.qiao').animate({left:100*bl,top:$('body').height()*0.83},2000)
    }
    if(index0==5){
        setTimeout(function(){$('.gj').fadeIn(2000)},8000);
        $('.qiao').animate({left:80*bl,top:$('body').height()*0.83},2000)
    }
}




function zz(x){
    $('.z'+x+' .z').animate({left:-136},2500)
}


//判断对错
$('.tc .close').click(function(){
    $('.tc').hide();
    var index1 = index0;
    go(index1)
})
$('.tc .an').click(function(){
    if($(this).hasClass('correct')){
        $('.dui .anCh').attr('src','img/a'+index0+'.png');
        $('.dui').fadeIn();
    }else{
        $('.cuo .bgg').attr('src','img/cuo'+index0+'.png');
        $('.cuo').fadeIn();
    }
    index0++;
})
$('.dui a,.cuo a').click(function(){
    var index1 = index0;
    $('.dui,.cuo,.tc').hide();
    go(index1);
})

//阻止默认事件
document.addEventListener("touchmove", function(e) {
    e.preventDefault();
}, false);