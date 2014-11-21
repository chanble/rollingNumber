/*
 * jQuery.rollingNumber.js
 * @author:chen
 * @date: 2014-10-31
 * @version:0.0.1
 */
(function($){
	$.fn.rollingNumber = function(opts){
		$.each(this, function (i, v){
			return new RollingNumber($(v),opts);
		});
	};
	var RollingNumber = function(el, opts){
		var that = this;
		var defaultOpts = {
			'hight' : '22',
			'width' : '16',//一个数字的宽度
			'dataType' : 'url',//url ,local
			'url' : 'http://www.youwebsite.com/api/',//url ,local
			'intervalTime' : '3',//间隔时间
			'numberSize' : '3',//数字位数
		};
		this.options = $.extend(false,defaultOpts, opts);
		this.init(el, this.options);
	};
	RollingNumber.prototype = {
		init: function(el, options){
			console.log(el);
			var allNumbers = this._initAllNumber(options.numberSize);
			for(var e in allNumbers){
				el.append(allNumbers[e]);
			}
		},
		_initAllNumber: function(numberSize){
			var numbers = new Array();
			for(var i = 0; i < numberSize; i++){
				numbers.push(this._initNumber());
			}
			return numbers;
		},
		_initNumber: function(){
			var mataEls = this._initMetaNumber();
			var bitElDiv = $('<div class="rollingNumber_items" style="position:relative;float:left;">' + mataEls + '</div>');
			bitElDiv.css('width', this.options.width);
			var bitEl = $('<span class="rollingNumber_bit"></span>')
				.html(bitElDiv);
			return bitEl;
		},
		//生成没个位置的全部数字0-9
		_initMetaNumber: function(){
			var result = '';
			for(var i = 0; i < 10; i++){
				result += '<span class="rollingNumber_item">'+ i + '</span>';
			}
			return result;
		}
	};
})(jQuery);
