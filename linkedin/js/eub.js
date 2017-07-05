
(function(window,undefined){
    /**
    * 全站命名空间
    * @copyright 北京宏图世展网络科技服务有限公司
    * @author eub前端
    * @date 20150617
    * @global
    * @namespace eub
    */
    var eub = window.eub || (window.eub = {}),
        register,
        tools;



    /**
     * 注册空间
     * @param  {string} namespace 要注册的名称, 以 . 分隔
     * @return {object}           注册后的空间对象
     *
     * @name eub.register
     * 
     * @memberOf eub
     * @function
     * @example
     *     1, eub.register("eub.dell") => {};
     *     2, eub.register("eub.canon") => {};
     *     3, eub.register("eub.kindle") => {};
     */
    register = eub.register = function(namespace){
        var namespace = namespace.split('.'), //把字符串转数组
            len = namespace.length, //一看就知道 数组长度
            obj = window;

        for(var i=0; i<len; i++){
            obj = obj[namespace[i]] = obj[namespace[i]] || {};
        }
        return obj;
    }



    /**
     * 工具方法
     * @memberOf eub
     * @namespace eub.tools
     */
    tools = register('eub.tools')




    /**
     * ajax判断防止来续请求
     * @memberOf eub
     * @namespace eub.tools.isCAjax
     */
    tools.isCAjax = true;




    /**
     * ajax请求
     * @memberOf msc.tools
     * @namespace eub.tools.ajax
     * @param {string} type 传递方法是get 或者 post
     * @param {string} url 请求地址
     * @param {object} datas 传对象 传值给后台 
     * @param {functions} callback 回调函数
     * @function
     * @example
     *     var datas = {
     *         "data1" : "data1",
     *         "data2" : "data2"
     *     }
     *     eub.tools.ajax("url",datas,function(data){
     *        this is callback;
     *     });
     */
    tools.ajax = function(type, url,datas,callback){
     
        if(tools.isCAjax == false){//防止连续请求
            return;
        }
        var _date = new Date();
            _date = _date.getTime();//时间戳

        $.ajax({
            type: (type ? type : "get"),
            data: datas,
            dataType: 'json',
            url: url + "?t=" + _date,
            success: function(data){
                if(data.error == 0){
                    if(callback){
                        return callback(data);
                    }
                } else{
                    alert(data.msg);
                }
                tools.isCAjax = true;
            },
            error: function(){
                tools.isCAjax = true;
            }
        });
    }



    /**
     * 弹窗关闭打开
     * @memberOf msc.tools
     * @namespace eub.tools.popup
     * @param {string} dom 传入那个元素的class或者id
     * @param {boolean} boo true 是打开弹窗  false关闭弹窗
     * @param {string} attrname 传入标签属性名 属性值是你要弹窗的class或者id 
     * @param {boolean} callback 回调函数
     * @function
     * @example
     *     1. eub.tools.popup($('.div'),true);//出弹窗
     */
    tools.popup = function(dom,boo,attrname,callback){
        $(dom).on('click',function(){
            var dataPopup = $(this).attr(attrname); //=>.poput

            if($.isFunction(callback)){
                callback();
            };

            boo ? $(dataPopup).show() : $(dataPopup).hide();
        })
    }

    /**
     * 解析URL, 获取地址栏参数
     * @param  {string} name 要获取的参数名, 可以为空则表示解析url为对象
     * @param  {string} [url=location.URL]  被解析的url, 如果为空则使用当面页面的url
     * @return {string}      得到的值, 或者解析后的对象
     *
     * @memberOf eub.tools
     * @function
     * @example
     *     1:
     *         url: index.php?a=1&b=2&c=3
     *         eub.tools.queryUrl("a") => 2
     *         eub.tools.queryUrl("b") => 3
     *         eub.tools.reuqest("xx") => ""
     *         eub.tools.queryUrl() => {a:1,b:2,c:3}
     *     2:
     *         eub.tools.queryUrl("a","?a=1&b=2&c=3") => 1
     *     3:
     *         eub.tools.queryUrl("", "?a=1&b=2&c=3") => {a:1, b:2, c:3}
     */

    tools.queryUrl = function(name, url) {
        url = url ? (url.indexOf("?") > -1 ? url.substr(url.indexOf("?") + 1) : url) : location.search.substr(1);
        var results;
        if (name) {
            results = url.match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"));
            results = results === null ? "" : decodeURIComponent(results[2]);
        } else {
            results = {};
            if (url) {
                var params = url.split('&'),
                    qrs2,
                    i = 0,
                    len = params.length;
                for (i = 0; i < len; i++) {
                    qrs2 = params[i].split('=');
                    results[qrs2[0]] = (qrs2[1] === undefined ? '' : decodeURIComponent(qrs2[1]));
                }
            }
        }
        return results;
    }


})(window);
