/*
 * jQuery.rollingNumber.js
 * @author:chen
 * @date: 2014-10-31
 * @version:0.0.1
 */
(function($){
	$.fn.rollingNumber = function(opts){
		$.each(this, function (i, v){
			new auto_complete(v,opts);
		});
	};
	var RollingNumber = function(el, opts){
		var that = this,
		defaultOpts = {
			'hight' : '22',
			'width' : '16',
			'dataType' : 'url',//url ,local
			'url' : 'http://www.youwebsite.com/api/',//url ,local
			'intervalTime' : '3',//间隔时间
			'numberSize' : '3',//数字位数
		},
		options = $.extends(false,defaultOpts, opts);
		this.init(el, options);
	},
	RollingNumber.protetype = {
		init: function(el, options){


		},
		_initAllNumber: function(numberSize){
			var numbers = new array();
			for(var i = 0; i < numberSize; i++){
				numbers.push(this._initNumber());
			}
			return numbers;
		},
		_initNumber: function(){
			var bitEl = $('<span class="rollingNumber_bit"><div class="rollingNumber_items" style="position:relative;"></div></span>');
			return bitEl;
		}
	};
})(jQuery);
