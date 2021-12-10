!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RemSelfAdapt=e():t.RemSelfAdapt=e()}(window,(function(){return function(t){var e={};function c(n){if(e[n])return e[n].exports;var Q=e[n]={i:n,l:!1,exports:{}};return t[n].call(Q.exports,Q,Q.exports,c),Q.l=!0,Q.exports}return c.m=t,c.c=e,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var Q in t)c.d(n,Q,function(e){return t[e]}.bind(null,Q));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RemSelfAdapt = function () {\n\tfunction RemSelfAdapt(parts, useDpr) {\n\t\t_classCallCheck(this, RemSelfAdapt);\n\n\t\tthis.parts = parts; // 将屏幕所分成的份数\n\t\tthis.useDpr = useDpr; // 是否考虑dpr\n\t\t// 如果没有parts，则默认为7.5\n\t\tif (!this.parts) {\n\t\t\tthis.parts = 7.5;\n\t\t}\n\t\tif (typeof this.useDpr != 'boolean') {\n\t\t\t// 如果dpr没有赋值，则默认为true\n\t\t\tthis.useDpr = true;\n\t\t}\n\t}\n\n\t_createClass(RemSelfAdapt, [{\n\t\tkey: 'setRem',\n\t\tvalue: function setRem() {\n\t\t\tvar dpr, rem, scale;\n\t\t\tvar html = document.documentElement;\n\t\t\tvar metaEle = document.querySelector('meta[name=\"viewport\"]');\n\n\t\t\tdpr = 1;\n\t\t\trem = window.innerWidth / this.parts;\n\t\t\tscale = 1 / dpr;\n\n\t\t\t// 设置viewport，进行缩放，达到高清效果\n\t\t\tif (!metaEle) {\n\t\t\t\tmetaEle = document.createElement('meta'); //创建\n\t\t\t\tmetaEle.setAttribute(\"name\", \"viewport\");\n\t\t\t\tmetaEle.setAttribute(\"content\", 'width=device-width,user-scalable=no, initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale);\n\t\t\t\tdocument.getElementsByTagName(\"head\")[0].appendChild(metaEle);\n\t\t\t} else {\n\t\t\t\tmetaEle.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale);\n\t\t\t}\n\n\t\t\t// 设置data-dpr属性，留作的css hack之用\n\t\t\thtml.setAttribute('data-dpr', dpr);\n\n\t\t\t// 动态写入样式\n\t\t\thtml.style.fontSize = rem + 'px';\n\n\t\t\t// 给js调用的，某一dpr下rem和px之间的转换函数\n\t\t\twindow.rem2px = function (v) {\n\t\t\t\tv = parseFloat(v);\n\t\t\t\treturn v * rem;\n\t\t\t};\n\t\t\twindow.px2rem = function (v) {\n\t\t\t\tv = parseFloat(v);\n\t\t\t\treturn v / rem;\n\t\t\t};\n\n\t\t\twindow.dpr = dpr;\n\t\t\twindow.rem = rem;\n\t\t}\n\t}, {\n\t\tkey: 'removeRem',\n\t\tvalue: function removeRem() {\n\t\t\tvar html = document.documentElement;\n\t\t\tvar metaEle = document.querySelector('meta[name=\"viewport\"]');\n\t\t\t// 重置meta元素中的视口设置\n\t\t\tmetaEle.setAttribute(\"content\", 'width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');\n\n\t\t\t// 清除对根元素的设置\n\t\t\thtml.removeAttribute('data-dpr');\n\t\t\thtml.removeAttribute('style');\n\n\t\t\t// 清除设置在window中的rem和dpr变量\n\t\t\tdelete window.rem;\n\t\t\tdelete window.dpr;\n\t\t}\n\t}]);\n\n\treturn RemSelfAdapt;\n}();\n\nmodule.exports = RemSelfAdapt;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZW1TZWxmQWRhcHQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJSZW1TZWxmQWRhcHQiLCJwYXJ0cyIsInVzZURwciIsImRwciIsInJlbSIsInNjYWxlIiwiaHRtbCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibWV0YUVsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImZvbnRTaXplIiwicmVtMnB4IiwidiIsInBhcnNlRmxvYXQiLCJweDJyZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsWTtBQUNMLHVCQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQjtBQUFBOztBQUMxQixPQUFLRCxLQUFMLEdBQWFBLEtBQWIsQ0FEMEIsQ0FDUDtBQUNuQixPQUFLQyxNQUFMLEdBQWNBLE1BQWQsQ0FGMEIsQ0FFTDtBQUNyQjtBQUNBLE1BQUksQ0FBQyxLQUFLRCxLQUFWLEVBQWlCO0FBQ2hCLFFBQUtBLEtBQUwsR0FBYSxHQUFiO0FBQ0E7QUFDRCxNQUFJLE9BQU8sS0FBS0MsTUFBWixJQUFzQixTQUExQixFQUFxQztBQUNwQztBQUNBLFFBQUtBLE1BQUwsR0FBYyxJQUFkO0FBQ0E7QUFDRDs7OzsyQkFFUTtBQUNSLE9BQUlDLEdBQUosRUFBU0MsR0FBVCxFQUFjQyxLQUFkO0FBQ0EsT0FBSUMsT0FBT0MsU0FBU0MsZUFBcEI7QUFDQSxPQUFJQyxVQUFVRixTQUFTRyxhQUFULENBQXVCLHVCQUF2QixDQUFkOztBQUVBUCxTQUFNLENBQU47QUFDQUMsU0FBTU8sT0FBT0MsVUFBUCxHQUFvQixLQUFLWCxLQUEvQjtBQUNBSSxXQUFRLElBQUlGLEdBQVo7O0FBRUE7QUFDQSxPQUFJLENBQUNNLE9BQUwsRUFBYztBQUNiQSxjQUFVRixTQUFTTSxhQUFULENBQXVCLE1BQXZCLENBQVYsQ0FEYSxDQUM2QjtBQUMxQ0osWUFBUUssWUFBUixDQUFxQixNQUFyQixFQUE2QixVQUE3QjtBQUNBTCxZQUFRSyxZQUFSLENBQXFCLFNBQXJCLEVBQWdDLHdEQUF3RFQsS0FBeEQsR0FDL0IsaUJBRCtCLEdBQ1hBLEtBRFcsR0FDSCxrQkFERyxHQUNrQkEsS0FEbEQ7QUFFQUUsYUFBU1Esb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNDLFdBQXpDLENBQXFEUCxPQUFyRDtBQUNBLElBTkQsTUFNTztBQUNOQSxZQUFRSyxZQUFSLENBQXFCLFNBQXJCLEVBQWdDLHVEQUF1RFQsS0FBdkQsR0FDL0IsaUJBRCtCLEdBQ1hBLEtBRFcsR0FDSCxrQkFERyxHQUNrQkEsS0FEbEQ7QUFFQTs7QUFFRDtBQUNBQyxRQUFLUSxZQUFMLENBQWtCLFVBQWxCLEVBQThCWCxHQUE5Qjs7QUFFQTtBQUNBRyxRQUFLVyxLQUFMLENBQVdDLFFBQVgsR0FBc0JkLE1BQU0sSUFBNUI7O0FBRUE7QUFDQU8sVUFBT1EsTUFBUCxHQUFnQixVQUFTQyxDQUFULEVBQVk7QUFDM0JBLFFBQUlDLFdBQVdELENBQVgsQ0FBSjtBQUNBLFdBQU9BLElBQUloQixHQUFYO0FBQ0EsSUFIRDtBQUlBTyxVQUFPVyxNQUFQLEdBQWdCLFVBQVNGLENBQVQsRUFBWTtBQUMzQkEsUUFBSUMsV0FBV0QsQ0FBWCxDQUFKO0FBQ0EsV0FBT0EsSUFBSWhCLEdBQVg7QUFDQSxJQUhEOztBQUtBTyxVQUFPUixHQUFQLEdBQWFBLEdBQWI7QUFDQVEsVUFBT1AsR0FBUCxHQUFhQSxHQUFiO0FBQ0E7Ozs4QkFFVztBQUNYLE9BQUlFLE9BQU9DLFNBQVNDLGVBQXBCO0FBQ0EsT0FBSUMsVUFBVUYsU0FBU0csYUFBVCxDQUF1Qix1QkFBdkIsQ0FBZDtBQUNBO0FBQ0FELFdBQVFLLFlBQVIsQ0FBcUIsU0FBckIsRUFDQyw4RkFERDs7QUFHQTtBQUNBUixRQUFLaUIsZUFBTCxDQUFxQixVQUFyQjtBQUNBakIsUUFBS2lCLGVBQUwsQ0FBcUIsT0FBckI7O0FBRUE7QUFDQSxVQUFPWixPQUFPUCxHQUFkO0FBQ0EsVUFBT08sT0FBT1IsR0FBZDtBQUNBOzs7Ozs7QUFHRnFCLE9BQU9DLE9BQVAsR0FBaUJ6QixZQUFqQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVtU2VsZkFkYXB0IHtcclxuXHRjb25zdHJ1Y3RvcihwYXJ0cywgdXNlRHByKSB7XHJcblx0XHR0aGlzLnBhcnRzID0gcGFydHMgLy8g5bCG5bGP5bmV5omA5YiG5oiQ55qE5Lu95pWwXHJcblx0XHR0aGlzLnVzZURwciA9IHVzZURwciAvLyDmmK/lkKbogIPomZFkcHJcclxuXHRcdC8vIOWmguaenOayoeaciXBhcnRz77yM5YiZ6buY6K6k5Li6Ny41XHJcblx0XHRpZiAoIXRoaXMucGFydHMpIHtcclxuXHRcdFx0dGhpcy5wYXJ0cyA9IDcuNVxyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnVzZURwciAhPSAnYm9vbGVhbicpIHtcclxuXHRcdFx0Ly8g5aaC5p6cZHBy5rKh5pyJ6LWL5YC877yM5YiZ6buY6K6k5Li6dHJ1ZVxyXG5cdFx0XHR0aGlzLnVzZURwciA9IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFJlbSgpIHtcclxuXHRcdHZhciBkcHIsIHJlbSwgc2NhbGU7XHJcblx0XHR2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdHZhciBtZXRhRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKTtcclxuXHJcblx0XHRkcHIgPSAxO1xyXG5cdFx0cmVtID0gd2luZG93LmlubmVyV2lkdGggLyB0aGlzLnBhcnRzO1xyXG5cdFx0c2NhbGUgPSAxIC8gZHByO1xyXG5cclxuXHRcdC8vIOiuvue9rnZpZXdwb3J077yM6L+b6KGM57yp5pS+77yM6L6+5Yiw6auY5riF5pWI5p6cXHJcblx0XHRpZiAoIW1ldGFFbGUpIHtcclxuXHRcdFx0bWV0YUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTsgLy/liJvlu7pcclxuXHRcdFx0bWV0YUVsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XHJcblx0XHRcdG1ldGFFbGUuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCAnd2lkdGg9ZGV2aWNlLXdpZHRoLHVzZXItc2NhbGFibGU9bm8sIGluaXRpYWwtc2NhbGU9JyArIHNjYWxlICtcclxuXHRcdFx0XHQnLG1heGltdW0tc2NhbGU9JyArIHNjYWxlICsgJywgbWluaW11bS1zY2FsZT0nICsgc2NhbGUpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobWV0YUVsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZXRhRWxlLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICd3aWR0aD1kZXZpY2Utd2lkdGgsdXNlci1zY2FsYWJsZT1ubyxpbml0aWFsLXNjYWxlPScgKyBzY2FsZSArXHJcblx0XHRcdFx0JyxtYXhpbXVtLXNjYWxlPScgKyBzY2FsZSArICcsIG1pbmltdW0tc2NhbGU9JyArIHNjYWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyDorr7nva5kYXRhLWRwcuWxnuaAp++8jOeVmeS9nOeahGNzcyBoYWNr5LmL55SoXHJcblx0XHRodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1kcHInLCBkcHIpO1xyXG5cclxuXHRcdC8vIOWKqOaAgeWGmeWFpeagt+W8j1xyXG5cdFx0aHRtbC5zdHlsZS5mb250U2l6ZSA9IHJlbSArICdweCdcclxuXHJcblx0XHQvLyDnu5lqc+iwg+eUqOeahO+8jOafkOS4gGRwcuS4i3JlbeWSjHB45LmL6Ze055qE6L2s5o2i5Ye95pWwXHJcblx0XHR3aW5kb3cucmVtMnB4ID0gZnVuY3Rpb24odikge1xyXG5cdFx0XHR2ID0gcGFyc2VGbG9hdCh2KTtcclxuXHRcdFx0cmV0dXJuIHYgKiByZW07XHJcblx0XHR9O1xyXG5cdFx0d2luZG93LnB4MnJlbSA9IGZ1bmN0aW9uKHYpIHtcclxuXHRcdFx0diA9IHBhcnNlRmxvYXQodik7XHJcblx0XHRcdHJldHVybiB2IC8gcmVtO1xyXG5cdFx0fTtcclxuXHJcblx0XHR3aW5kb3cuZHByID0gZHByO1xyXG5cdFx0d2luZG93LnJlbSA9IHJlbTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVJlbSgpIHtcclxuXHRcdHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0dmFyIG1ldGFFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpO1xyXG5cdFx0Ly8g6YeN572ubWV0YeWFg+e0oOS4reeahOinhuWPo+iuvue9rlxyXG5cdFx0bWV0YUVsZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsXHJcblx0XHRcdCd3aWR0aD1kZXZpY2Utd2lkdGgsdXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMCcpO1xyXG5cclxuXHRcdC8vIOa4hemZpOWvueagueWFg+e0oOeahOiuvue9rlxyXG5cdFx0aHRtbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZHByJylcclxuXHRcdGh0bWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcblxyXG5cdFx0Ly8g5riF6Zmk6K6+572u5Zyod2luZG935Lit55qEcmVt5ZKMZHBy5Y+Y6YePXHJcblx0XHRkZWxldGUgd2luZG93LnJlbVxyXG5cdFx0ZGVsZXRlIHdpbmRvdy5kcHJcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVtU2VsZkFkYXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}])}));