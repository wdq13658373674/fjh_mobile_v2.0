/**
 * Created by ajay on 2017/4/24.
 */
var tips=$('.err-tip'),
    errMsg='';
function checkMsg(){
    $('.form-box .input').each(function(index){
        var self=$(this)
            ,inx=index;

        self.blur(function(){
            self.parent().removeClass('active');
            tips.eq(inx).text('');

            if(this.value==''){
                errMsg='不能为空!';
                errTips(errMsg,inx,self);
            }

            if(self.is('#phone') ){
                if(this.value != '' && !is_mobile(this.value)){
                    errMsg='电话号码输入错误!';
                    errTips(errMsg,inx,self);
                }
            }

            if(self.is('#name')){
                if(this.value != '' && !is_name(this.value)){
                    errMsg='姓名格式有误!';
                    errTips(errMsg,inx,self);
                }
            }

            if(self.is('#input-value')){
                if(this.getAttribute("data-value")==0){
                    errMsg='请选择购买项目!';
                    errTips(errMsg,inx,self);
                }

            }

        });

    })
}

/*错误信息*/
function errTips(errMsg,inx,self){
    tips.eq(inx).text(errMsg);
    self.parent().addClass('active');
}
checkMsg();
