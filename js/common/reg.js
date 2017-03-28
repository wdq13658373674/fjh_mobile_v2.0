/**
 * Created by wdq on 17/3/16.
 */
/*
 * 获取验证码倒计时
 * */
var wait = 60;
var t;
function times() {
    if (wait == 0) {
        $("#send").removeClass("disabled");
        $("#send").html("获取验证码");
        wait = 60;
        clearTimeout(t);
    } else {
        //$('#send').unbind("click");
        $("#send").addClass("disabled");
        $("#send").html(wait+"秒后重发");
        wait--;
        t = setTimeout(function() {
            times()
        }, 1000)
    }
}

/*登陆注册表单验证*/
$(function(){
    var tips=$('.err-tip'),
        errMsg='';
    /*错误信息提示*/
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

            if(self.is('#pas')){
                if(this.value != '' && this.value.length < 6 || this.value.length >18){
                    errMsg='密码为6-18位!';
                    errTips(errMsg,inx,self);
                }
            }

            if(self.is('#pas-sure')){
                if(this.value != $('#pas').val()){
                    errMsg='密码输入不一致!';
                    errTips(errMsg,inx,self);
                }
            }

            if(self.is('#name')){
                if(this.value != '' && !is_name(this.value)){
                    errMsg='姓名格式有误!';
                    errTips(errMsg,inx,self);
                }
            }

            if(self.is('#IDcard')){
                if(this.value != '' && !is_card(this.value)){
                    errMsg='身份证号码格式有误!';
                    errTips(errMsg,inx,self);
                }
            }

            /*if(self.is('#rule')){
                if(!this.checked){
                    errMsg='请阅读并且同意《房计划注册协议》';
                    errTips(errMsg,inx,self);
                }
            }*/

            if(tips.text() == ''){
                $('#register').removeClass('disabled');
            }
        });
    })

    /*登陆提交*/
    $('#login').click(function(){
        $('.form-box .input').triggerHandler('blur');
        if(tips.text() != ''){
            return false;
        }
        alert('登陆成功');
    });

    /*注册提交*/
    $('#register').click(function(){
        var self=$(this)
            ,rule=$('#rule');

        $('.form-box .input').triggerHandler('blur');
        rule.triggerHandler('click');

        if(tips.text() != ''){
            self.addClass('disabled');
            return false;
        }else if(!rule.is(':checked')){
               alert('请同意注册协议！');
                return false;
        }
        alert('注册成功');
    });

    /*实名认证提交*/
    $('#submit').click(function(){
        $('.form-box .input').triggerHandler('blur');
        if(tips.text() != ''){
            return false;
        }
        alert('保存成功');
    });

    /*错误提示*/
    function errTips(errMsg,inx,self){
        tips.eq(inx).text(errMsg);
        self.parent().addClass('active');
    }
})
