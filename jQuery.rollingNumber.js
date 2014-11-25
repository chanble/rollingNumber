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
			'number' : 123,//数字位数
		};

		//设置数字
		//number数字，如果number用0-9,还可以传第二个参数表示第几位(从左数)
		this.setNumber = function(newNum){
			if(newNum < 0){
				console.error('"newNum" is not a positive number');
				return ;
			}
			if(newNum < 10 && arguments.length > 1){
				console.log(arguments);
				var n = arguments[1];
				var v = arguments[0];
				var top_px = setItemTop(v);
				this.el.find('div.rollingNumber_item').eq(n).css('top', top_px);
			}else{
				var numberString = newNum.toString();
				console.log(numberString);
				var pre0count = this.options.numberSize - numberString.length;
				numberString = (function(prec){
					var result = '';
					for(var i = 0; i < prec; i++){
						result += '0';
					}
					return result;
				})(pre0count) + numberString;
				console.log()
				for(var i = 0; i < numberString.length; i++){
					this.setNumber(numberString[i], i);
				}
			}
		};

		this.options = $.extend(false,defaultOpts, opts);
		this.options.numberSize = this.options.number.toString().length;
		this.el = el;
		init(el, this.options);
		this.setNumber(12);
		function init(el, options){
			var allNumbers = _initAllNumber(options.numberSize);
			for(var e in allNumbers){
				el.append(allNumbers[e]);
			}
		};
		function _initAllNumber(numberSize){
			var numbers = new Array();
			for(var i = 0; i < numberSize; i++){
				numbers.push(_initNumber());
			}
			return numbers;
		};
		function _initNumber(){
			var mataEls = _initMetaNumber();
			var bitElDiv = $('<div class="rollingNumber_item">' + mataEls + '</div>');
			bitElDiv.css({'width':that.options.width});
			var bitEl = $('<span class="rollingNumber_bit"></span>')
			.html(bitElDiv);
			return bitEl;
		};
		//生成没个位置的全部数字0-9
		function _initMetaNumber(){
			var result = '';
			for(var i = 0; i < 10; i++){
				result += '<span style="display:block;">'+ i + '</span>';
			}
			return result;
		};
		function setItemTop(n){
			var height = $('.rollingNumber_item>span').height();
			return (-n * height).toString() + 'px';
		};
	}
})(jQuery);
