/**
 * Created by wdq on 17/3/17.
 */
var dropload='';
var counter = 0;
var num = 4;// 每页展示4个
var pageStart = 0,pageEnd = 0;
function refresh(callback){
    dropload=$('.list-scroll-wrap').dropload({
        scrollArea : window,
        distance:10,
        threshold :500,
        autoLoad:true,
        domDown:{
            domClass : 'down-load',
            domRefresh : '<div class="dropload-refresh">上拉加载更多</div>',
            domLoad : '<div class="dropload-load"></div>',
            domNoData : '<div class="dropload-noData">哦～,已经没有了!</div>'
        },
        loadDownFn : callback
    });
}