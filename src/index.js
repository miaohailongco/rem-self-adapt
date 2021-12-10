class RemSelfAdapt {
	constructor(parts, useDpr) {
		this.parts = parts // 将屏幕所分成的份数
		this.useDpr = useDpr // 是否考虑dpr
		// 如果没有parts，则默认为7.5
		if (!this.parts) {
			this.parts = 7.5
		}
		if (typeof this.useDpr != 'boolean') {
			// 如果dpr没有赋值，则默认为true
			this.useDpr = true
		}
	}

	setRem() {
		var dpr, rem, scale;
		var html = document.documentElement;
		var metaEle = document.querySelector('meta[name="viewport"]');

		dpr = 1;
		rem = window.innerWidth / this.parts;
		scale = 1 / dpr;

		// 设置viewport，进行缩放，达到高清效果
		if (!metaEle) {
			metaEle = document.createElement('meta'); //创建
			metaEle.setAttribute("name", "viewport");
			metaEle.setAttribute("content", 'width=device-width,user-scalable=no, initial-scale=' + scale +
				',maximum-scale=' + scale + ', minimum-scale=' + scale);
			document.getElementsByTagName("head")[0].appendChild(metaEle);
		} else {
			metaEle.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale +
				',maximum-scale=' + scale + ', minimum-scale=' + scale);
		}

		// 设置data-dpr属性，留作的css hack之用
		html.setAttribute('data-dpr', dpr);

		// 动态写入样式
		html.style.fontSize = rem + 'px'

		// 给js调用的，某一dpr下rem和px之间的转换函数
		window.rem2px = function(v) {
			v = parseFloat(v);
			return v * rem;
		};
		window.px2rem = function(v) {
			v = parseFloat(v);
			return v / rem;
		};

		window.dpr = dpr;
		window.rem = rem;
	}

	removeRem() {
		var html = document.documentElement;
		var metaEle = document.querySelector('meta[name="viewport"]');
		// 重置meta元素中的视口设置
		metaEle.setAttribute("content",
			'width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');

		// 清除对根元素的设置
		html.removeAttribute('data-dpr')
		html.removeAttribute('style')

		// 清除设置在window中的rem和dpr变量
		delete window.rem
		delete window.dpr
	}
}

module.exports = RemSelfAdapt