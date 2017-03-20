/**
 * Created by wdq on 17/3/17.
 */
var dropload='';
// 页数
var page = 0;
// 每页展示5个
var size = 20;
$(function(){
    dropload=$('.list-scroll-wrap').dropload({
        scrollArea : window,
        threshold:1/3,
        autoLoad:true,
        domDown:{
            domClass : 'down-load',
            domRefresh : '<div class="dropload-refresh"></div>',
            domLoad : '<div class="dropload-load"></div>',
            domNoData : '<div class="dropload-noData">哦～,已经没有了!</div>'
        },
        loadDownFn : function(me){
            page++;
            var result='';

            $.ajax({
                type: 'GET',
                url: 'http://ons.me/tools/dropload/json.php?page='+page+'&size='+size,
                dataType: 'json',
                success: function(data){
                    var len=data.length;

                    if(len > 0){
                        for(var i=0;i<len;i++){
                            result +='<a href="#" class="news-list">'+ i +'</a>'
                        }
                    }else{
                        me.lock();// 锁定
                        me.noData();// 无数据
                    }

                    setTimeout(function(){
                        $('.list-scroll-box').append(result);
                        //必须重置
                        me.resetload();
                    },500)
                },
                error: function(xhr, type){
                    alert('加载失败!');
                    me.resetload();
                }
            });

            return false;
        }
    });
})