/*
 * jQuery.rollingNumber.js
 * @author:chen
 * @date: 2014-10-31
 * @version:0.0.1
 */
(function($){
	$.fn.rollingNumber = function(opts){
		$.each(this, function (i, v){
			var input = v;
			new auto_complete(input,opts);
		});
	}
	var RollingNumber = function(){
		var that = this,
		defaultOpts = {
			'hight' : '22',
			'width' : '16',
			'dataType' : 'url',//url ,local
			'url' : 'http://www.youwebsite.com/api/',//url ,local
			'intervalTime' : '3',//间隔时间
		},
	}
})(jQuery);