function Code(a){this.opt=a,this.element=document.querySelector(this.opt.ele),this._time=this.opt._time,this.text="获取验证码",this.timer=null,this._className=this.opt._className,this.init()}function ImgCode(a){this.opt=a,this.ele=document.querySelector(this.opt.ele),this.showEle=document.querySelector(this.opt.showEle),this.arr=this.opt.str.split(""),this.len=this.opt.len,this.init()}function fn(a){for(var b=a.arr.length,c=[],d=0;d<a.len;d++)c.push(a.arr[Math.floor(Math.random()*b)]);var e=c.join("");a.showEle.innerHTML=e}$(function(){$("#index-sbtn").on("click",function(){location.href="changNum.html"})}),Code.prototype={init:function(){this.element.value=this.text,this.beginT()},beginT:function(){var a=this;this.element.addEventListener("click",function(){a.element.value=a._time+"s后重发",a.element.className+=a._className,timer=setInterval(function(){a._time--,a.element.disabled=!0,a.element.value=a._time+"s后重发",a._time<=0&&(a.element.value="重新获取验证码",clearInterval(timer),a._time=a.opt._time,a.element.disabled=!1,a.element.className=a.element.className.replace(a._className,""))},1e3)},!1)}},function(a){function b(b){var d={title:"",close:"",msg:"",btn:[{text:"确定",className:"ok"},{text:"取消",className:"no"}],btn1Event:null,btn2Event:null},d=a.extend({},d,b);c(d),e(d)}function c(b){var c=a('<div class="mask"></div><div class="dialog-box animated bounceInUp"><p class="dialog-title">'+b.title+'</p><h1 class="dialog-msg">'+b.msg+'</h1><div class="dialog-btn-wrap"></div></div>');a("body").prepend(c),d(b)}function d(b){if(0==b.btn.length)return!1;for(var c=0,d=b.btn.length;c<d;c++){var e=a('<span class="dialog-btn '+b.btn[c].className+'">'+b.btn[c].text+"</span>");a(".dialog-btn-wrap").append(e)}}function e(b){var c=b;a(".dialog-btn").on("click",function(){f()}),a(".ok").on("click",function(){c.btn1Event&&c.btn1Event()}),a(".no").on("click",function(){c.btn2Event&&c.btn2Event()})}function f(){a(".mask").remove(),a(".dialog-box").remove()}a.dialog=function(a){return new b(a)}}(jQuery),ImgCode.prototype={init:function(){this.bindEvent(),fn(this)},bindEvent:function(){var a=this;this.ele.addEventListener("click",function(){fn(a)},!1)}},$(function(){$(".user-id input").on("focus",function(){$(".question").hide(),$(".footer").hide()}),$(".ma").on("keyup",function(){var a=$(".user-id input").val(),b=$(".ma").val();""!=a&&""!=b&&$("#index-sbtn").addClass("blue m")}),$("#index-sbtn").on("click",function(){var a=$(".user-id input").val(),b=$(".ma").val();return""==a&&""==b?($.dialog({msg:"填写信息不完整！",btn:[{text:"确定",className:"ok"},{text:"取消",className:"no"}]}),$("#index-sbtn").removeClass("blue"),$(".user-id input").val(""),$(".ma").val(""),!1):"6688"!=a?($.dialog({msg:"填写信息错误！",btn:[{text:"确定",className:"ok"},{text:"取消",className:"no"}]}),$("#index-sbtn").removeClass("blue"),$(".user-id input").val(""),$(".ma").val(""),$("#index-sbtn").removeClass("blue"),!1):void(window.location.href="binding.html")})}),function(a){function b(){c()}function c(){function b(b){a(b).addClass("on").siblings().removeClass("on")}a(".money").on("click",".prestore",function(){a(".prestoreM").show(),a(".prestore").hide()}),a(".prestoreM").on("click","li",function(){var b=a(this).text();a(".prestore").text(b).show(),a(".prestoreM").hide()}),a(".money").on("click",".box-prestore",function(){b(a(this))}),a(".callShow").on("click","span",function(){b(a(this))}),a(".msg").on("click",".msg-tit",function(){a(".box-message").show()}),a(".form").on("click",".box-message",function(){a(".box-message").hide()});var c=[17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378],d="";a.each(c,function(a,b){d+="<li>"+b+"</li>"}),a(".list-nums").append(d),a(".phone-nums").on("click","li",function(){b(a(this));var c=a(this).text();a(".Code").val(c),a(".phone-nums").removeClass("on")}),a(".msg").on("click",".Code",function(){a(".phone-nums").addClass("on")}),a(".blue").on("click",function(){location.href="3g_tab.html"})}b()}(jQuery),$(function(){function a(){b(),c()}function b(){function a(a,b){$(a).on("click","li",function(){$(this).addClass(b).siblings().removeClass()})}a(".css-tab-nav","css-bg"),a("#css-add-price","css-on")}function c(){$("#css-add-tel").on("focus",function(){$(".css-add-btn").removeClass("gray").addClass("blue")}),$("#css-add-tel").on("blur",function(){var a=$("#css-add-tel").val(),b=/^1[3|5|7|8]\d{9}$/;b.test(a)?(alert("格式正确，可提交"),$(".css-add-btn").removeClass("gray").addClass("blue")):(alert("格式有误，请重新输入"),$(".css-add-btn").removeClass("blue").addClass("gray").addClass("css-btn"))})}a()});