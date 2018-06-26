/**
 * Created by andy on 2017/11/28.
 */
$(function () {
    var $targetObj = $('#move-box');
    var box=$('.select-num-box');
    var floor=$('.barnner');
    var floor_num=$('.barnner .num');
    var pubScale=1;

    //获取容器宽和高
    var boxWidth=box.width();
    var boxheight=$(".page-group").height()-$(".nav").height()-$(".house-select-wrap").height();

    //获取移动容器宽和高
    var moveWidth=$targetObj.width();
    var moveheight=$targetObj.height();

    //楼层高度
    var floorHeight=floor_num.eq(0).height();

    //按钮容器高度
    var btnHeight=$(".bottom-msg").height();

    //计算左、上移动距离
    var moveLeft=moveWidth-boxWidth;
    var moveTop=moveheight-boxheight+btnHeight+20;

    //初始化设置
    cat.touchjs.init($targetObj, function (left, top, scale, rotate) {
        $targetObj.css({
            left: left,
            top: top,
            'transform': 'scale(' + scale + ')',
            '-webkit-transform': 'scale(' + scale + ')'
        });
    });
    //初始化拖动手势
    cat.touchjs.drag($targetObj, function (left, top) {

        moveLeft=(moveWidth*pubScale)-boxWidth;
        moveTop=(moveheight*pubScale)-boxheight+btnHeight+20;

        if(moveLeft<0 || left>0){
            left=0;
            cat.touchjs.left=0;
        }

        if(moveTop<0 || top>0){
            top=0;
            cat.touchjs.top=0;
        }

        if(Math.abs(left)>=moveLeft && Math.abs(left)>0){
            l=moveLeft*-1;
            left=l;
            cat.touchjs.left=l;
        }

        if(Math.abs(top)>=moveTop && Math.abs(top)>0){
            t=moveTop*-1;
            top=t;
            cat.touchjs.top=t;
        }
//
        $targetObj.animate({left:left+"px",top:top+"px"},300);
        floor.animate({top:top+"px"},200);
    });
    //初始化缩放手势（不需要就注释掉）
    cat.touchjs.scale($targetObj, function (scale) {

        if(scale<0.5){
            scale=0.5;
            cat.touchjs.scaleVal=0.5;
            $targetObj.css({
                'transform': 'scale(' + scale + ')',
                '-webkit-transform': 'scale(' + scale + ')'
            });
        }

        if(pubScale>scale){
            $targetObj.animate({left:0,top:0},300);
            floor.animate({top:0},300);
        }

        if(scale>2){
            scale=2;
            cat.touchjs.scaleVal=2;
            $targetObj.css({
                'transform': 'scale(' + scale + ')',
                '-webkit-transform': 'scale(' + scale + ')',
            });
        }
        fh=floorHeight*scale;
        floor_num.css({"height":fh+"px","line-height":fh+"px"}).height(fh);

        pubScale=scale;
    });
});
