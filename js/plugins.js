/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


 /*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function(e){function u(){r=false;for(var n=0;n<t.length;n++){var i=e(t[n]).filter(function(){return e(this).is(":appeared")});i.trigger("appear",[i]);if(o){var s=o.not(i);s.trigger("disappear",[s])}o=i}}var t=[];var n=false;var r=false;var i={interval:250,force_process:false};var s=e(window);var o;e.expr[":"]["appeared"]=function(t){var n=e(t);if(!n.is(":visible")){return false}var r=s.scrollLeft();var i=s.scrollTop();var o=n.offset();var u=o.left;var a=o.top;if(a+n.height()>=i&&a+(n.data("appear-bottom-offset")||0)<=i+s.height()&&u+n.width()>=r&&u-(n.data("appear-left-offset")||0)<=r+s.width()){return true}else{return false}};e.fn.extend({appear:function(s){var o=e.extend({},i,s||{});var a=this.selector||this;if(!n){var f=function(){if(r){return}r=true;setTimeout(u,o.interval)};e(window).scroll(f).resize(f);n=true}if(o.force_process){setTimeout(u,o.interval)}t.push(a);return e(a)}});e.extend({force_appear:function(){if(n){u();return true}return false}})})(jQuery);

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it	
		function update (){
			
			$this.each(function(){
								
				firstTop = $this.offset().top;
			});
	
			if (outerHeight) {
				getHeight = function(jqo) {
					return jqo.outerHeight(true);
				};
			} else {
				getHeight = function(jqo) {
					return jqo.height();
				};
			}
				
			// setup defaults if arguments aren't specified
			if (arguments.length < 1 || xpos === null) xpos = "50%";
			if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
			if (arguments.length < 3 || outerHeight === null) outerHeight = true;
			
			// function to be called whenever the window is scrolled or resized
			
				var pos = $window.scrollTop();				
	
				$this.each(function(){
					var $element = $(this);
					var top = $element.offset().top;
					var height = getHeight($element);
	
					// Check if totally above or totally below viewport
					if (top + height < pos || top > pos + windowHeight) {
						return;
					}
					
					$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
					
				});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);


(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

/*
* jQuery Background video plugin for jQuery
* ---
* Copyright 2011, Victor Coulon (http://victorcoulon.fr)
* Released under the MIT, BSD, and GPL Licenses.
* based on jQuery Plugin Boilerplate 1.3
*/
(function(e){e.backgroundVideo=function(t,n){var r={videoid:"video_background"};var i=this;i.settings={};var s=function(){i.settings=e.extend({},r,n);i.el=t;o()};var o=function(){var t="";t+='<video id="'+i.settings.videoid+'" preload="auto" autoplay="autoplay" loop="loop"';if(i.settings.poster){t+=' poster="'+i.settings.poster+'" '}t+='style="display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:-100;width:100%;height:100%;">';for(var n=0;n<i.settings.types.length;n++){t+='<source src="'+i.settings.path+i.settings.filename+"."+i.settings.types[n]+'" type="video/'+i.settings.types[n]+'" />'}t+="bgvideo</video>";i.el.prepend(t);i.videoEl=document.getElementById(i.settings.videoid);i.$videoEl=e(i.videoEl);i.$videoEl.fadeIn(2e3);u()};var u=function(){var e=a();i.$videoEl.width(e*i.settings.width);i.$videoEl.height(e*i.settings.height);if(typeof i.settings.align!=="undefined"){f()}};var a=function(){var t=e(window).width();var n=e(window).height();var r=t/n;var s=i.settings.width/i.settings.height;var o=n/i.settings.height;if(r>=s){o=t/i.settings.width}return o};var f=function(){var t=(e(window).width()>>1)-(i.$videoEl.width()>>1)|0;var n=(e(window).height()>>1)-(i.$videoEl.height()>>1)|0;if(i.settings.align=="centerXY"){i.$videoEl.css({left:t,top:n});return}if(i.settings.align=="centerX"){i.$videoEl.css("left",t);return}if(i.settings.align=="centerY"){i.$videoEl.css("top",n);return}};s();e(window).resize(function(){u()});i.$videoEl.bind("ended",function(){this.play()})}})(jQuery);

/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.6
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, All Rights Reserved
* 
* http://mixitup.io
*/

(function(d){function r(e,c,l,b,a){function f(){n.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");c&&x(c,l,b,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];v.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||v.css({display:"none",opacity:"0"});n.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+
(a.resizeContainer?"height":""));"list"==a.layoutMode?(p.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(p.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){v.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;a.filter=e;if("function"==typeof a.onMixStart){var g=a.onMixStart.call(this,
a);a=g?g:a}for(var k=a.transitionSpeed,g=0;2>g;g++){var h=0==g?h=a.prefix:"";a.transition[h+"transition"]="all "+k+"ms linear";a.transition[h+"transform"]=h+"translate3d(0,0,0)";a.perspective[h+"perspective"]=a.perspectiveDistance+"px";a.perspective[h+"perspective-origin"]=a.perspectiveOrigin}var w=a.targetSelector,v=b.find(w);v.each(function(){this.data={}});var n=v.parent();n.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");
"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");g="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<g.indexOf("fade")?"0":"",a.scale=-1<g.indexOf("scale")?"scale(.01)":"",a.rotateZ=
-1<g.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<g.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<g.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<g.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<g.indexOf("grayscale")?"grayscale(100%)":"");var p=d(),s=d(),t=[],r=!1;"string"===typeof e?t=z(e):(r=!0,d.each(e,function(a){t[a]=z(this)}));"or"==a.filterLogic?(""==t[0]&&t.shift(),1>t.length?s=s.add(b.find(w+":visible")):v.each(function(){var a=d(this);if(r){var b=0;d.each(t,function(d){this.length?
a.is("."+this.join(", ."))&&b++:0<b&&b++});b==t.length?p=p.add(a):s=s.add(a)}else a.is("."+t.join(", ."))?p=p.add(a):s=s.add(a)})):(p=p.add(n.find(w+"."+t.join("."))),s=s.add(n.find(w+":not(."+t.join(".")+"):visible")));e=p.length;var u=d(),q=d(),m=d();s.each(function(){var a=d(this);"none"!=a.css("display")&&(u=u.add(a),m=m.add(a))});if(p.filter(":visible").length==e&&!u.length&&!c){if(a.origLayout==a.layoutMode)return f(),!1;if(1==p.length)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),
m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),m.css("display",a.targetDisplayGrid)),f(),!1}a.origHeight=n.height();if(p.length){b.removeClass(a.failClass);p.each(function(){var a=d(this);"none"==a.css("display")?q=q.add(a):m=m.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),
m.css("display",a.targetDisplayGrid)),f(),!1;if(!window.atob)return f(),!1;v.css(a.clean);m.each(function(){this.data.origPos=d(this).offset()});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),q.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),q.css("display",a.targetDisplayGrid));q.each(function(){this.data.showInterPos=d(this).offset()});u.each(function(){this.data.hideInterPos=d(this).offset()});m.each(function(){this.data.preInterPos=
d(this).offset()});"list"==a.layoutMode?m.css("display",a.targetDisplayList):m.css("display",a.targetDisplayGrid);c&&x(c,l,b,a);if(c&&A(a.origSort,a.checkSort))return f(),!1;u.hide();q.each(function(a){this.data.finalPos=d(this).offset()});m.each(function(){this.data.finalPrePos=d(this).offset()});a.newHeight=n.height();c&&x("reset",null,b,a);q.hide();m.css("display",a.origDisplay);"block"==a.origDisplay?(b.addClass(a.listClass),q.css("display",a.targetDisplayList)):(b.removeClass(a.listClass),q.css("display",
a.targetDisplayGrid));a.resizeContainer&&n.css("height",a.origHeight+"px");e={};for(g=0;2>g;g++)h=0==g?h=a.prefix:"",e[h+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,e[h+"filter"]=a.blur+" "+a.grayscale;q.css(e);m.each(function(){var b=this.data,c=d(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var e={},k=0;2>k;k++){var h=
0==k?h=a.prefix:"";e[h+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(e)});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass)):(b.addClass(a.gridClass),b.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var e=0==c?e=a.prefix:"";b[e+"transition"]="all "+k+"ms ease-in-out";b.height=a.newHeight+"px"}n.css(b)}u.css("opacity",a.fade);q.css("opacity",1);q.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;
b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition-property"]=h+"transform, "+h+"filter, opacity";c[h+"transition-timing-function"]=a.easing+", linear, linear";c[h+"transition-duration"]=k+"ms";c[h+"transition-delay"]="0";c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[h+"filter"]="none"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});m.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-
b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition"]="all "+k+"ms "+a.easing;c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)e=0==c?e=a.prefix:"",b[e+"transition"]="all "+k+"ms "+a.easing+", "+e+"filter "+k+"ms linear, opacity "+k+"ms linear",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+
a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;u.css(b);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(a){if(-1<a.originalEvent.propertyName.indexOf("transform")||-1<a.originalEvent.propertyName.indexOf("opacity"))-1<w.indexOf(".")?d(a.target).hasClass(w.replace(".",""))&&f():d(a.target).is(w)&&f()})},10);a.failsafe=setTimeout(function(){a.mixing&&f()},k+400)}else{a.resizeContainer&&n.css("height",a.origHeight+"px");if(!window.atob)return f(),!1;
u=s;setTimeout(function(){n.css(a.perspective);if(a.resizeContainer){for(var c={},e=0;2>e;e++){var d=0==e?d=a.prefix:"";c[d+"transition"]="height "+k+"ms ease-in-out";c.height=a.minHeight+"px"}n.css(c)}v.css(a.transition);if(s.length){c={};for(e=0;2>e;e++)d=0==e?d=a.prefix:"",c[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,c[d+"filter"]=a.blur+" "+a.grayscale,c.opacity=a.fade;u.css(c);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(c){if(-1<c.originalEvent.propertyName.indexOf("transform")||
-1<c.originalEvent.propertyName.indexOf("opacity"))b.addClass(a.failClass),f()})}else a.mixing=!1},10)}}function x(e,c,l,b){function a(a,b){var c=isNaN(1*a.attr(e))?a.attr(e).toLowerCase():1*a.attr(e),d=isNaN(1*b.attr(e))?b.attr(e).toLowerCase():1*b.attr(e);return c<d?-1:c>d?1:0}function f(a){"asc"==c?k.prepend(a).prepend(" "):k.append(a).append(" ")}function g(a){a=a.slice();for(var b=a.length,c=b;c--;){var e=parseInt(Math.random()*b),d=a[c];a[c]=a[e];a[e]=d}return a}l.find(b.targetSelector).wrapAll('<div class="mix_sorter"/>');
var k=l.find(".mix_sorter");b.origSort.length||k.find(b.targetSelector+":visible").each(function(){d(this).wrap("<s/>");b.origSort.push(d(this).parent().html().replace(/\s+/g,""));d(this).unwrap()});k.empty();if("reset"==e)d.each(b.startOrder,function(){k.append(this).append(" ")});else if("default"==e)d.each(b.origOrder,function(){f(this)});else if("random"==e)b.newOrder.length||(b.newOrder=g(b.startOrder)),d.each(b.newOrder,function(){k.append(this).append(" ")});else if("custom"==e)d.each(c,function(){f(this)});
else{if("undefined"===typeof b.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;b.newOrder.length||(d.each(b.origOrder,function(){b.newOrder.push(d(this))}),b.newOrder.sort(a));d.each(b.newOrder,function(){f(this)})}b.checkSort=[];k.find(b.targetSelector+":visible").each(function(a){var c=d(this);0==a&&c.attr("data-checksum","1");c.wrap("<s/>");b.checkSort.push(c.parent().html().replace(/\s+/g,""));c.unwrap()});l.find(b.targetSelector).unwrap()}function B(e){for(var c=
["Webkit","Moz","O","ms"],d=0;d<c.length;d++)if(c[d]+"Transition"in e.style)return c[d];return"transition"in e.style?"":!1}function A(e,c){if(e.length!=c.length)return!1;for(var d=0;d<c.length;d++)if(e[d].compare&&!e[d].compare(c[d])||e[d]!==c[d])return!1;return!0}function z(e){e=e.replace(/\s{2,}/g," ");var c=e.split(" ");d.each(c,function(d){"all"==this&&(c[d]="mix_all")});""==c[0]&&c.shift();return c}var y={init:function(e){return this.each(function(){var c=window.navigator.appVersion.match(/Chrome\/(\d+)\./),
c=c?parseInt(c[1],10):!1,l=function(a){var b=a.parentElement,c=document.createElement("div"),d=document.createDocumentFragment();b.insertBefore(c,a);d.appendChild(a);b.replaceChild(a,c)};(c&&31==c||32==c)&&l(this);var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",
sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",
rotateY:"",rotateZ:"",blur:"",grayscale:""};e&&d.extend(b,e);this.config=b;d.support.touch="ontouchend"in document;d.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=d(this);var a=b.container;b.prefix=B(a[0]);b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";a.find(b.targetSelector).each(function(){b.origOrder.push(d(this))});if(b.sortOnLoad){var f;d.isArray(b.sortOnLoad)?(c=b.sortOnLoad[0],f=b.sortOnLoad[1],d(b.sortSelector+"[data-sort="+b.sortOnLoad[0]+"][data-order="+b.sortOnLoad[1]+
"]").addClass("active")):(d(b.sortSelector+"[data-sort="+b.sortOnLoad+"]").addClass("active"),c=b.sortOnLoad,b.sortOnLoad="desc");x(c,f,a,b)}for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.transition[c+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[c+"perspective"]=b.perspectiveDistance+"px",b.perspective[c+"perspective-origin"]=b.perspectiveOrigin;for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.clean[c+"transition"]="none";"list"==b.layoutMode?(a.addClass(b.listClass),b.origDisplay=b.targetDisplayList):
(a.addClass(b.gridClass),b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;f=b.showOnLoad.split(" ");d.each(f,function(){d(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});a.find(b.targetSelector).addClass("mix_all");"all"==f[0]&&(f[0]="mix_all",b.showOnLoad="mix_all");var g=d();d.each(f,function(){g=g.add(d("."+this))});g.each(function(){var a=d(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);a.css(b.transition)});setTimeout(function(){b.mixing=
!0;g.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;d(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=d(this),e=c.attr("data-sort"),f=c.attr("data-order");
if(!c.hasClass("active"))d(b.sortSelector).removeClass("active"),c.addClass("active");else if("random"!=e)return!1;a.find(b.targetSelector).each(function(){b.startOrder.push(d(this))});r(b.filter,e,f,a,b)}});d(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=d(this);if(!1==b.multiFilter)d(b.filterSelector).removeClass("active"),c.addClass("active"),b.filter=c.attr("data-filter"),d(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active");else{var e=c.attr("data-filter");
c.hasClass("active")?(c.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+e),"")):(c.addClass("active"),b.filter=b.filter+" "+e)}r(b.filter,null,null,a,b)}})})},toGrid:function(){return this.each(function(){var e=this.config;"grid"!=e.layoutMode&&(e.layoutMode="grid",r(e.filter,null,null,d(this),e))})},toList:function(){return this.each(function(){var e=this.config;"list"!=e.layoutMode&&(e.layoutMode="list",r(e.filter,null,null,d(this),e))})},filter:function(e){return this.each(function(){var c=
this.config;c.mixing||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,d(this),c))})},sort:function(e){return this.each(function(){var c=this.config,l=d(this);if(!c.mixing){d(c.sortSelector).removeClass("active");if(d.isArray(e)){var b=e[0],a=e[1];d(c.sortSelector+'[data-sort="'+e[0]+'"][data-order="'+e[1]+'"]').addClass("active")}else d(c.sortSelector+'[data-sort="'+e+'"]').addClass("active"),b=e,a="desc";l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))});
r(c.filter,b,a,l,c)}})},multimix:function(e){return this.each(function(){var c=this.config,l=d(this);multiOut={filter:c.filter,sort:null,order:"desc",layoutMode:c.layoutMode};d.extend(multiOut,e);c.mixing||(d(c.filterSelector).add(c.sortSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!==typeof multiOut.sort&&(d(c.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))})),
c.layoutMode=multiOut.layoutMode,r(multiOut.filter,multiOut.sort,multiOut.order,l,c))})},remix:function(e){return this.each(function(){var c=this.config,l=d(this);c.origOrder=[];l.find(c.targetSelector).each(function(){var b=d(this);b.addClass("mix_all");c.origOrder.push(b)});c.mixing||"undefined"===typeof e||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,l,c))})}};d.fn.mixitup=function(d,c){if(y[d])return y[d].apply(this,Array.prototype.slice.call(arguments,
1));if("object"===typeof d||!d)return y.init.apply(this,arguments)};d.fn.removeStyle=function(e){return this.each(function(){var c=d(this);e=e.replace(/\s+/g,"");var l=e.split(",");d.each(l,function(){var b=RegExp(this.toString()+"[^;]+;?","g");c.attr("style",function(a,c){if(c)return c.replace(b,"")})})})}})(jQuery);

(function($, window, undefined) {
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
    // requestAnimationFrame polyfill by Erik Möller
    // fixes from Paul Irish and Tino Zijdel
 
    var lastTime = 0,
        running,
        animate = function (elem) {
            if (running) {
                window.requestAnimationFrame(animate, elem);
                jQuery.fx.tick();
            }
        },
        vendors = ['ms', 'moz', 'webkit', 'o'];
 
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(fn, element) {
            var currTime = new Date().getTime(),
                delta = currTime - lastTime,
                timeToCall = Math.max(0, 16 - delta);
 
            var id = window.setTimeout(function() {
                    fn(currTime + timeToCall);
                },
                timeToCall
            );
 
            lastTime = currTime + timeToCall;
 
            return id;
        };
 
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
 
    jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !running) {
            running = true;
            animate(timer.elem);
        }
    };
 
    jQuery.fx.stop = function() {
        running = false;
    };
 
}(jQuery, this));

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

/*
jQuery - Royal Slider
*/

(function(e){function t(t,r){var i,s=this,o=window.navigator,u=o.userAgent.toLowerCase();s.uid=e.rsModules.uid++;s.ns=".rs"+s.uid;var a=document.createElement("div").style,f=["webkit","Moz","ms","O"],l="",c=0,h;for(i=0;i<f.length;i++)h=f[i],!l&&h+"Transform"in a&&(l=h),h=h.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[h+"RequestAnimationFrame"],window.cancelAnimationFrame=window[h+"CancelAnimationFrame"]||window[h+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-c)),i=window.setTimeout(function(){e(n+r)},r);c=n+r;return i});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)});s.isIPAD=u.match(/(ipad)/);s.isIOS=s.isIPAD||u.match(/(iphone|ipod)/);i=function(e){e=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:e[1]||"",version:e[2]||"0"}}(u);f={};i.browser&&(f[i.browser]=!0,f.version=i.version);f.chrome&&(f.webkit=!0);s._a=f;s.isAndroid=-1<u.indexOf("android");s.slider=e(t);s.ev=e(s);s._b=e(document);s.st=e.extend({},e.fn.royalSlider.defaults,r);s._c=s.st.transitionSpeed;s._d=0;!s.st.allowCSS3||f.webkit&&!s.st.allowCSS3OnWebkit||(i=l+(l?"T":"t"),s._e=i+"ransform"in a&&i+"ransition"in a,s._e&&(s._f=l+(l?"P":"p")+"erspective"in a));l=l.toLowerCase();s._g="-"+l+"-";s._h="vertical"===s.st.slidesOrientation?!1:!0;s._i=s._h?"left":"top";s._j=s._h?"width":"height";s._k=-1;s._l="fade"===s.st.transitionType?!1:!0;s._l||(s.st.sliderDrag=!1,s._m=10);s._n="z-index:0; display:none; opacity:0;";s._o=0;s._p=0;s._q=0;e.each(e.rsModules,function(e,t){"uid"!==e&&t.call(s)});s.slides=[];s._r=0;(s.st.slides?e(s.st.slides):s.slider.children().detach()).each(function(){s._s(this,!0)});s.st.randomizeSlides&&s.slides.sort(function(){return.5-Math.random()});s.numSlides=s.slides.length;s._t();s.st.startSlideId?s.st.startSlideId>s.numSlides-1&&(s.st.startSlideId=s.numSlides-1):s.st.startSlideId=0;s._o=s.staticSlideId=s.currSlideId=s._u=s.st.startSlideId;s.currSlide=s.slides[s.currSlideId];s._v=0;s.pointerMultitouch=!1;s.slider.addClass((s._h?"rsHor":"rsVer")+(s._l?"":" rsFade"));a='<div class="rsOverflow"><div class="rsContainer">';s.slidesSpacing=s.st.slidesSpacing;s._w=(s._h?s.slider.width():s.slider.height())+s.st.slidesSpacing;s._x=Boolean(0<s._y);1>=s.numSlides&&(s._z=!1);s._a1=s._z&&s._l?2===s.numSlides?1:2:0;s._b1=6>s.numSlides?s.numSlides:6;s._c1=0;s._d1=0;s.slidesJQ=[];for(i=0;i<s.numSlides;i++)s.slidesJQ.push(e('<div style="'+(s._l?"":i!==s.currSlideId?s._n:"z-index:0;")+'" class="rsSlide "></div>'));s._e1=a=e(a+"</div></div>");var p=s.ns,l=function(e,t,n,r,i){s._j1=e+t+p;s._k1=e+n+p;s._l1=e+r+p;i&&(s._m1=e+i+p)};i=o.pointerEnabled;s.pointerEnabled=i||o.msPointerEnabled;s.pointerEnabled?(s.hasTouch=!1,s._n1=.2,s.pointerMultitouch=Boolean(1<o[(i?"m":"msM")+"axTouchPoints"]),i?l("pointer","down","move","up","cancel"):l("MSPointer","Down","Move","Up","Cancel")):(s.isIOS?s._j1=s._k1=s._l1=s._m1="":l("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(s.hasTouch=!0,s._j1+=" touchstart"+p,s._k1+=" touchmove"+p,s._l1+=" touchend"+p,s._m1+=" touchcancel"+p,s._n1=.5,s.st.sliderTouch&&(s._f1=!0)):(s.hasTouch=!1,s._n1=.2));s.st.sliderDrag&&(s._f1=!0,f.msie||f.opera?s._g1=s._h1="move":f.mozilla?(s._g1="-moz-grab",s._h1="-moz-grabbing"):f.webkit&&-1!=o.platform.indexOf("Mac")&&(s._g1="-webkit-grab",s._h1="-webkit-grabbing"),s._i1());s.slider.html(a);s._o1=s.st.controlsInside?s._e1:s.slider;s._p1=s._e1.children(".rsContainer");s.pointerEnabled&&s._p1.css((i?"":"-ms-")+"touch-action",s._h?"pan-y":"pan-x");s._q1=e('<div class="rsPreloader"></div>');o=s._p1.children(".rsSlide");s._r1=s.slidesJQ[s.currSlideId];s._s1=0;s._e?(s._t1="transition-property",s._u1="transition-duration",s._v1="transition-timing-function",s._w1=s._x1=s._g+"transform",s._f?(f.webkit&&!f.chrome&&s.slider.addClass("rsWebkit3d"),s._y1="translate3d(",s._z1="px, ",s._a2="px, 0px)"):(s._y1="translate(",s._z1="px, ",s._a2="px)"),s._l?s._p1[s._g+s._t1]=s._g+"transform":(f={},f[s._g+s._t1]="opacity",f[s._g+s._u1]=s.st.transitionSpeed+"ms",f[s._g+s._v1]=s.st.css3easeInOut,o.css(f))):(s._x1="left",s._w1="top");var d;e(window).on("resize"+s.ns,function(){d&&clearTimeout(d);d=setTimeout(function(){s.updateSliderSize()},50)});s.ev.trigger("rsAfterPropsSetup");s.updateSliderSize();s.st.keyboardNavEnabled&&s._b2();s.st.arrowsNavHideOnTouch&&(s.hasTouch||s.pointerMultitouch)&&(s.st.arrowsNav=!1);s.st.arrowsNav&&(o=s._o1,e('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(o),s._c2=o.children(".rsArrowLeft").click(function(e){e.preventDefault();s.prev()}),s._d2=o.children(".rsArrowRight").click(function(e){e.preventDefault();s.next()}),s.st.arrowsNavAutoHide&&!s.hasTouch&&(s._c2.addClass("rsHidden"),s._d2.addClass("rsHidden"),o.one("mousemove.arrowshover",function(){s._c2.removeClass("rsHidden");s._d2.removeClass("rsHidden")}),o.hover(function(){s._e2||(s._c2.removeClass("rsHidden"),s._d2.removeClass("rsHidden"))},function(){s._e2||(s._c2.addClass("rsHidden"),s._d2.addClass("rsHidden"))})),s.ev.on("rsOnUpdateNav",function(){s._f2()}),s._f2());if(s._f1)s._p1.on(s._j1,function(e){s._g2(e)});else s.dragSuccess=!1;var v=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];s._p1.click(function(t){if(!s.dragSuccess){var r=e(t.target).attr("class");if(-1!==e.inArray(r,v)&&s.toggleVideo())return!1;if(s.st.navigateByClick&&!s._h2){if(e(t.target).closest(".rsNoDrag",s._r1).length)return!0;s._i2(t)}s.ev.trigger("rsSlideClick",t)}}).on("click.rs","a",function(e){if(s.dragSuccess)return!1;s._h2=!0;setTimeout(function(){s._h2=!1},3)});s.ev.trigger("rsAfterInit")}e.rsModules||(e.rsModules={uid:0});t.prototype={constructor:t,_i2:function(e){e=e[this._h?"pageX":"pageY"]-this._j2;e>=this._q?this.next():0>e&&this.prev()},_t:function(){var e;e=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<e&&(4>=this.numSlides?e=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(e=Math.floor((this.numSlides-1)/2)));this._y=e},_s:function(t,r){function i(e,t){t?u.images.push(e.attr(t)):u.images.push(e.text());if(f){f=!1;u.caption="src"===t?e.attr("alt"):e.contents();u.image=u.images[0];u.videoURL=e.attr("data-rsVideo");var n=e.attr("data-rsw"),r=e.attr("data-rsh");"undefined"!==typeof n&&!1!==n&&"undefined"!==typeof r&&!1!==r?(u.iW=parseInt(n,10),u.iH=parseInt(r,10)):s.st.imgWidth&&s.st.imgHeight&&(u.iW=s.st.imgWidth,u.iH=s.st.imgHeight)}}var s=this,o,u={},a,f=!0;t=e(t);s._k2=t;s.ev.trigger("rsBeforeParseNode",[t,u]);if(!u.stopParsing)return t=s._k2,u.id=s._r,u.contentAdded=!1,s._r++,u.images=[],u.isBig=!1,u.hasCover||(t.hasClass("rsImg")?(a=t,o=!0):(a=t.find(".rsImg"),a.length&&(o=!0)),o?(u.bigImage=a.eq(0).attr("data-rsBigImg"),a.each(function(){var t=e(this);t.is("a")?i(t,"href"):t.is("img")?i(t,"src"):i(t)})):t.is("img")&&(t.addClass("rsImg rsMainSlideImage"),i(t,"src"))),a=t.find(".rsCaption"),a.length&&(u.caption=a.remove()),u.content=t,s.ev.trigger("rsAfterParseNode",[t,u]),r&&s.slides.push(u),0===u.images.length&&(u.isLoaded=!0,u.isRendered=!1,u.isLoading=!1,u.images=null),u},_b2:function(){var e=this,t,n,r=function(t){37===t?e.prev():39===t&&e.next()};e._b.on("keydown"+e.ns,function(i){e._l2||(n=i.keyCode,37!==n&&39!==n||t||(r(n),t=setInterval(function(){r(n)},700)))}).on("keyup"+e.ns,function(e){t&&(clearInterval(t),t=null)})},goTo:function(e,t){e!==this.currSlideId&&this._m2(e,this.st.transitionSpeed,!0,!t)},destroy:function(t){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+" click");this.slider.data("royalSlider",null);e.removeData(this.slider,"royalSlider");e(window).off("resize"+this.ns);this.loadingTimeout&&clearTimeout(this.loadingTimeout);t&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(t,r){function i(r,i,u){r.isAdded?(s(i,r),o(i,r)):(u||(u=a.slidesJQ[i]),r.holder?u=r.holder:(u=a.slidesJQ[i]=e(u),r.holder=u),r.appendOnLoaded=!1,o(i,r,u),s(i,r),a._p2(r,u,t),r.isAdded=!0)}function s(e,n){n.contentAdded||(a.setItemHtml(n,t),t||(n.contentAdded=!0))}function o(e,t,n){a._l&&(n||(n=a.slidesJQ[e]),n.css(a._i,(e+a._d1+d)*a._w))}function u(e){if(c){if(e>h-1)return u(e-h);if(0>e)return u(h+e)}return e}var a=this,f,l,c=a._z,h=a.numSlides;if(!isNaN(r))return u(r);var p=a.currSlideId,d,v=t?Math.abs(a._o2-a.currSlideId)>=a.numSlides-1?0:1:a._y,m=Math.min(2,v),g=!1,y=!1,b;for(l=p;l<p+1+m;l++)if(b=u(l),(f=a.slides[b])&&(!f.isAdded||!f.positionSet)){g=!0;break}for(l=p-1;l>p-1-m;l--)if(b=u(l),(f=a.slides[b])&&(!f.isAdded||!f.positionSet)){y=!0;break}if(g)for(l=p;l<p+v+1;l++)b=u(l),d=Math.floor((a._u-(p-l))/a.numSlides)*a.numSlides,(f=a.slides[b])&&i(f,b);if(y)for(l=p-1;l>p-1-v;l--)b=u(l),d=Math.floor((a._u-(p-l))/h)*h,(f=a.slides[b])&&i(f,b);if(!t)for(m=u(p-v),p=u(p+v),v=m>p?0:m,l=0;l<h;l++)m>p&&l>m-1||!(l<v||l>p)||(f=a.slides[l])&&f.holder&&(f.holder.detach(),f.isAdded=!1)},setItemHtml:function(t,r){var i=this,s=function(){if(!t.images)t.isRendered=!0,t.isLoaded=!0,t.isLoading=!1,a(!0);else if(!t.isLoading){var r,s;t.content.hasClass("rsImg")?(r=t.content,s=!0):r=t.content.find(".rsImg:not(img)");r&&!r.is("img")&&r.each(function(){var r=e(this),i='<img class="rsImg" src="'+(r.is("a")?r.attr("href"):r.text())+'" />';s?t.content=e(i):r.replaceWith(i)});r=s?t.content:t.content.find("img.rsImg");l();r.eq(0).addClass("rsMainSlideImage");t.iW&&t.iH&&(t.isLoaded||i._q2(t),a());t.isLoading=!0;if(t.isBig)e("<img />").on("load.rs error.rs",function(t){e(this).off("load.rs error.rs");o([this],!0)}).attr("src",t.image);else{t.loaded=[];t.numStartedLoad=0;r=function(r){e(this).off("load.rs error.rs");t.loaded.push(this);t.loaded.length===t.numStartedLoad&&o(t.loaded,!1)};for(var u=0;u<t.images.length;u++){var f=e("<img />");t.numStartedLoad++;f.on("load.rs error.rs",r).attr("src",t.images[u])}}}},o=function(e,n){if(e.length){var r=e[0];if(n!==t.isBig)(r=t.holder.children())&&1<r.length&&c();else if(t.iW&&t.iH)u();else if(t.iW=r.width,t.iH=r.height,t.iW&&t.iH)u();else{var i=new Image;i.onload=function(){i.width?(t.iW=i.width,t.iH=i.height,u()):setTimeout(function(){i.width&&(t.iW=i.width,t.iH=i.height);u()},1e3)};i.src=r.src}}else u()},u=function(){t.isLoaded=!0;t.isLoading=!1;a();c();f()},a=function(){if(!t.isAppended&&i.ev){var e=i.st.visibleNearby,n=t.id-i._o;r||t.appendOnLoaded||!i.st.fadeinLoadedSlide||0!==n&&(!(e||i._r2||i._l2)||-1!==n&&1!==n)||(e={visibility:"visible",opacity:0},e[i._g+"transition"]="opacity 400ms ease-in-out",t.content.css(e),setTimeout(function(){t.content.css("opacity",1)},16));t.holder.find(".rsPreloader").length?t.holder.append(t.content):t.holder.html(t.content);t.isAppended=!0;t.isLoaded&&(i._q2(t),f());t.sizeReady||(t.sizeReady=!0,setTimeout(function(){i.ev.trigger("rsMaybeSizeReady",t)},100))}},f=function(){!t.loadedTriggered&&i.ev&&(t.isLoaded=t.loadedTriggered=!0,t.holder.trigger("rsAfterContentSet"),i.ev.trigger("rsAfterContentSet",t))},l=function(){i.st.usePreloader&&t.holder.html(i._q1.clone())},c=function(e){i.st.usePreloader&&(e=t.holder.find(".rsPreloader"),e.length&&e.remove())};t.isLoaded?a():r?!i._l&&t.images&&t.iW&&t.iH?s():(t.holder.isWaiting=!0,l(),t.holder.slideId=-99):s()},_p2:function(e,t,n){this._p1.append(e.holder);e.appendOnLoaded=!1},_g2:function(t,r){var i=this,s,o="touchstart"===t.type;i._s2=o;i.ev.trigger("rsDragStart");if(e(t.target).closest(".rsNoDrag",i._r1).length)return i.dragSuccess=!1,!0;!r&&i._r2&&(i._t2=!0,i._u2());i.dragSuccess=!1;if(i._l2)o&&(i._v2=!0);else{o&&(i._v2=!1);i._w2();if(o){var u=t.originalEvent.touches;if(u&&0<u.length)s=u[0],1<u.length&&(i._v2=!0);else return}else t.preventDefault(),s=t,i.pointerEnabled&&(s=s.originalEvent);i._l2=!0;i._b.on(i._k1,function(e){i._x2(e,r)}).on(i._l1,function(e){i._y2(e,r)});i._z2="";i._a3=!1;i._b3=s.pageX;i._c3=s.pageY;i._d3=i._v=(r?i._e3:i._h)?s.pageX:s.pageY;i._f3=0;i._g3=0;i._h3=r?i._i3:i._p;i._j3=(new Date).getTime();if(o)i._e1.on(i._m1,function(e){i._y2(e,r)})}},_k3:function(e,t){if(this._l3){var n=this._m3,r=e.pageX-this._b3,i=e.pageY-this._c3,s=this._h3+r,o=this._h3+i,u=t?this._e3:this._h,s=u?s:o,o=this._z2;this._a3=!0;this._b3=e.pageX;this._c3=e.pageY;"x"===o&&0!==r?this._f3=0<r?1:-1:"y"===o&&0!==i&&(this._g3=0<i?1:-1);o=u?this._b3:this._c3;r=u?r:i;t?s>this._n3?s=this._h3+r*this._n1:s<this._o3&&(s=this._h3+r*this._n1):this._z||(0>=this.currSlideId&&0<o-this._d3&&(s=this._h3+r*this._n1),this.currSlideId>=this.numSlides-1&&0>o-this._d3&&(s=this._h3+r*this._n1));this._h3=s;200<n-this._j3&&(this._j3=n,this._v=o);t?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(e,t){var n=this,r,i="touchmove"===e.type;if(!n._s2||i){if(i){if(n._r3)return;var s=e.originalEvent.touches;if(s){if(1<s.length)return;r=s[0]}else return}else r=e,n.pointerEnabled&&(r=r.originalEvent);n._a3||(n._e&&(t?n._s3:n._p1).css(n._g+n._u1,"0s"),function o(){n._l2&&(n._t3=requestAnimationFrame(o),n._u3&&n._k3(n._u3,t))}());if(n._l3)e.preventDefault(),n._m3=(new Date).getTime(),n._u3=r;else if(s=t?n._e3:n._h,r=Math.abs(r.pageX-n._b3)-Math.abs(r.pageY-n._c3)-(s?-7:7),7<r){if(s)e.preventDefault(),n._z2="x";else if(i){n._v3(e);return}n._l3=!0}else if(-7>r){if(!s)e.preventDefault(),n._z2="y";else if(i){n._v3(e);return}n._l3=!0}}},_v3:function(e,t){this._r3=!0;this._a3=this._l2=!1;this._y2(e)},_y2:function(t,r){function i(e){return 100>e?100:500<e?500:e}function s(e,t){if(o._l||r)f=(-o._u-o._d1)*o._w,l=Math.abs(o._p-f),o._c=l/t,e&&(o._c+=250),o._c=i(o._c),o._x3(f,!1)}var o=this,u,a,f,l;u=-1<t.type.indexOf("touch");if(!o._s2||u)if(o._s2=!1,o.ev.trigger("rsDragRelease"),o._u3=null,o._l2=!1,o._r3=!1,o._l3=!1,o._m3=0,cancelAnimationFrame(o._t3),o._a3&&(r?o._q3(o._h3):o._l&&o._p3(o._h3)),o._b.off(o._k1).off(o._l1),u&&o._e1.off(o._m1),o._i1(),!o._a3&&!o._v2&&r&&o._w3){var c=e(t.target).closest(".rsNavItem");c.length&&o.goTo(c.index())}else{a=r?o._e3:o._h;if(!o._a3||"y"===o._z2&&a||"x"===o._z2&&!a)if(!r&&o._t2){o._t2=!1;if(o.st.navigateByClick){o._i2(o.pointerEnabled?t.originalEvent:t);o.dragSuccess=!0;return}o.dragSuccess=!0}else{o._t2=!1;o.dragSuccess=!1;return}else o.dragSuccess=!0;o._t2=!1;o._z2="";var h=o.st.minSlideOffset;u=u?t.originalEvent.changedTouches[0]:o.pointerEnabled?t.originalEvent:t;var p=a?u.pageX:u.pageY,d=o._d3;u=o._v;var v=o.currSlideId,m=o.numSlides,g=a?o._f3:o._g3,y=o._z;Math.abs(p-d);u=p-u;a=(new Date).getTime()-o._j3;a=Math.abs(u)/a;if(0===g||1>=m)s(!0,a);else{if(!y&&!r)if(0>=v){if(0<g){s(!0,a);return}}else if(v>=m-1&&0>g){s(!0,a);return}if(r){f=o._i3;if(f>o._n3)f=o._n3;else if(f<o._o3)f=o._o3;else{p=a*a/.006;c=-o._i3;d=o._y3-o._z3+o._i3;0<u&&p>c?(c+=o._z3/(15/(p/a*.003)),a=a*c/p,p=c):0>u&&p>d&&(d+=o._z3/(15/(p/a*.003)),a=a*d/p,p=d);c=Math.max(Math.round(a/.003),50);f+=p*(0>u?-1:1);if(f>o._n3){o._a4(f,c,!0,o._n3,200);return}if(f<o._o3){o._a4(f,c,!0,o._o3,200);return}}o._a4(f,c,!0)}else c=function(e){var t=Math.floor(e/o._w);e-t*o._w>h&&t++;return t},d+h<p?0>g?s(!1,a):(c=c(p-d),o._m2(o.currSlideId-c,i(Math.abs(o._p-(-o._u-o._d1+c)*o._w)/a),!1,!0,!0)):d-h>p?0<g?s(!1,a):(c=c(d-p),o._m2(o.currSlideId+c,i(Math.abs(o._p-(-o._u-o._d1-c)*o._w)/a),!1,!0,!0)):s(!1,a)}}},_p3:function(e){e=this._p=e;this._e?this._p1.css(this._x1,this._y1+(this._h?e+this._z1+0:0+this._z1+e)+this._a2):this._p1.css(this._h?this._x1:this._w1,e)},updateSliderSize:function(e){var t,n;if(this.st.autoScaleSlider){var r=this.st.autoScaleSliderWidth,i=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(t=this.slider.width(),t!=this.width&&(this.slider.css("height",i/r*t),t=this.slider.width()),n=this.slider.height()):(n=this.slider.height(),n!=this.height&&(this.slider.css("width",r/i*n),n=this.slider.height()),t=this.slider.width())}else t=this.slider.width(),n=this.slider.height();if(e||t!=this.width||n!=this.height){this.width=t;this.height=n;this._b4=t;this._c4=n;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(t=0;t<this.slides.length;t++)e=this.slides[t],e.positionSet=!1,e&&e.images&&e.isLoaded&&(e.isRendered=!1,this._q2(e));if(this._e4)for(t=0;t<this._e4.length;t++)e=this._e4[t],e.holder.css(this._i,(e.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]},appendSlide:function(t,r){var i=this._s(t);if(isNaN(r)||r>this.numSlides)r=this.numSlides;this.slides.splice(r,0,i);this.slidesJQ.splice(r,0,e('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>'));r<this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",[i,r]);this._f4(r);r===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(e){var t=this.slides[e];t&&(t.holder&&t.holder.remove(),e<this.currSlideId&&this.currSlideId--,this.slides.splice(e,1),this.slidesJQ.splice(e,1),this.ev.trigger("rsOnRemoveSlide",[e]),this._f4(e),e===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(e){var t=this;e=t.numSlides;e=0>=t._u?0:Math.floor(t._u/e);t.numSlides=t.slides.length;0===t.numSlides?(t.currSlideId=t._d1=t._u=0,t.currSlide=t._g4=null):t._u=e*t.numSlides+t.currSlideId;for(e=0;e<t.numSlides;e++)t.slides[e].id=e;t.currSlide=t.slides[t.currSlideId];t._r1=t.slidesJQ[t.currSlideId];t.currSlideId>=t.numSlides?t.goTo(t.numSlides-1):0>t.currSlideId&&t.goTo(0);t._t();t._l&&t._z&&t._p1.css(t._g+t._u1,"0ms");t._h4&&clearTimeout(t._h4);t._h4=setTimeout(function(){t._l&&t._p3((-t._u-t._d1)*t._w);t._n2();t._l||t._r1.css({display:"block",opacity:1})},14);t.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(e){this._m2("next",this.st.transitionSpeed,!0,!e)},prev:function(e){this._m2("prev",this.st.transitionSpeed,!0,!e)},_m2:function(e,t,n,r,i){var s=this,o,u,a;s.ev.trigger("rsBeforeMove",[e,r]);a="next"===e?s.currSlideId+1:"prev"===e?s.currSlideId-1:e=parseInt(e,10);if(!s._z){if(0>a){s._i4("left",!r);return}if(a>=s.numSlides){s._i4("right",!r);return}}s._r2&&(s._u2(!0),n=!1);u=a-s.currSlideId;a=s._o2=s.currSlideId;var f=s.currSlideId+u;r=s._u;var l;s._z?(f=s._n2(!1,f),r+=u):r=f;s._o=f;s._g4=s.slidesJQ[s.currSlideId];s._u=r;s.currSlideId=s._o;s.currSlide=s.slides[s.currSlideId];s._r1=s.slidesJQ[s.currSlideId];var f=s.st.slidesDiff,c=Boolean(0<u);u=Math.abs(u);var h=Math.floor(a/s._y),p=Math.floor((a+(c?f:-f))/s._y),h=(c?Math.max(h,p):Math.min(h,p))*s._y+(c?s._y-1:0);h>s.numSlides-1?h=s.numSlides-1:0>h&&(h=0);a=c?h-a:a-h;a>s._y&&(a=s._y);if(u>a+f)for(s._d1+=(u-(a+f))*(c?-1:1),t*=1.4,a=0;a<s.numSlides;a++)s.slides[a].positionSet=!1;s._c=t;s._n2(!0);i||(l=!0);o=(-r-s._d1)*s._w;l?setTimeout(function(){s._j4=!1;s._x3(o,e,!1,n);s.ev.trigger("rsOnUpdateNav")},0):(s._x3(o,e,!1,n),s.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(t,r,i,s,o){function u(){var e;f&&(e=f.data("rsTimeout"))&&(f!==l&&f.css({opacity:0,display:"none",zIndex:0}),clearTimeout(e),f.data("rsTimeout",""));if(e=l.data("rsTimeout"))clearTimeout(e),l.data("rsTimeout","")}var a=this,f,l,c={};isNaN(a._c)&&(a._c=400);a._p=a._h3=t;a.ev.trigger("rsBeforeAnimStart");a._e?a._l?(a._c=parseInt(a._c,10),i=a._g+a._v1,c[a._g+a._u1]=a._c+"ms",c[i]=s?e.rsCSS3Easing[a.st.easeInOut]:e.rsCSS3Easing[a.st.easeOut],a._p1.css(c),s||!a.hasTouch?setTimeout(function(){a._p3(t)},5):a._p3(t)):(a._c=a.st.transitionSpeed,f=a._g4,l=a._r1,l.data("rsTimeout")&&l.css("opacity",0),u(),f&&f.data("rsTimeout",setTimeout(function(){c[a._g+a._u1]="0ms";c.zIndex=0;c.display="none";f.data("rsTimeout","");f.css(c);setTimeout(function(){f.css("opacity",0)},16)},a._c+60)),c.display="block",c.zIndex=a._m,c.opacity=0,c[a._g+a._u1]="0ms",c[a._g+a._v1]=e.rsCSS3Easing[a.st.easeInOut],l.css(c),l.data("rsTimeout",setTimeout(function(){l.css(a._g+a._u1,a._c+"ms");l.data("rsTimeout",setTimeout(function(){l.css("opacity",1);l.data("rsTimeout","")},20))},20))):a._l?(c[a._h?a._x1:a._w1]=t+"px",a._p1.animate(c,a._c,s?a.st.easeInOut:a.st.easeOut)):(f=a._g4,l=a._r1,l.stop(!0,!0).css({opacity:0,display:"block",zIndex:a._m}),a._c=a.st.transitionSpeed,l.animate({opacity:1},a._c,a.st.easeInOut),u(),f&&f.data("rsTimeout",setTimeout(function(){f.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},a._c+60)));a._r2=!0;a.loadingTimeout&&clearTimeout(a.loadingTimeout);a.loadingTimeout=o?setTimeout(function(){a.loadingTimeout=null;o.call()},a._c+60):setTimeout(function(){a.loadingTimeout=null;a._k4(r)},a._c+60)},_u2:function(e){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(!this._e)this._p1.stop(!0),this._p=parseInt(this._p1.css(this._x1),10);else{if(!e){e=this._p;var t=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");e!==t&&this._p3(t)}}else 20<this._m?this._m=10:this._m++},_l4:function(){var e=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),t=0===e[0].indexOf("matrix3d");return parseInt(e[this._h?t?12:4:t?13:5],10)},_m4:function(e,t){return this._e?this._y1+(t?e+this._z1+0:0+this._z1+e)+this._a2:e},_k4:function(e){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(e,t){var n=this,r=(-n._u-n._d1)*n._w;if(0!==n.numSlides&&!n._r2)if(n.st.loopRewind)n.goTo("left"===e?n.numSlides-1:0,t);else if(n._l){n._c=200;var i=function(){n._r2=!1};n._x3(r+("left"===e?30:-30),"",!1,!0,function(){n._r2=!1;n._x3(r,"",!1,!0,i)})}},_q2:function(e,t){if(!e.isRendered){var n=e.content,r="rsMainSlideImage",i,s=this.st.imageAlignCenter,o=this.st.imageScaleMode,u;e.videoURL&&(r="rsVideoContainer","fill"!==o?i=!0:(u=n,u.hasClass(r)||(u=u.find("."+r)),u.css({width:"100%",height:"100%"}),r="rsMainSlideImage"));n.hasClass(r)||(n=n.find("."+r));if(n){var a=e.iW,f=e.iH;e.isRendered=!0;if("none"!==o||s){r="fill"!==o?this._d4:0;u=this._b4-2*r;var l=this._c4-2*r,c,h,p={};"fit-if-smaller"===o&&(a>u||f>l)&&(o="fit");if("fill"===o||"fit"===o)c=u/a,h=l/f,c="fill"==o?c>h?c:h:"fit"==o?c<h?c:h:1,a=Math.ceil(a*c,10),f=Math.ceil(f*c,10);"none"!==o&&(p.width=a,p.height=f,i&&n.find(".rsImg").css({width:"100%",height:"100%"}));s&&(p.marginLeft=Math.floor((u-a)/2)+r,p.marginTop=Math.floor((l-f)/2)+r);n.css(p)}}}}};e.rsProto=t.prototype;e.fn.royalSlider=function(r){var i=arguments;return this.each(function(){var s=e(this);if("object"!==typeof r&&r){if((s=s.data("royalSlider"))&&s[r])return s[r].apply(s,Array.prototype.slice.call(i,1))}else s.data("royalSlider")||s.data("royalSlider",new t(s,r))})};e.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};e.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};e.extend(jQuery.easing,{easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n}})})(jQuery,window);(function(e){e.extend(e.rsProto,{_i5:function(){var t=this;"bullets"===t.st.controlNavigation&&(t.ev.one("rsAfterPropsSetup",function(){t._j5=!0;t.slider.addClass("rsWithBullets");for(var n='<div class="rsNav rsBullets">',r=0;r<t.numSlides;r++)n+='<div class="rsNavItem rsBullet"><span></span></div>';t._k5=n=e(n+"</div>");t._l5=n.appendTo(t.slider).children();t._k5.on("click.rs",".rsNavItem",function(n){t._m5||t.goTo(e(this).index())})}),t.ev.on("rsOnAppendSlide",function(e,n,r){r>=t.numSlides?t._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):t._l5.eq(r).before('<div class="rsNavItem rsBullet"><span></span></div>');t._l5=t._k5.children()}),t.ev.on("rsOnRemoveSlide",function(e,n){var r=t._l5.eq(n);r&&r.length&&(r.remove(),t._l5=t._k5.children())}),t.ev.on("rsOnUpdateNav",function(){var e=t.currSlideId;t._n5&&t._n5.removeClass("rsNavSelected");e=t._l5.eq(e);e.addClass("rsNavSelected");t._n5=e}))}});e.rsModules.bullets=e.rsProto._i5})(jQuery);(function(e){e.extend(e.rsProto,{_h6:function(){var t=this;"thumbnails"===t.st.controlNavigation&&(t._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},t.st.thumbs=e.extend({},t._i6,t.st.thumbs),t._j6=!0,!1===t.st.thumbs.firstMargin?t.st.thumbs.firstMargin=0:!0===t.st.thumbs.firstMargin&&(t.st.thumbs.firstMargin=t.st.thumbs.spacing),t.ev.on("rsBeforeParseNode",function(t,n,r){n=e(n);r.thumbnail=n.find(".rsTmb").remove();r.thumbnail.length?r.thumbnail=e(document.createElement("div")).append(r.thumbnail).html():(r.thumbnail=n.attr("data-rsTmb"),r.thumbnail||(r.thumbnail=n.find(".rsImg").attr("data-rsTmb")),r.thumbnail=r.thumbnail?'<img src="'+r.thumbnail+'"/>':"")}),t.ev.one("rsAfterPropsSetup",function(){t._k6()}),t._n5=null,t.ev.on("rsOnUpdateNav",function(){var n=e(t._l5[t.currSlideId]);n!==t._n5&&(t._n5&&(t._n5.removeClass("rsNavSelected"),t._n5=null),t._l6&&t._m6(t.currSlideId),t._n5=n.addClass("rsNavSelected"))}),t.ev.on("rsOnAppendSlide",function(e,n,r){e="<div"+t._n6+' class="rsNavItem rsThumb">'+t._o6+n.thumbnail+"</div>";r>=t.numSlides?t._s3.append(e):t._l5.eq(r).before(e);t._l5=t._s3.children();t.updateThumbsSize()}),t.ev.on("rsOnRemoveSlide",function(e,n){var r=t._l5.eq(n);r&&(r.remove(),t._l5=t._s3.children(),t.updateThumbsSize())}))},_k6:function(){var t=this,n="rsThumbs",r=t.st.thumbs,i="",s,o,u=r.spacing;t._j5=!0;t._e3="vertical"===r.orientation?!1:!0;t._n6=s=u?' style="margin-'+(t._e3?"right":"bottom")+":"+u+'px;"':"";t._i3=0;t._p6=!1;t._m5=!1;t._l6=!1;t._q6=r.arrows&&r.navigation;o=t._e3?"Hor":"Ver";t.slider.addClass("rsWithThumbs rsWithThumbs"+o);i+='<div class="rsNav rsThumbs rsThumbs'+o+'"><div class="'+n+'Container">';t._o6=r.appendSpan?'<span class="thumbIco"></span>':"";for(var a=0;a<t.numSlides;a++)o=t.slides[a],i+="<div"+s+' class="rsNavItem rsThumb">'+o.thumbnail+t._o6+"</div>";i=e(i+"</div></div>");s={};r.paddingTop&&(s[t._e3?"paddingTop":"paddingLeft"]=r.paddingTop);r.paddingBottom&&(s[t._e3?"paddingBottom":"paddingRight"]=r.paddingBottom);i.css(s);t._s3=e(i).find("."+n+"Container");t._q6&&(n+="Arrow",r.arrowLeft?t._r6=r.arrowLeft:(t._r6=e('<div class="'+n+" "+n+'Left"><div class="'+n+'Icn"></div></div>'),i.append(t._r6)),r.arrowRight?t._s6=r.arrowRight:(t._s6=e('<div class="'+n+" "+n+'Right"><div class="'+n+'Icn"></div></div>'),i.append(t._s6)),t._r6.click(function(){var e=(Math.floor(t._i3/t._t6)+t._u6)*t._t6+t._v6;t._a4(e>t._n3?t._n3:e)}),t._s6.click(function(){var e=(Math.floor(t._i3/t._t6)-t._u6)*t._t6+t._v6;t._a4(e<t._o3?t._o3:e)}),r.arrowsAutoHide&&!t.hasTouch&&(t._r6.css("opacity",0),t._s6.css("opacity",0),i.one("mousemove.rsarrowshover",function(){t._l6&&(t._r6.css("opacity",1),t._s6.css("opacity",1))}),i.hover(function(){t._l6&&(t._r6.css("opacity",1),t._s6.css("opacity",1))},function(){t._l6&&(t._r6.css("opacity",0),t._s6.css("opacity",0))})));t._k5=i;t._l5=t._s3.children();t.msEnabled&&t.st.thumbs.navigation&&t._s3.css("-ms-touch-action",t._e3?"pan-y":"pan-x");t.slider.append(i);t._w3=!0;t._v6=u;r.navigation&&t._e&&t._s3.css(t._g+"transition-property",t._g+"transform");t._k5.on("click.rs",".rsNavItem",function(n){t._m5||t.goTo(e(this).index())});t.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",function(){t._w6=t._e3?t._c4:t._b4;t.updateThumbsSize(!0)});t.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs",function(e,n){t.updateThumbsSize(!0,n)})},updateThumbsSize:function(e,t){var n=this,r=n._l5.first(),i={},s=n._l5.length;n._t6=(n._e3?r.outerWidth():r.outerHeight())+n._v6;n._y3=s*n._t6-n._v6;i[n._e3?"width":"height"]=n._y3+n._v6;n._z3=n._e3?n._k5.width():void 0!==t?t:n._k5.height();n._w3&&(n.isFullscreen||n.st.thumbs.fitInViewport)&&(n._e3?n._c4=n._w6-n._k5.outerHeight():n._b4=n._w6-n._k5.outerWidth());n._z3&&(n._o3=-(n._y3-n._z3)-n.st.thumbs.firstMargin,n._n3=n.st.thumbs.firstMargin,n._u6=Math.floor(n._z3/n._t6),n._y3<n._z3?(n.st.thumbs.autoCenter&&n._q3((n._z3-n._y3)/2),n.st.thumbs.arrows&&n._r6&&(n._r6.addClass("rsThumbsArrowDisabled"),n._s6.addClass("rsThumbsArrowDisabled")),n._l6=!1,n._m5=!1,n._k5.off(n._j1)):n.st.thumbs.navigation&&!n._l6&&(n._l6=!0,!n.hasTouch&&n.st.thumbs.drag||n.hasTouch&&n.st.thumbs.touch)&&(n._m5=!0,n._k5.on(n._j1,function(e){n._g2(e,!0)})),n._s3.css(i),e&&t&&n._m6(n.currSlideId),n._e&&(i[n._g+"transition-duration"]="0ms"))},setThumbsOrientation:function(e,t){this._w3&&(this.st.thumbs.orientation=e,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),t||this.updateSliderSize(!0))},_q3:function(e){this._i3=e;this._e?this._s3.css(this._x1,this._y1+(this._e3?e+this._z1+0:0+this._z1+e)+this._a2):this._s3.css(this._e3?this._x1:this._w1,e)},_a4:function(t,n,r,i,s){var o=this;if(o._l6){n||(n=o.st.thumbs.transitionSpeed);o._i3=t;o._x6&&clearTimeout(o._x6);o._p6&&(o._e||o._s3.stop(),r=!0);var u={};o._p6=!0;o._e?(u[o._g+"transition-duration"]=n+"ms",u[o._g+"transition-timing-function"]=r?e.rsCSS3Easing[o.st.easeOut]:e.rsCSS3Easing[o.st.easeInOut],o._s3.css(u),o._q3(t)):(u[o._e3?o._x1:o._w1]=t+"px",o._s3.animate(u,n,r?"easeOutCubic":o.st.easeInOut));i&&(o._i3=i);o._y6();o._x6=setTimeout(function(){o._p6=!1;s&&(o._a4(i,s,!0),s=null)},n)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(e,t){var n=0,r,i=e*this._t6+2*this._t6-this._v6+this._n3,s=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(t=!0,this._j6=!1),i+this._i3>this._z3?(e===this.numSlides-1&&(n=1),s=-e+this._u6-2+n,r=s*this._t6+this._z3%this._t6+this._v6-this._n3):0!==e?(e-1)*this._t6<=-this._i3+this._n3&&e-1<=this.numSlides-this._u6&&(r=(-e+1)*this._t6+this._n3):r=this._n3,r!==this._i3&&(n=void 0===r?this._i3:r,n>this._n3?this._q3(this._n3):n<this._o3?this._q3(this._o3):void 0!==r&&(t?this._q3(r):this._a4(r))),this._y6())}});e.rsModules.thumbnails=e.rsProto._h6})(jQuery);(function(e){e.extend(e.rsProto,{_f6:function(){var t=this;"tabs"===t.st.controlNavigation&&(t.ev.on("rsBeforeParseNode",function(t,n,r){n=e(n);r.thumbnail=n.find(".rsTmb").remove();r.thumbnail.length?r.thumbnail=e(document.createElement("div")).append(r.thumbnail).html():(r.thumbnail=n.attr("data-rsTmb"),r.thumbnail||(r.thumbnail=n.find(".rsImg").attr("data-rsTmb")),r.thumbnail=r.thumbnail?'<img src="'+r.thumbnail+'"/>':"")}),t.ev.one("rsAfterPropsSetup",function(){t._g6()}),t.ev.on("rsOnAppendSlide",function(e,n,r){r>=t.numSlides?t._k5.append('<div class="rsNavItem rsTab">'+n.thumbnail+"</div>"):t._l5.eq(r).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");t._l5=t._k5.children()}),t.ev.on("rsOnRemoveSlide",function(e,n){var r=t._l5.eq(n);r&&(r.remove(),t._l5=t._k5.children())}),t.ev.on("rsOnUpdateNav",function(){var e=t.currSlideId;t._n5&&t._n5.removeClass("rsNavSelected");e=t._l5.eq(e);e.addClass("rsNavSelected");t._n5=e}))},_g6:function(){var t=this,n;t._j5=!0;n='<div class="rsNav rsTabs">';for(var r=0;r<t.numSlides;r++)n+='<div class="rsNavItem rsTab">'+t.slides[r].thumbnail+"</div>";n=e(n+"</div>");t._k5=n;t._l5=n.children(".rsNavItem");t.slider.append(n);t._k5.click(function(n){n=e(n.target).closest(".rsNavItem");n.length&&t.goTo(n.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);(function(e){e.extend(e.rsProto,{_q5:function(){var t=this;t._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};t.st.fullscreen=e.extend({},t._r5,t.st.fullscreen);if(t.st.fullscreen.enabled)t.ev.one("rsBeforeSizeSet",function(){t._s5()})},_s5:function(){var t=this;t._t5=!t.st.keyboardNavEnabled&&t.st.fullscreen.keyboardNav;if(t.st.fullscreen.nativeFS){t._u5={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",prefix:""};var n=["webkit","moz","o","ms","khtml"];if(!t.isAndroid)if("undefined"!=typeof document.cancelFullScreen)t._u5.supportsFullScreen=!0;else for(var r=0;r<n.length;r++)if(t._u5.prefix=n[r],"undefined"!=typeof document[t._u5.prefix+"CancelFullScreen"]){t._u5.supportsFullScreen=!0;break}t._u5.supportsFullScreen?(t.nativeFS=!0,t._u5.fullScreenEventName=t._u5.prefix+"fullscreenchange"+t.ns,t._u5.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[this.prefix+"FullScreen"]}},t._u5.requestFullScreen=function(e){return""===this.prefix?e.requestFullScreen():e[this.prefix+"RequestFullScreen"]()},t._u5.cancelFullScreen=function(e){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}):t._u5=!1}t.st.fullscreen.buttonFS&&(t._v5=e('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(t._o1).on("click.rs",function(){t.isFullscreen?t.exitFullscreen():t.enterFullscreen()}))},enterFullscreen:function(t){var n=this;if(n._u5)if(t)n._u5.requestFullScreen(e("html")[0]);else{n._b.on(n._u5.fullScreenEventName,function(e){n._u5.isFullScreen()?n.enterFullscreen(!0):n.exitFullscreen(!0)});n._u5.requestFullScreen(e("html")[0]);return}if(!n._w5){n._w5=!0;n._b.on("keyup"+n.ns+"fullscreen",function(e){27===e.keyCode&&n.exitFullscreen()});n._t5&&n._b2();t=e(window);n._x5=t.scrollTop();n._y5=t.scrollLeft();n._z5=e("html").attr("style");n._a6=e("body").attr("style");n._b6=n.slider.attr("style");e("body, html").css({overflow:"hidden",height:"100%",width:"100%",margin:"0",padding:"0"});n.slider.addClass("rsFullscreen");var r;for(r=0;r<n.numSlides;r++)t=n.slides[r],t.isRendered=!1,t.bigImage&&(t.isBig=!0,t.isMedLoaded=t.isLoaded,t.isMedLoading=t.isLoading,t.medImage=t.image,t.medIW=t.iW,t.medIH=t.iH,t.slideId=-99,t.bigImage!==t.medImage&&(t.sizeType="big"),t.isLoaded=t.isBigLoaded,t.isLoading=!1,t.image=t.bigImage,t.images[0]=t.bigImage,t.iW=t.bigIW,t.iH=t.bigIH,t.isAppended=t.contentAdded=!1,n._c6(t));n.isFullscreen=!0;n._w5=!1;n.updateSliderSize();n.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(t){var n=this;if(n._u5){if(!t){n._u5.cancelFullScreen(e("html")[0]);return}n._b.off(n._u5.fullScreenEventName)}if(!n._w5){n._w5=!0;n._b.off("keyup"+n.ns+"fullscreen");n._t5&&n._b.off("keydown"+n.ns);e("html").attr("style",n._z5||"");e("body").attr("style",n._a6||"");var r;for(r=0;r<n.numSlides;r++)t=n.slides[r],t.isRendered=!1,t.bigImage&&(t.isBig=!1,t.slideId=-99,t.isBigLoaded=t.isLoaded,t.isBigLoading=t.isLoading,t.bigImage=t.image,t.bigIW=t.iW,t.bigIH=t.iH,t.isLoaded=t.isMedLoaded,t.isLoading=!1,t.image=t.medImage,t.images[0]=t.medImage,t.iW=t.medIW,t.iH=t.medIH,t.isAppended=t.contentAdded=!1,n._c6(t,!0),t.bigImage!==t.medImage&&(t.sizeType="med"));n.isFullscreen=!1;t=e(window);t.scrollTop(n._x5);t.scrollLeft(n._y5);n._w5=!1;n.slider.removeClass("rsFullscreen");n.updateSliderSize();setTimeout(function(){n.updateSliderSize()},1);n.ev.trigger("rsExitFullscreen")}},_c6:function(t,n){var r=t.isLoaded||t.isLoading?'<img class="rsImg rsMainSlideImage" src="'+t.image+'"/>':'<a class="rsImg rsMainSlideImage" href="'+t.image+'"></a>';t.content.hasClass("rsImg")?t.content=e(r):t.content.find(".rsImg").eq(0).replaceWith(r);t.isLoaded||t.isLoading||!t.holder||t.holder.html(t.content)}});e.rsModules.fullscreen=e.rsProto._q5})(jQuery);(function(e){e.extend(e.rsProto,{_x4:function(){var t=this,n;t._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2e3};!t.st.autoPlay&&t.st.autoplay&&(t.st.autoPlay=t.st.autoplay);t.st.autoPlay=e.extend({},t._y4,t.st.autoPlay);t.st.autoPlay.enabled&&(t.ev.on("rsBeforeParseNode",function(t,r,i){r=e(r);if(n=r.attr("data-rsDelay"))i.customDelay=parseInt(n,10)}),t.ev.one("rsAfterInit",function(){t._z4()}),t.ev.on("rsBeforeDestroy",function(){t.stopAutoPlay();t.slider.off("mouseenter mouseleave");e(window).off("blur"+t.ns+" focus"+t.ns)}))},_z4:function(){var t=this;t.startAutoPlay();t.ev.on("rsAfterContentSet",function(e,n){t._l2||t._r2||!t._a5||n!==t.currSlide||t._b5()});t.ev.on("rsDragRelease",function(){t._a5&&t._c5&&(t._c5=!1,t._b5())});t.ev.on("rsAfterSlideChange",function(){t._a5&&t._c5&&(t._c5=!1,t.currSlide.isLoaded&&t._b5())});t.ev.on("rsDragStart",function(){t._a5&&(t.st.autoPlay.stopAtAction?t.stopAutoPlay():(t._c5=!0,t._d5()))});t.ev.on("rsBeforeMove",function(e,n,r){t._a5&&(r&&t.st.autoPlay.stopAtAction?t.stopAutoPlay():(t._c5=!0,t._d5()))});t._e5=!1;t.ev.on("rsVideoStop",function(){t._a5&&(t._e5=!1,t._b5())});t.ev.on("rsVideoPlay",function(){t._a5&&(t._c5=!1,t._d5(),t._e5=!0)});e(window).on("blur"+t.ns,function(){t._a5&&(t._c5=!0,t._d5())}).on("focus"+t.ns,function(){t._a5&&t._c5&&(t._c5=!1,t._b5())});t.st.autoPlay.pauseOnHover&&(t._f5=!1,t.slider.hover(function(){t._a5&&(t._c5=!1,t._d5(),t._f5=!0)},function(){t._a5&&(t._f5=!1,t._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var e=this;e._f5||e._e5||(e._g5=!0,e._h5&&clearTimeout(e._h5),e._h5=setTimeout(function(){var t;e._z||e.st.loopRewind||(t=!0,e.st.loopRewind=!0);e.next(!0);t&&(e.st.loopRewind=!1)},e.currSlide.customDelay?e.currSlide.customDelay:e.st.autoPlay.delay))},_d5:function(){this._f5||this._e5||(this._g5=!1,this._h5&&(clearTimeout(this._h5),this._h5=null))}});e.rsModules.autoplay=e.rsProto._x4})(jQuery);(function(e){e.extend(e.rsProto,{_z6:function(){var t=this;t._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};t.st.video=e.extend({},t._a7,t.st.video);t.ev.on("rsBeforeSizeSet",function(){t._b7&&setTimeout(function(){var e=t._r1,e=e.hasClass("rsVideoContainer")?e:e.find(".rsVideoContainer");t._c7&&t._c7.css({width:e.width(),height:e.height()})},32)});var n=t._a.mozilla;t.ev.on("rsAfterParseNode",function(r,i,s){r=e(i);if(s.videoURL){t.st.video.disableCSS3inFF&&n&&(t._e=t._f=!1);i=e('<div class="rsVideoContainer"></div>');var o=e('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');r.hasClass("rsImg")?s.content=i.append(r).append(o):s.content.find(".rsImg").wrap(i).after(o)}});t.ev.on("rsAfterSlideChange",function(){t.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var t=this;if(!t._b7){var n=t.currSlide;if(!n.videoURL)return!1;t._d7=n;var r=t._e7=n.content,n=n.videoURL,i,s;n.match(/youtu\.be/i)||n.match(/youtube\.com/i)?(s=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(s=n.match(s))&&11==s[7].length&&(i=s[7]),void 0!==i&&(t._c7=t.st.video.youTubeCode.replace("%id%",i))):n.match(/vimeo\.com/i)&&(s=/(www\.)?vimeo.com\/(\d+)($|\/)/,(s=n.match(s))&&(i=s[2]),void 0!==i&&(t._c7=t.st.video.vimeoCode.replace("%id%",i)));t.videoObj=e(t._c7);t.ev.trigger("rsOnCreateVideoElement",[n]);t.videoObj.length&&(t._c7=e('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),t._c7.find(".rsPreloader").after(t.videoObj),r=r.hasClass("rsVideoContainer")?r:r.find(".rsVideoContainer"),t._c7.css({width:r.width(),height:r.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(e){t.stopVideo();e.preventDefault();e.stopPropagation();return!1}),r.append(t._c7),t.isIPAD&&r.addClass("rsIOSVideo"),t._f7(!1),setTimeout(function(){t._c7.addClass("rsVideoActive")},10),t.ev.trigger("rsVideoPlay"),t._b7=!0);return!0}return!1},stopVideo:function(){var e=this;return e._b7?(e.isIPAD&&e.slider.find(".rsCloseVideoBtn").remove(),e._f7(!0),setTimeout(function(){e.ev.trigger("rsOnDestroyVideoElement",[e.videoObj]);var t=e._c7.find("iframe");if(t.length)try{t.attr("src","")}catch(n){}e._c7.remove();e._c7=null},16),e.ev.trigger("rsVideoStop"),e._b7=!1,!0):!1},_f7:function(e,t){var n=[],r=this.st.video;r.autoHideArrows&&(this._c2&&(n.push(this._c2,this._d2),this._e2=!e),this._v5&&n.push(this._v5));r.autoHideControlNav&&this._k5&&n.push(this._k5);r.autoHideBlocks&&this._d7.animBlocks&&n.push(this._d7.animBlocks);r.autoHideCaption&&this.globalCaption&&n.push(this.globalCaption);this.slider[e?"removeClass":"addClass"]("rsVideoPlaying");if(n.length)for(r=0;r<n.length;r++)e?n[r].removeClass("rsHidden"):n[r].addClass("rsHidden")}});e.rsModules.video=e.rsProto._z6})(jQuery);(function(e){e.extend(e.rsProto,{_p4:function(){function t(){var e=n.currSlide;if(n.currSlide&&n.currSlide.isLoaded&&n._t4!==e){if(0<n._s4.length){for(r=0;r<n._s4.length;r++)clearTimeout(n._s4[r]);n._s4=[]}if(0<n._r4.length){var t;for(r=0;r<n._r4.length;r++)if(t=n._r4[r])n._e?(t.block.css(n._g+n._u1,"0s"),t.block.css(t.css)):t.block.stop(!0).css(t.css),n._t4=null,e.animBlocksDisplayed=!1;n._r4=[]}e.animBlocks&&(e.animBlocksDisplayed=!0,n._t4=e,n._u4(e.animBlocks))}}var n=this,r;n._q4={fadeEffect:!0,moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};n.st.block=e.extend({},n._q4,n.st.block);n._r4=[];n._s4=[];n.ev.on("rsAfterInit",function(){t()});n.ev.on("rsBeforeParseNode",function(t,n,r){n=e(n);r.animBlocks=n.find(".rsABlock").css("display","none");r.animBlocks.length||(n.hasClass("rsABlock")?r.animBlocks=n.css("display","none"):r.animBlocks=!1)});n.ev.on("rsAfterContentSet",function(e,r){r.id===n.slides[n.currSlideId].id&&setTimeout(function(){t()},n.st.fadeinLoadedSlide?300:0)});n.ev.on("rsAfterSlideChange",function(){t()})},_v4:function(e,t){setTimeout(function(){e.css(t)},6)},_u4:function(t){var n=this,r,i,s,o,u,a,f;n._s4=[];t.each(function(t){r=e(this);i={};s={};o=null;var c=r.attr("data-move-offset"),c=c?parseInt(c,10):n.st.block.moveOffset;if(0<c&&((a=r.data("move-effect"))?(a=a.toLowerCase(),"none"===a?a=!1:"left"!==a&&"top"!==a&&"bottom"!==a&&"right"!==a&&(a=n.st.block.moveEffect,"none"===a&&(a=!1))):a=n.st.block.moveEffect,a&&"none"!==a)){var p;p="right"===a||"left"===a?!0:!1;var v;f=!1;n._e?(v=0,u=n._x1):(p?isNaN(parseInt(r.css("right"),10))?u="left":(u="right",f=!0):isNaN(parseInt(r.css("bottom"),10))?u="top":(u="bottom",f=!0),u="margin-"+u,f&&(c=-c),n._e?v=parseInt(r.css(u),10):(v=r.data("rs-start-move-prop"),void 0===v&&(v=parseInt(r.css(u),10),isNaN(v)&&(v=0),r.data("rs-start-move-prop",v))));s[u]=n._m4("top"===a||"left"===a?v-c:v+c,p);i[u]=n._m4(v,p)}c=r.attr("data-fade-effect");if(!c)c=n.st.block.fadeEffect;else if("none"===c.toLowerCase()||"false"===c.toLowerCase())c=!1;c&&(s.opacity=0,i.opacity=1);if(c||a)o={},o.hasFade=Boolean(c),Boolean(a)&&(o.moveProp=u,o.hasMove=!0),o.speed=r.data("speed"),isNaN(o.speed)&&(o.speed=n.st.block.speed),o.easing=r.data("easing"),o.easing||(o.easing=n.st.block.easing),o.css3Easing=e.rsCSS3Easing[o.easing],o.delay=r.data("delay"),isNaN(o.delay)&&(o.delay=n.st.block.delay*t);c={};n._e&&(c[n._g+n._u1]="0ms");c.moveProp=i.moveProp;c.opacity=i.opacity;c.display="none";n._r4.push({block:r,css:c});n._v4(r,s);n._s4.push(setTimeout(function(e,t,r,i){return function(){e.css("display","block");if(r){var s={};if(n._e){var o="";r.hasMove&&(o+=r.moveProp);r.hasFade&&(r.hasMove&&(o+=", "),o+="opacity");s[n._g+n._t1]=o;s[n._g+n._u1]=r.speed+"ms";s[n._g+n._v1]=r.css3Easing;e.css(s);setTimeout(function(){e.css(t)},24)}else setTimeout(function(){e.animate(t,r.speed,r.easing)},16)}delete n._s4[i]}}(r,i,o,t),6>=o.delay?12:o.delay))})}});e.rsModules.animatedBlocks=e.rsProto._p4})(jQuery);(function(e){e.extend(e.rsProto,{_w4:function(){var e=this;if(e.st.autoHeight){var t,n,r,i=!0,s=function(s){r=e.slides[e.currSlideId];(t=r.holder)&&(n=t.height())&&void 0!==n&&n>(e.st.minAutoHeight||30)&&(e._c4=n,e._e||!s?e._e1.css("height",n):e._e1.stop(!0,!0).animate({height:n},e.st.transitionSpeed),e.ev.trigger("rsAutoHeightChange",n),i&&(e._e&&setTimeout(function(){e._e1.css(e._g+"transition","height "+e.st.transitionSpeed+"ms ease-in-out")},16),i=!1))};e.ev.on("rsMaybeSizeReady.rsAutoHeight",function(e,t){r===t&&s()});e.ev.on("rsAfterContentSet.rsAutoHeight",function(e,t){r===t&&s()});e.slider.addClass("rsAutoHeight");e.ev.one("rsAfterInit",function(){setTimeout(function(){s(!1);setTimeout(function(){e.slider.append('<div style="clear:both; float: none;"></div>')},16)},16)});e.ev.on("rsBeforeAnimStart",function(){s(!0)});e.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){s(!1)},16)})}}});e.rsModules.autoHeight=e.rsProto._w4})(jQuery);(function(e){e.extend(e.rsProto,{_d6:function(){var t=this;t.st.globalCaption&&(t.ev.on("rsAfterInit",function(){t.globalCaption=e('<div class="rsGCaption"></div>').appendTo(t.st.globalCaptionInside?t._e1:t.slider);t.globalCaption.html(t.currSlide.caption)}),t.ev.on("rsBeforeAnimStart",function(){t.globalCaption.html(t.currSlide.caption)}))}});e.rsModules.globalCaption=e.rsProto._d6})(jQuery);(function(e){e.rsProto._o4=function(){var e,t=this;if(t.st.addActiveClass)t.ev.on("rsOnUpdateNav",function(){e&&clearTimeout(e);e=setTimeout(function(){t._g4&&t._g4.removeClass("rsActiveSlide");t._r1&&t._r1.addClass("rsActiveSlide");e=null},50)})};e.rsModules.activeClass=e.rsProto._o4})(jQuery);(function(e){e.extend(e.rsProto,{_o5:function(){var t=this,n,r,i;t._p5={enabled:!1,change:!1,prefix:""};t.st.deeplinking=e.extend({},t._p5,t.st.deeplinking);if(t.st.deeplinking.enabled){var s=t.st.deeplinking.change,o=t.st.deeplinking.prefix,u="#"+o,a=function(){var e=window.location.hash;return e&&0<e.indexOf(o)&&(e=parseInt(e.substring(u.length),10),0<=e)?e-1:-1},f=a();-1!==f&&(t.st.startSlideId=f);s&&(e(window).on("hashchange"+t.ns,function(e){n||(e=a(),0>e||(e>t.numSlides-1&&(e=t.numSlides-1),t.goTo(e)))}),t.ev.on("rsBeforeAnimStart",function(){r&&clearTimeout(r);i&&clearTimeout(i)}),t.ev.on("rsAfterSlideChange",function(){r&&clearTimeout(r);i&&clearTimeout(i);i=setTimeout(function(){n=!0;window.location.replace((""+window.location).split("#")[0]+u+(t.currSlideId+1));r=setTimeout(function(){n=!1;r=null},60)},400)}));t.ev.on("rsBeforeDestroy",function(){r=i=null;s&&e(window).off("hashchange"+t.ns)})}}});e.rsModules.deeplinking=e.rsProto._o5})(jQuery);(function(e,t,n){function r(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var i="hashchange",s=document,o,u=e.event.special,a=s.documentMode,f="on"+i in t&&(a===n||7<a);e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)};e.fn[i].delay=50;u[i]=e.extend(u[i],{setup:function(){if(f)return!1;e(o.start)},teardown:function(){if(f)return!1;e(o.stop)}});o=function(){function o(){var n=r(),s=v(c);n!==c?(p(c=n,s),e(t).trigger(i)):s!==c&&(location.href=location.href.replace(/#.*/,"")+s);a=setTimeout(o,e.fn[i].delay)}var u={},a,c=r(),h=function(e){return e},p=h,v=h;u.start=function(){a||o()};u.stop=function(){a&&clearTimeout(a);a=n};t.attachEvent&&!t.addEventListener&&!f&&function(){var t,n;u.start=function(){t||(n=(n=e.fn[i].src)&&n+r(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||p(r());o()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow,s.onpropertychange=function(){try{"title"===event.propertyName&&(t.document.title=s.title)}catch(e){}})};u.stop=h;v=function(){return r(t.location.href)};p=function(n,r){var o=t.document,u=e.fn[i].domain;n!==r&&(o.title=s.title,o.open(),u&&o.write('<script>document.domain="'+u+'"</script>'),o.close(),t.location.hash=n)}}();return u}()})(jQuery,this);(function(e){e.rsProto._g7=function(){var t=this;t.st.visibleNearby&&t.st.visibleNearby.enabled&&(t._h7={enabled:!0,centerArea:.6,center:!0,breakpoint:0,breakpointCenterArea:.8,hiddenOverflow:!0,navigateByCenterClick:!1},t.st.visibleNearby=e.extend({},t._h7,t.st.visibleNearby),t.ev.one("rsAfterPropsSetup",function(){t._i7=t._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();t.st.visibleNearby.hiddenOverflow||t._i7.css("overflow","visible");t._o1=t.st.controlsInside?t._i7:t.slider}),t.ev.on("rsAfterSizePropSet",function(){var e,n=t.st.visibleNearby;e=n.breakpoint&&t.width<n.breakpoint?n.breakpointCenterArea:n.centerArea;t._h?(t._b4*=e,t._i7.css({height:t._c4,width:t._b4/e}),t._d=t._b4*(1-e)/2/e):(t._c4*=e,t._i7.css({height:t._c4/e,width:t._b4}),t._d=t._c4*(1-e)/2/e);n.navigateByCenterClick||(t._q=t._h?t._b4:t._c4);n.center&&t._e1.css("margin-"+(t._h?"left":"top"),t._d)}))};e.rsModules.visibleNearby=e.rsProto._g7})(jQuery);

/** 
 * jQuery iLightBox - Revolutionary Lightbox Plugin
 * http://www.ilightbox.net/
 * 
 * @version: 2.1.5 - October 24, 2013
 * 
 * @author: Hemn Chawroka
 *          hemn@iprodev.com
 *          http://www.iprodev.com/
 * 
 */
eval(function(d,e,a,c,b,f){b=function(a){return(a<e?"":b(parseInt(a/e)))+(35<(a%=e)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;a--;)f[b(a)]=c[a]||b(a);c=[function(a){return f[a]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('(12(g,u,H){12 C(a,b){19 1h(a.1y(b),10)||0}12 G(){17 a=u,b="4O";"gb"2K u||(b="g9",a=1v.3E||1v.2L);19{1c:a[b+"fD"],1d:a[b+"fx"]}}12 da(){17 a=K();u.31.4b="";u.6h(a.x,a.y)}12 ea(a,b){a="3j://18.eW/eU/aU.8m?2F="+7h(a).1o(/!/g,"%21").1o(/\'/g,"%27").1o(/\\(/g,"%28").1o(/\\)/g,"%29").1o(/\\*/g,"%2A");g.6K({2F:a,7C:"aU"}).44(12(){b(!1)});dx=12(a){b(a)}}12 P(a){17 b=[];g("*",a).1Z(12(){17 a="";"4T"!=g(11).1y("ab-2y")?a=g(11).1y("ab-2y"):"2V"!=1e g(11).2g("2m")&&"7V"==11.7W.25()&&(a=g(11).2g("2m"));1a(-1==a.1X("d9"))1s(17 a=a.1o(/2F\\(\\"/g,""),a=a.1o(/2F\\(/g,""),a=a.1o(/\\"\\)/g,""),a=a.1o(/\\)/g,""),a=a.2u(","),d=0;d<a.1g;d++)1a(0<a[d].1g&&-1==g.d0(a[d],b)){17 e="";x.6V&&9>x.2x&&(e="?"+23.89(9V*23.9U()));b.4J(a[d]+e)}});19 b}12 Q(a,b){17 c=a.1o(/^.*[\\/\\\\]/g,"");"34"==1e b&&c.8c(c.1g-b.1g)==b&&(c=c.8c(0,c.1g-b.1g));19 c}12 W(a,b){17 c="",d="",e=0,f={},h=0,l=0,k=h=!1,g=!1;1a(!a)19!1;b||(b="8e");17 n={9P:1,9O:2,6Y:4,9K:8,8e:0};1s(d 2K n)n.8e|=n[d];1a("32"!==1e b){b=[].5s(b);1s(l=0;l<b.1g;l++)n[b[l]]&&(e|=n[b[l]]);b=e}d=12(a){a+="";17 b=a.5u(".")+1;19 b?b!==a.1g?a.8c(b):"":!1};b&n.9P&&(e=a.1o(/\\\\/g,"/").1o(/\\/[^\\/]*\\/?$/,""),f.cI=e===a?".":e);b&n.9O&&(!1===h&&(h=Q(a)),f.cG=h);b&n.6Y&&(!1===h&&(h=Q(a)),!1===k&&(k=d(h)),!1!==k&&(f.cF=k));b&n.9K&&(!1===h&&(h=Q(a)),!1===k&&(k=d(h)),!1===g&&(g=h.5H(0,h.1g-(k?k.1g+1:!1===k?0:1))),f.ct=g);h=0;1s(c 2K f)h++;19 1==h?f[c]:f}12 X(a){a=W(a,"6Y");a=g.9z(a)?1f:a.25();19 1i=0<=R.2y.1X(a)?"2y":0<=R.2D.1X(a)?"2D":0<=R.1K.1X(a)?"1K":"4j"}12 Y(a,b){19 1h(b/2l*a)}12 S(a){19(a=fm(a).1o(/^\\s+|\\s+$/g,"").5G(/^([^:\\/?#]+:)?(\\/\\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\\/?#]*)(?::(\\d*))?))?([^?#]*)(\\?[^#]*)?(#[\\s\\S]*)?/))?{33:a[0]||"",5f:a[1]||"",4t:a[2]||"",eL:a[3]||"",ew:a[4]||"",eu:a[5]||"",3B:a[6]||"",7e:a[7]||"",4b:a[8]||""}:1f}12 L(a,b){12 c(a){17 b=[];a.1o(/^(\\.\\.?(\\/|$))+/,"").1o(/\\/(\\.(\\/|$))+/g,"/").1o(/\\/\\.\\.$/,"/../").1o(/\\/?[^\\/]*/g,12(a){"/.."===a?b.em():b.4J(a)});19 b.53("").1o(/^\\//,"/"===a.46(0)?"/":"")}b=S(b||"");a=S(a||"");19 b&&a?(b.5f||a.5f)+(b.5f||b.4t?b.4t:a.4t)+c(b.5f||b.4t||"/"===b.3B.46(0)?b.3B:b.3B?(a.4t&&!a.3B?"/":"")+a.3B.5H(0,a.3B.5u("/")+1)+b.3B:a.3B)+(b.5f||b.4t||b.3B?b.7e:b.7e||a.7e)+b.4b:1f}12 fa(a,b,c){11.7c=11.7c||{};11.7c.8W=11.7c.8W||{};17 d=0,e=0,f=0,h={ec:-6,e5:-5,a:-5,dT:-4,b:-4,dw:-3,de:-3,"#":-2,p:1,9n:1},d=12(a){a=(""+a).1o(/[8u\\-+]/g,".");a=a.1o(/([^.\\d]+)/g,".$1.").1o(/\\.{2,}/g,".");19 a.1g?a.2u("."):[-8]};a=d(a);b=d(b);e=23.3u(a.1g,b.1g);1s(d=0;d<e;d++)1a(a[d]!=b[d])1a(a[d]=a[d]?8p(a[d])?h[a[d]]||-7:1h(a[d],10):0,b[d]=b[d]?8p(b[d])?h[b[d]]||-7:1h(b[d],10):0,a[d]<b[d]){f=-1;1A}2k 1a(a[d]>b[d]){f=1;1A}1a(!c)19 f;4d(c){1r">":1r"c7":19 0<f;1r">=":1r"ge":19 0<=f;1r"<=":1r"bN":19 0>=f;1r"==":1r"=":1r"eq":19 0===f;1r"<>":1r"!=":1r"bH":19 0!==f;1r"":1r"<":1r"gn":19 0>f;8d:19 1f}}12 K(){17 a=0,b=0;"32"==1e u.9S?(b=u.9S,a=u.fR):1v.2L&&(1v.2L.4r||1v.2L.4A)?(b=1v.2L.4A,a=1v.2L.4r):1v.3E&&(1v.3E.4r||1v.3E.4A)&&(b=1v.3E.4A,a=1v.3E.4r);19{x:a,y:b}}12 Z(a,b,c){17 d;d=p[a+b];1f==d&&(d=p[b]);19 1f!=d?(0==b.1X(a)&&1f==c&&(c=b.6T(a.1g)),1f==c&&(c=b),c+\'="\'+d+\'" \'):""}12 w(a,b){1a(0==a.1X("5R#"))19"";0==a.1X("5a#")&&1f==b&&(b=a.6T(4));19 Z("5a#",a,b)}12 E(a,b){1a(0==a.1X("5a#"))19"";0==a.1X("5R#")&&1f==b&&(b=a.6T(4));19 Z("5R#",a,b)}12 $(a,b){17 c,d="",e=b?" />":">";-1==a.1X("5R#")&&(c=p["5a#"+a],1f==c&&(c=p[a]),0==a.1X("5a#")&&(a=a.6T(4)),1f!=c&&(d=\'  <4i 2h="\'+a+\'" 2J="\'+c+\'"\'+e+"\\n"));19 d}12 ga(){1s(17 a=0;a<2T.1g;a++){17 b=2T[a];5X p[b];5X p["5R#"+b];5X p["5a#"+b]}}12 ac(){17 a;a="ev";17 b=2T;1a(4>b.1g||0!=b.1g%2)b=j,b=b.1o("%%",a),68(b),a="";2k{p=[];p.2m=b[0];p.1c=b[1];p.1d=b[2];p.6P="6N:ah-ak-aw-ay-aD";p.4K="3j://59.6J.3h/2X/7v/";a=b[3];1a(1f==a||""==a)a="6,0,2,0";p.6I="3j://59.6J.3h/cJ/cs.ci#2x="+a;1s(17 c,d=4;d<b.1g;d+=2)c=b[d].25(),a=b[d+1],"2h"==c||"6a"==c?p.2h=a:p[c]=a;b="<3p "+w("6P")+w("1c")+w("1d")+w("6I")+w("2h","6a")+w("6G")+w("aE")+w("aI")+w("47")+w("7l")+w("1u")+w("1J")+w("aJ")+w("aL")+">\\n"+$("2m",!1);d="  <7g "+E("2m")+E("1c")+E("1d")+E("4K")+E("2h")+E("7l")+E("6G");ga("2m","1c","1d","4K","6P","6I","2h","6G","aE","aI","47","7l","aL","1u","1J","aJ");1s(c 2K p)a=p[c],1f!=a&&(d+=E(c),b+=$(c,!1));a=b+d+"> </7g>\\n</3p>"}19 a}12 I(a){a=a||31.33;19"#"+a.1o(/^[^#]*#?(.*)$/,"$1")}17 R={2D:"f2",2y:"eT eC ej e3 dU dO dI dC dB",4j:"d6 d2 d1 cZ cX 2G bS 8m 9n bO gm gh fT fQ fM fE fB",1K:"fp aW fg f6 eA 42 3s 7S 4X et 7N"},M=g(u),A=g(1v),x,z,F,v="",D=!!("el"2K u),J=D?"3S.1w":"63.1w",b3=D?"6l.1w":"cM.1w",b4=D?"7w.1w":"fo.1w",T=D?"b5.1w":"7r.1w",aa=12(a,b,c,d){17 e=11;e.14=b;e.5z=a.5z||a;e.7m=a.7m;e.b6=d;1>c.1g?e.8H():e.1n=c;e.1k={1M:e.1n.1g,2W:0,1p:1f,1j:1f,1q:1f,36:g("2L"),3W:0,1V:g(\'<1b 1u="18-1V"></1b>\'),2o:g(\'<1b 1u="18-2o"><1b></1b></1b>\'),1P:g(\'<1b 1u="18-1P"></1b>\'),4k:g(\'<1b 1u="18-4O-1P"></1b>\'),1J:g(\'<1b 1u="18-1J"></1b>\'),bl:g(\'<a 1u="18-3Z" 1J="\'+e.14.2S.3Z+\'"></a>\'),6g:g(\'<a 1u="18-3e" 1J="\'+e.14.2S.8x+\'"></a>\'),8r:g(\'<a 1u="18-4E" 1J="\'+e.14.2S.bt+\'"></a>\'),48:g(\'<a 1u="18-1j-49" 1J="\'+e.14.2S.1j+\'"></a>\'),4a:g(\'<a 1u="18-1q-49" 1J="\'+e.14.2S.7Y+\'"></a>\'),1O:g(\'<1b 1u="18-1O" 5n="19 2Z;"><1b 1u="18-24"></1b></1b>\'),2I:g(\'<1b 1u="18-1O 18-1j" 5n="19 2Z;"><1b 1u="18-24"></1b></1b>\'),2H:g(\'<1b 1u="18-1O 18-1q" 5n="19 2Z;"><1b 1u="18-24"></1b></1b>\'),2M:g(\'<a 1u="18-49 18-1j-49" 5n="19 2Z;" 1J="\'+e.14.2S.1j+\'"><2p></2p></a>\'),2B:g(\'<a 1u="18-49 18-1q-49" 5n="19 2Z;" 1J="\'+e.14.2S.7Y+\'"><2p></2p></a>\'),1B:g(\'<1b 1u="18-1B" 5n="19 2Z;"><1b 1u="18-1B-24"><a 1u="18-1B-er"></a><1b 1u="18-1B-6e"></1b></1b></1b>\'),6d:!1,3V:!1,3U:!1,3q:!1,3x:!1,7E:eM,2z:!1,3b:!1,4s:0,3w:0,4u:0};e.1k.7B=e.1k.2M.2f(e.1k.2B);e.7u();e.bu();e.14.3v=0<e.14.3v&&e.14.3v>=e.1k.1M?e.1k.1M-1:e.14.3v;e.14.3v=e.14.bz?23.89(23.9U()*e.1k.1M):e.14.3v;e.1k.2W=e.14.3v;d?e.bA():e.8v();e.14.2q&&(e.7F(),M.bC(12(){e.7F()}));D&&(a=/(63|4D|5h|ey|ex)/ez,e.14.1Q.1x=e.14.1Q.1x.1o(a,"3S"),e.14.1Q.1T=e.14.1Q.1T.1o(a,"3S"),e.14.1R.1x=e.14.1R.1x.1o(a,"3S"),e.14.1R.1T=e.14.1R.1T.1o(a,"3S"));e.14.2e.7d&&g.2O(e.14.1N,{64:0,65:0,78:0,6b:0})};aa.5t={69:12(){11.1k.3W+=1;"1F"==11.14.3r.25()?11.1k.2o.1W().2w({1E:"-bG"},11.14.1x.2t,"2R"):11.1k.2o.1W().2w({1C:"-bG"},11.14.1x.2t,"2R")},4B:12(){11.1k.3W-=1;11.1k.3W=0>11.1k.3W?0:11.1k.3W;"1F"==11.14.3r.25()?0>=11.1k.3W&&11.1k.2o.1W().2w({1E:"-bB"},11.14.1x.2t,"7O"):0>=11.1k.3W&&11.1k.2o.1W().2w({1C:"-bB"},11.14.1x.2t,"7O")},5c:12(){17 a=11;a.1I={gg:a.1k.1O,cN:a.1k.2I,dc:a.1k.2H,eg:a.1k.1p,eh:a.1k.1j,es:a.1k.1q,1T:12(){a.3l()},4w:12(){0<2T.1g?a.3a(!0):a.3a()},3e:12(){a.54()}}},8H:12(){17 a=11,b=[],c=[];g(a.5z,a.7m).1Z(12(){17 d=g(11),e=d.2g(a.14.2g)||1f,f=d.1z("14")&&fl("({"+d.1z("14")+"})")||{},h=d.1z("1Q"),l=d.1z("1J"),k=d.1z("1i")||X(e);c.4J({1t:e,1Q:h,1J:l,1i:k,14:f});a.b6||b.4J(d)});a.1n=c;a.6c=b},7u:12(){17 a=11,b=[];g.1Z(a.1n,12(c,d){"34"==1e d&&(d={2F:d});17 e=d.2F||d.1t||1f,f=d.14||{},h=d.1Q||1f,l=d.1J||1f,k=d.1i?d.1i.25():X(e),m="3p"!=1e e?W(e,"6Y"):"";f.1Y=f.1Y||("2y"==k?e:1f);f.7U=f.7U||1f;f.3z=f.3z||a.14.3z;f.1c=f.1c||1f;f.1d=f.1d||1f;f.3P="2V"!=1e f.3P?f.3P:!0;f.3T="2V"!=1e f.3T?f.3T:!0;f.1R="2V"!=1e f.1R?f.1R:a.14.1R.88&&g.2O({},{},a.14.1R.88);"1K"==k&&(f.26="2V"!=1e f.26?f.26:{},f.26.3s=f.26.3s||f.26.eD||1f,f.26.2e="2V"!=1e f.26.2e?f.26.2e:"2e",f.26.6f=f.26.6f||"eJ",f.26.5d="2V"!=1e f.26.5d?f.26.5d:!1);f.1c&&f.1d||("1K"==k?(f.1c=bs,f.1d=bo):"4j"==k?(f.1c="2l%",f.1d="90%"):"2D"==k&&(f.1c=bs,f.1d=bo));5X d.2F;d.1t=e;d.1Q=h;d.1J=l;d.1i=k;d.14=f;d.35=m;b.4J(d)});a.1n=b},bA:12(){17 a=11.1k.2W;11.1k.1p=a;11.1k.1j=11.1n[a+1]?a+1:1f;11.1k.1q=11.1n[a-1]?a-1:1f;11.8B();11.8E()},8B:12(){17 a=11,b=a.1k,c=a.14,d=G(),e=c.3r.25();c.8F&&!c.4k&&(b.3x=d.1c<=b.7E);b.1V.1D(c.3z).1T().1y({2U:c.1V.2U});c.2q&&b.1V.2g("bf",c.2q);c.2e.1P&&(b.1P.1D(c.3z).1H(b.bl),c.2e.3e&&b.1P.1H(b.6g),c.2e.3A&&b.1P.1H(b.8r),1<b.1M&&b.1P.1H(b.4a).1H(b.48));b.36.1D("18-7q").1H(b.1V).1H(b.2o).1H(b.1O).1H(b.2I).1H(b.2H);c.4k||b.36.1H(b.1P);c.2e.7d&&b.36.1H(b.2M).1H(b.2B);c.2e.1Y&&1<b.1M&&(b.36.1H(b.1B),b.1B.1D(c.3z).1D("18-"+e),g("1b.18-1B-6e",b.1B).4f(),b.6d=!0);d="1F"==c.3r.25()?{1C:1h(d.1c/2-b.2o.3f()/2)}:{1E:1h(d.1d/2-b.2o.2j()/2)};b.2o.1D(c.3z).1y(d);b.2M.2f(b.2B).1D(c.3z);"1F"==e&&b.2o.2f(b.2M).2f(b.2B).1D("1F");b.36[b.3x?"1D":"2E"]("3x");c.2N||(b.2B.2f(b.2B).2f(b.4a).2f(b.48).2E("3H"),0!=c.3v&&0!=b.1p||b.2B.2f(b.4a).1D("3H"),(c.3v>=b.1M-1||b.1p>=b.1M-1)&&b.2M.2f(b.48).1D("3H"));c.1x.4n?2P(12(){a.6k()},c.1x.2t):a.6k();c.1x.4n?(b.1V.1W().3i(c.1x.2t),b.1P.1W().3i(c.1x.2t)):(b.1V.1x(),b.1P.1x());17 f=b.1M;c.66&&1<b.1M&&g.1Z(a.1n,12(c,d){17 e=a.1n[c];a.7M(e,12(c){c&&g.2O(!0,e,{1i:c.1i,14:{26:c.26,1c:"2y"==c.1i?0:c.1c||e.1c,1d:"2y"==c.1i?0:c.1d||e.1d,1Y:e.14.1Y||c.1Y}});f--;0==f&&(b.5Z=!1,a.4H())})});a.5c();u.1w={3Z:12(){a.3l()},3e:12(){a.54()},b2:12(){a.2a("1j")},b1:12(){a.2a("1q")},43:12(b){a.43(b)},4w:12(){a.4w()},6o:12(){0<2T.1g?a.3a(!0):a.3a()},5S:12(b){a.5S(b)},b0:12(){a.3l();a.6p()}};c.2q&&(b.3q=!0,u.31.4b=c.2q+"/"+b.1p,2P(12(){b.3q=!1},55));c.3A.aZ||(a.5O(),b.8r.2E("18-4E").1D("18-3Y"));"12"==1e a.14.1l.aV&&a.14.1l.aV.1m(a)},5r:12(a,b,c){17 d=11,e,f;d.5c();a.2t=c||d.14.2C.5I;"1p"==b&&(d.1k.3X=a.14.3P?!1:!0,d.1k.5p=a.14.3T?!1:!0);4d(b){1r"1p":e=d.1k.1O;f=d.1k.1p;1A;1r"1j":e=d.1k.2I;f=d.1k.1j;1A;1r"1q":e=d.1k.2H,f=d.1k.1q}e.8f("3C 1u").1D("18-1O").1D(a.14.3z);g("1b.18-4O-1P",e).4N();1a(a.1J||d.14.4k){c=d.1k.4k.5D();1a(a.1J&&d.14.1x.1J){17 h=d.1k.1J.5D();h.4f().2G(a.1J);c.1H(h)}d.14.4k&&c.1H(1<d.1k.1M?d.1k.1P.5D():d.1k.1P);e.bP(c)}d.14.66||a.14.66?d.7M(a,12(c){17 h=a,m=g.2O({},a,{});c&&(a=g.2O(!0,a,{1i:c.1i,14:{26:c.26,1c:"2y"==c.1i?0:c.1c||a.1c,1d:"2y"==c.1i?0:c.1d||a.1d,1Y:a.14.1Y||c.1Y}}),h=g.2O({},a,{1t:c.4G}),a.14.66&&!m.14.1Y&&(d.1k.5Z=!1,d.4H()));d.8i(h,e,f,b)}):d.8i(a,e,f,b)},8i:12(a,b,c,d){17 e=11,f=e.14,h={aT:b,8n:c};4d(a.1i){1r"2y":"12"==1e f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1e a.14.2b&&a.14.2b.1m(e,h);e.4e(a.1t,12(l){"12"==1e f.1l.1U&&f.1l.1U.1m(e,e.1I,c);"12"==1e a.14.1U&&a.14.1U.1m(e,h);b.1z({2n:l?l.1c:d5,2r:l?l.1d:6r});g("1b.18-24",b).4f().1H(l?\'<7V 2m="\'+a.1t+\'" 1u="18-2y" />\':\'<2p 1u="18-68">\'+f.5w.4e+"</2p>");"12"==1e f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1e a.14.1L&&a.14.1L.1m(e,h);e.3I(a,d,b)});1A;1r"1K":b.1z({2n:a.14.1c,2r:a.14.1d});e.57(b,a);"12"==1e f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1e a.14.1L&&a.14.1L.1m(e,h);e.3I(a,d,b);1A;1r"4j":e.69();b.1z({2n:a.14.1c,2r:a.14.1d});17 l=e.57(b,a);"12"==1e f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1e a.14.1L&&a.14.1L.1m(e,h);"12"==1e f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1e a.14.2b&&a.14.2b.1m(e,h);l.4g("51",12(){"12"==1e f.1l.1U&&f.1l.1U.1m(e,e.1I,c);"12"==1e a.14.1U&&a.14.1U.1m(e,h);e.4B();e.3I(a,d,b);l.6s("51")});1A;1r"6t":17 l=g(a.1t),k=e.57(b,a),m=P(b);b.1z({2n:e.1n[c].14.1c||l.3f(),2r:e.1n[c].14.1d||l.2j()});k.ei().eq(0).1x();"12"==1e f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1e a.14.1L&&a.14.1L.1m(e,h);"12"==1e f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1e a.14.2b&&a.14.2b.1m(e,h);e.4e(m,12(){"12"==1e f.1l.1U&&f.1l.1U.1m(e,e.1I,c);"12"==1e a.14.1U&&a.14.1U.1m(e,h);e.3I(a,d,b)});1A;1r"2D":l=e.57(b,a);b.1z({2n:e.1n[c].14.1c||l.3f(),2r:e.1n[c].14.1d||l.2j()});"12"==1e f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1e a.14.1L&&a.14.1L.1m(e,h);e.3I(a,d,b);1A;1r"6K":17 n=a.14.6K||{};"12"==1e f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1e a.14.2b&&a.14.2b.1m(e,h);e.69();g.6K({2F:a.1t||f.2Q.2F,1z:n.1z||1f,7C:n.7C||"2G",1i:n.1i||f.2Q.1i,6u:n.6u||f.2Q.6u,6v:n.6v||f.2Q.6v,6w:n.6w||f.2Q.6w,6x:n.6x||f.2Q.6x,6y:n.6y||f.2Q.6y,6z:n.6z||f.2Q.6z,6A:n.6A||f.2Q.6A,6B:n.6B||f.2Q.6B,62:12(l,k,m){e.4B();17 s=g(l),y=g("1b.18-24",b),u=e.1n[c].14.1c||1h(s.2g("1c")),p=e.1n[c].14.1d||1h(s.2g("1d")),v=s.2g("1c")&&s.2g("1d")?{aO:"eE"}:{};y.4f().1H(g(\'<1b 1u="18-6C"></1b>\').1y(v).2G(s));b.1x().1z({2n:u||y.3f(),2r:p||y.2j()}).1T();"12"==1e f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1e a.14.1L&&a.14.1L.1m(e,h);s=P(b);e.4e(s,12(){"12"==1e f.1l.1U&&f.1l.1U.1m(e,e.1I,c);"12"==1e a.14.1U&&a.14.1U.1m(e,h);e.3I(a,d,b)});f.2Q.62(l,k,m);"12"==1e n.62&&n.62(l,k,m)},44:12(l,k,m){"12"==1e f.1l.1U&&f.1l.1U.1m(e,e.1I,c);"12"==1e a.14.1U&&a.14.1U.1m(e,h);e.4B();g("1b.18-24",b).4f().1H(\'<2p 1u="18-68">\'+f.5w.aN+"</2p>");e.3I(a,d,b);f.2Q.44(l,k,m);"12"==1e n.44&&n.44(l,k,m)}});1A;1r"2G":k=a.1t;24=g("1b.18-24",b);k[0].7W?l=k.5D():(k=g(k),l=k.5z?g("<1b>"+k+"</1b>"):k);17 y=e.1n[c].14.1c||1h(l.2g("1c")),s=e.1n[c].14.1d||1h(l.2g("1d"));e.57(b,a);l.eK(1v.3E).1T();"12"==1e f.1l.1L&&f.1l.1L.1m(e,e.1I,c);"12"==1e a.14.1L&&a.14.1L.1m(e,h);m=P(b);"12"==1e f.1l.2b&&f.1l.2b.1m(e,e.1I,c);"12"==1e a.14.2b&&a.14.2b.1m(e,h);e.4e(m,12(){"12"==1e f.1l.1U&&f.1l.1U.1m(e,e.1I,c);"12"==1e a.14.1U&&a.14.1U.1m(e,h);b.1x().1z({2n:y||24.3f(),2r:s||24.2j()}).1T();l.4N();e.3I(a,d,b)})}},3I:12(a,b,c){17 d=11,e=d.1k,f=d.14;"1p"!=b&&("1j"==b?c.1D("18-1j"):c.1D("18-1q"));1a("1p"==b)17 h=e.1p;2k 1a("1j"==b)17 l=f.1N.78,h=e.1j;2k l=f.1N.6b,h=e.1q;17 k={aT:c,8n:h};d.1n[h].14.1c=d.1n[h].14.1c||0;d.1n[h].14.1d=d.1n[h].14.1d||0;"1p"==b?f.1x.4n?c.1y(z,F).3i(a.2t,12(){c.1y(z,"");1a(a.1Q){d.8R(a,c);17 b=g("1b.18-1Q",c),e=1h(b.2j()/c.2j()*2l);f.1Q.2W&50>=e&&b.3i(f.2C.5Y)}1a(b=a.14.1R)d.7f(b,a.1t,c),f.1R.2W&&g("1b.18-1R",c).3i(f.2C.5Y);d.4H();"12"==1e f.1l.2v&&f.1l.2v.1m(d,d.1I,h);"12"==1e a.14.2v&&a.14.2v.1m(d,k)}):(c.1x(),d.4H(),"12"==1e f.1l.2v&&f.1l.2v.1m(d,d.1I,h),"12"==1e a.14.2v&&a.14.2v.1m(d,k)):f.1x.4n?c.aM(a.2t,l,12(){"1j"==b?e.3V=!1:e.3U=!1;d.4H();"12"==1e f.1l.2v&&f.1l.2v.1m(d,d.1I,h);"12"==1e a.14.2v&&a.14.2v.1m(d,k)}):(c.1y({2U:l}).1x(),"1j"==b?e.3V=!1:e.3U=!1,d.4H(),"12"==1e f.1l.2v&&f.1l.2v.1m(d,d.1I,h),"12"==1e a.14.2v&&a.14.2v.1m(d,k));2P(12(){d.3a()},0)},6k:12(){17 a=11.1k,b=11.14;b.2N&&3<=a.1M?(a.1p==a.1M-1&&(a.1j=0),0==a.1p&&(a.1q=a.1M-1)):b.2N=!1;11.5r(11.1n[a.1p],"1p",b.1x.2t);11.1n[a.1j]&&11.5r(11.1n[a.1j],"1j",b.1x.2t);11.1n[a.1q]&&11.5r(11.1n[a.1q],"1q",b.1x.2t)},4H:12(){17 a=11,b=a.1k,c=a.14,d=1f;1a(b.6d&&!a.1k.5Z){17 e=b.1B,f=g("1b.18-1B-24",e),h=g("1b.18-1B-6e",f),l=0;h.8f("3C").4f();g.1Z(a.1n,12(k,m){17 n=b.1p==k?"18-4V":"",y=b.1p==k?c.1B.7i:c.1B.7j,s=m.14.1Y,q=g(\'<1b 1u="18-1Y"></1b>\'),r=g(\'<1b 1u="18-1Y-6E"></1b>\');q.1y({2U:0}).1D(n);"1K"!=m.1i&&"2D"!=m.1i||"2V"!=1e m.14.6E?m.14.6E&&(r.1D("18-1Y-"+m.14.6E),q.1H(r)):(r.1D("18-1Y-1K"),q.1H(r));s&&a.4e(s,12(b){l++;b?q.1z({2n:b.1c,2r:b.1d}).1H(\'<7V 2m="\'+s+\'" 47="0" />\'):q.1z({2n:c.1B.7n,2r:c.1B.7o});4M(d);d=2P(12(){a.5Q(e,f,h)},20);2P(12(){q.aM(c.2C.5I,y)},20*l)});h.1H(q)});a.1k.5Z=!0}},5Q:12(a,b,c){17 d=11,e=d.1k,f=d.14,h=G(),l=f.3r.25();a||(a=e.1B);b||(b=g("1b.18-1B-24",a));c||(c=g("1b.18-1B-6e",b));17 k=g(".18-1Y",c),e="1F"==l?h.1c-f.1N.5P:k.eq(0).3f()-f.1N.5P,h="1F"==l?k.eq(0).2j()-f.1N.5M:h.1d-f.1N.5M,m="1F"==l?0:e,n="1F"==l?h:0,y=g(".18-4V",c),s={};3>2T.1g&&(k.1y({2U:f.1B.7j}),y.1y({2U:f.1B.7i}));k.1Z(12(a){a=g(11);17 b=a.1z(),c="1F"==l?0:f.1B.7n;1d="1F"==l?f.1B.7o:0;7t=d.5L(c,1d,b.2n,b.2r,!0);a.1y({1c:7t.1c,1d:7t.1d});"1F"==l&&a.1y({"cr":"1C"});"1F"==l?m+=a.3f():n+=a.2j()});s={1c:m,1d:n};c.1y(s);17 s={},k=c.3m(),q=y.1g?y.3m():{1E:1h(h/2),1C:1h(e/2)};k.1E-=A.4A();k.1C-=A.4r();q.1E=q.1E-k.1E-A.4A();q.1C=q.1C-k.1C-A.4r();"1F"==l?(s.1E=0,s.1C=1h(e/2-q.1C-y.3f()/2)):(s.1E=1h(h/2-q.1E-y.2j()/2),s.1C=0);3>2T.1g?c.1W().2w(s,f.2C.5J,"2R"):c.1y(s)},4e:12(a,b){g.3G(a)||(a=[a]);17 c=11,d=a.1g;0<d?(c.69(),g.1Z(a,12(e,f){17 h=3R cP;h.cR=12(){d-=1;0==d&&(c.4B(),b(h))};h.cT=h.cV=12(){d-=1;0==d&&(c.4B(),b(!1))};h.2m=a[e]})):b(!1)},8v:12(){17 a=11,b=a.1k,c=D?"3S.1w":"63.1w",d=D?"63.1w":"3S.1w";g.1Z(a.6c,12(e,f){f.1S(c,12(){b.1p=e;b.1j=a.1n[e+1]?e+1:1f;b.1q=a.1n[e-1]?e-1:1f;a.8B();a.8E();19!1}).1S(d,12(){19!1})})},6p:12(){g.1Z(11.6c,12(a,b){b.5y(".1w")})},4w:12(){11.6p();11.8H();11.7u();11.8v()},8E:12(){12 a(a){"7r"!==a.1i||c.3x||(c.4s||c.7B.1x(),c.4s=4M(c.4s),c.4s=2P(12(){c.7B.1T();c.4s=4M(c.4s)},9V))}17 b=11,c=b.1k,d=b.14,e=d.3r.25(),f=g(".18-1O"),h=v.7y+".1w",l=7z=2l;M.4g("d3.1w",12(){17 a=G();d.8F&&!d.4k&&(c.3x=a.1c<=c.7E);c.36[c.3x?"1D":"2E"]("3x");b.3a(1f);D&&(4M(c.az),c.az=2P(12(){17 a=K().y;u.6h(0,a-30);u.6h(0,a+30);u.6h(0,a)},d7));c.6d&&b.5Q()}).4g("db.1w",12(a){1a(d.2e.3N)4d(a.dd){1r 13:a.dv&&d.3N.av&&b.54();1A;1r 27:d.3N.am&&b.3l();1A;1r 37:d.3N.1C&&!c.4W&&b.2a("1q");1A;1r 38:d.3N.8U&&!c.4W&&b.2a("1q");1A;1r 39:d.3N.5v&&!c.4W&&b.2a("1j");1A;1r 40:d.3N.ag&&!c.4W&&b.2a("1j")}});v.4S&&M.4g(h,12(){b.7J()});17 h=[d.1Q.1x+".1w",d.1Q.1T+".1w",d.1R.1x+".1w",d.1R.1T+".1w"].7K(12(a,b,c){19 c.5u(a)===b}),k="";g.1Z(h,12(a,b){0!=a&&(k+=" ");k+=b});A.1S(J,".18-1V",12(){d.1V.af&&b.3l()}).1S(J,".18-1j, .18-1j-49",12(){b.2a("1j")}).1S(J,".18-1q, .18-1q-49",12(){b.2a("1q")}).1S(J,".18-1Y",12(){17 a=g(11),a=g(".18-1Y",c.1B).eo(a);a!=c.1p&&b.43(a)}).1S(k,".18-1O:ae(.18-1j, .18-1q)",12(a){17 b=g("1b.18-1Q",c.1O),e=g("1b.18-1R",c.1O),f=d.2C.5Y;c.3V||c.3U?(a.1i!=d.1Q.1x||b.3L(":3d")?a.1i==d.1Q.1T&&b.3L(":3d")&&b.4h(f):b.3i(f),a.1i!=d.1R.1x||e.3L(":3d")?a.1i==d.1R.1T&&e.3L(":3d")&&e.4h(f):e.3i(f)):(a.1i!=d.1Q.1x||b.3L(":3d")?a.1i==d.1Q.1T&&b.3L(":3d")&&b.1W().4h(f):b.1W().3i(f),a.1i!=d.1R.1x||e.3L(":3d")?a.1i==d.1R.1T&&e.3L(":3d")&&e.1W().4h(f):e.1W().3i(f))}).1S("4D.1w 5h.1w",".18-6C",12(a){c.3X="4D"==a.1i?!0:!1}).1S(J,".18-1P a.18-3Z, .18-1P a.18-3e, .18-1P a.18-4E, .18-1P a.18-3Y",12(){17 a=g(11);a.7P("18-3e")?b.54():a.7P("18-4E")?(b.5O(),a.1D("18-3Y").2E("18-4E")):a.7P("18-3Y")?(b.3Y(),a.1D("18-4E").2E("18-3Y")):b.3l()}).1S(T,".18-1V, .18-1B-24",12(a){a.7Q()});1a(d.2e.7d&&!D)A.1S("7r.1w",a);1a(d.2e.3A&&d.3A.ad)A.1S("4D.1w 5h.1w",".18-1O:ae(.18-1j, .18-1q)",12(a){"4D"==a.1i&&c.3w?b.3Y():"5h"==a.1i&&c.4u&&b.5O()});h=g(".18-1V, .18-1O, .18-1B");1a(d.2e.3P)h.1S("3P.1w",12(a,d){c.3X||(a.7Q(),0>d?b.2a("1j"):0<d&&b.2a("1q"))});1a(d.2e.3T)f.1S(b3,12(a){12 h(a){1a(r){17 b=a.6Q.6R?a.6Q.6R[0]:a;t={5j:(3R a7).a6(),2i:[b.a4-q,b.a3-s]};f.1Z(12(){17 a=g(11),b=a.1z("3m")||{1E:a.3m().1E-s,1C:a.3m().1C-q},c=b.1E,b=b.1C,d=[r.2i[0]-t.2i[0],r.2i[1]-t.2i[1]];"1F"==e?a.1W().1y({1C:b-d[0]}):a.1W().1y({1E:c-d[1]})});a.7Q()}}12 k(){f.1Z(12(){17 a=g(11),b=a.1z("3m")||{1E:a.3m().1E-s,1C:a.3m().1C-q},c=b.1E,b=b.1C;a.1y(z,F).1W().2w({1E:c,1C:b},a0,"2R",12(){a.1y(z,"")})})}1a(!c.3V&&!c.3U&&1!=c.1M&&!c.5p){c.36.1D("18-9Z");a=a.6Q.6R?a.6Q.6R[0]:a;17 s=A.4A(),q=A.4r(),r={5j:(3R a7).a6(),2i:[a.a4-q,a.a3-s]},t;f.4g(T,h);A.83(b4,12(a){f.6s(T,h);c.36.2E("18-9Z");r&&t&&("1F"==e&&9Y>t.5j-r.5j&&23.4Z(r.2i[0]-t.2i[0])>l&&23.4Z(r.2i[1]-t.2i[1])<7z?r.2i[0]>t.2i[0]?c.1p!=c.1M-1||d.2N?(c.3b=!0,b.2a("1j")):k():0!=c.1p||d.2N?(c.3b=!0,b.2a("1q")):k():"9X"==e&&9Y>t.5j-r.5j&&23.4Z(r.2i[1]-t.2i[1])>l&&23.4Z(r.2i[0]-t.2i[0])<7z?r.2i[1]>t.2i[1]?c.1p!=c.1M-1||d.2N?(c.3b=!0,b.2a("1j")):k():0!=c.1p||d.2N?(c.3b=!0,b.2a("1q")):k():k());r=t=H})}})},43:12(a){17 b=11,c=b.1k,d=b.14,e=a-c.1p;d.2N&&(a==c.1M-1&&0==c.1p&&(e=-1),c.1p==c.1M-1&&0==a&&(e=1));1a(1==e)b.2a("1j");2k 1a(-1==e)b.2a("1q");2k{1a(c.3V||c.3U)19!1;"12"==1e d.1l.6W&&d.1l.6W.1m(b,b.1I);d.2q&&(c.3q=!0,u.31.4b=d.2q+"/"+a);b.1n[a]&&(b.1n[a].14.3P?b.1k.3X=!1:c.3X=!0,c.5p=b.1n[a].14.3T?!1:!0);g.1Z([c.1O,c.2I,c.2H],12(a,b){b.1y(z,F).4h(d.2C.5I)});c.1p=a;c.1j=a+1;c.1q=a-1;b.5c();2P(12(){b.6k()},d.2C.5I+50);g(".18-1Y",c.1B).2E("18-4V").eq(a).1D("18-4V");b.5Q();d.2q&&2P(12(){c.3q=!1},55);d.2N||(c.2M.2f(c.2B).2f(c.4a).2f(c.48).2E("3H"),0==c.1p&&c.2B.2f(c.4a).1D("3H"),c.1p>=c.1M-1&&c.2M.2f(c.48).1D("3H"));b.87();"12"==1e d.1l.6X&&d.1l.6X.1m(b,b.1I)}},2a:12(a){17 b=11,c=b.1k,d=b.14,e=d.3r.25(),f=G(),h=d.2C.9W;1a(c.3V||c.3U)19!1;17 l="1j"==a?c.1j:c.1q;d.2q&&(c.3q=!0,u.31.4b=d.2q+"/"+l);1a("1j"==a){1a(!b.1n[l])19!1;17 k=c.2I,m=c.1O,n=c.2H,y="18-1q",s="18-1j"}2k 1a("1q"==a){1a(!b.1n[l])19!1;k=c.2H;m=c.1O;n=c.2I;y="18-1j";s="18-1q"}"12"==1e d.1l.6W&&d.1l.6W.1m(b,b.1I);"1j"==a?c.3V=!0:c.3U=!0;17 q=g("1b.18-1Q",m),r=g("1b.18-1R",m);q.1g&&q.1W().4h(h,12(){g(11).4N()});r.1g&&r.1W().4h(h,12(){g(11).4N()});b.1n[l].1Q&&(b.8R(b.1n[l],k),q=g("1b.18-1Q",k),r=1h(q.2j()/k.2j()*2l),d.1Q.2W&&50>=r&&q.3i(h));1a(q=b.1n[l].14.1R)b.7f(q,b.1n[l].1t,k),d.1R.2W&&g("1b.18-1R",k).3i(d.2C.5Y);g.1Z([k,m,n],12(a,b){b.2E("18-1j 18-1q")});17 t=k.1z("3m"),q=f.1c-d.1N.5P,f=f.1d-d.1N.5M,r=t.5E.1c,p=t.5E.1d,v=t.9T,t=t.8b,w=1h(f/2-p/2-t.H-v.H/2),t=1h(q/2-r/2-t.W-v.W/2);k.1y(z,F).2w({1E:w,1C:t,2U:1},h,c.3b?"2R":"5q",12(){k.1y(z,"")});g("1b.18-24",k).2w({1c:r,1d:p},h,c.3b?"2R":"5q");17 p=m.1z("3m"),x=p.3p,t=p.8b,r=p.5E.1c,p=p.5E.1d,r=1h(r*d.1N["1j"==a?"5B":"5A"]),p=1h(p*d.1N["1j"==a?"5B":"5A"]),w="1F"==e?1h(f/2-x.5k-p/2-t.H-v.H/2):1h(f-x.4v-t.H-v.H/2);"1q"==a?t="1F"==e?1h(q-x.4v-t.W-v.W/2):1h(q/2-r/2-t.W-x.5k-v.W/2):(w="1F"==e?w:1h(x.4v-t.H-p-v.H/2),t="1F"==e?1h(x.4v-t.W-r-v.W/2):1h(q/2-x.5k-r/2-t.W-v.W/2));g("1b.18-24",m).2w({1c:r,1d:p},h,c.3b?"2R":"5q");m.1D(y).1y(z,F).2w({1E:w,1C:t,2U:d.1N.6b},h,c.3b?"2R":"5q",12(){m.1y(z,"");g(".18-1Y",c.1B).2E("18-4V").eq(l).1D("18-4V");b.5Q();b.1n[l]&&(c.3X=b.1n[l].14.3P?!1:!0,c.5p=b.1n[l].14.3T?!1:!0);c.3b=!1;"1j"==a?(c.2I=n,c.2H=m,c.1O=k,c.2I.1T(),c.1j+=1,c.1q=c.1p,c.1p+=1,d.2N&&(c.1p>c.1M-1&&(c.1p=0),c.1p==c.1M-1&&(c.1j=0),0==c.1p&&(c.1q=c.1M-1)),b.5c(),b.1n[c.1j]?b.5r(b.1n[c.1j],"1j"):c.3V=!1):(c.2H=n,c.2I=m,c.1O=k,c.2H.1T(),c.1j=c.1p,c.1p=c.1q,c.1q=c.1p-1,d.2N&&(c.1p==c.1M-1&&(c.1j=0),0==c.1p&&(c.1q=c.1M-1)),b.5c(),b.1n[c.1q]?b.5r(b.1n[c.1q],"1q"):c.3U=!1);d.2q&&2P(12(){c.3q=!1},55);d.2N||(c.2M.2f(c.2B).2f(c.4a).2f(c.48).2E("3H"),0==c.1p&&c.2B.2f(c.4a).1D("3H"),c.1p>=c.1M-1&&c.2M.2f(c.48).1D("3H"));b.3a();b.87();"12"==1e d.1l.6X&&d.1l.6X.1m(b,b.1I)});w="1F"==e?C(n,"1E"):"1j"==a?1h(-(f/2)-n.2j()):1h(2*w);t="1F"==e?"1j"==a?1h(-(q/2)-n.3f()):1h(2*t):C(n,"1C");n.1y(z,F).2w({1E:w,1C:t,2U:d.1N.78},h,c.3b?"2R":"5q",12(){n.1y(z,"")}).1D(s)},8R:12(a,b){17 c=g(\'<1b 1u="18-1Q"></1b>\');a.1Q&&(c.2G(a.1Q),g("1b.18-24",b).1H(c))},9Q:12(a,b){17 c=11.14,d=u.31.33;g.1Z(a,12(e,f){17 h,l;4d(e.25()){1r"9N":h="3j://59.9N.3h/9M.8m?v=4&2m=bm&u={1t}";l="4y 1S c5";1A;1r"9L":h="3j://9L.3h/c6?5b={1t}";l="4y 1S cc";1A;1r"cd":h="ce://cf.cg.3h/9M?2F={1t}";l="4y 1S ch+";1A;1r"9F":h="3j://9F.3h/ck?2F={1t}";l="4y 1S cq";1A;1r"9B":h="3j://9B.3h/9A?cx=2&2F={1t}";l="4y 1S cE";1A;1r"8k":h="3j://8k.3h/9A?2F={1t}",l="4y 1S 8k"}a[e]={1t:f.1t&&L(d,f.1t)||c.2q&&u.31.33||"34"!==1e b&&d||b&&L(d,b)||d,4G:f.4G||h||f.1t&&L(d,f.1t)||b&&L(d,b),2S:l||f.2S||"4y 1S "+e,1c:"2V"==1e f.1c||8p(f.1c)?cK:1h(f.1c),1d:f.1d||cL}});19 a},7f:12(a,b,c){17 d=g(\'<1b 1u="18-1R"></1b>\'),e="<9x>";a=11.9Q(a,b);g.1Z(a,12(a,b){a.25();17 c=b.4G.1o("{1t}",7h(b.1t).1o(/!/g,"%21").1o(/\'/g,"%27").1o(/\\(/g,"%28").1o(/\\)/g,"%29").1o(/\\*/g,"%2A").1o(/%20/g,"+"));e+=\'<9u 1u="\'+a+\'"><a 33="\'+c+\'" cO="9s:cQ.9r(11.33\'+(0>=b.1c||0>=b.1d?"":", \'\', \'cS=5g,1P=5g,cU=8q,cW=8q,1d="+b.1d+",1c="+b.1c+",1C=40,1E=40\'")+\');19 2Z;" 1J="\'+b.2S+\'" 9q="9o"></a></9u>\'});e+="</9x>";d.2G(e);g("1b.18-24",c).1H(d)},54:12(){v.4S?v.8t()?v.4P(1v.3E):v.72(1v.3E):11.7J()},7J:12(){17 a=11.1k,b=G(),c=11.14;1a(c.3t){17 d=a.1O,e=11.1n[a.1p],f=b.1c,h=b.1d,l=[d,a.2I,a.2H,a.2M,a.2B,a.1V,a.1P,a.1B,a.2o],b=[a.2I,a.2H,a.2M,a.2B,a.2o,a.1B];1a(a.2z)a.2z=a.4W=a.3X=a.5p=!1,a.1V.1y({2U:11.14.1V.2U}),g.1Z(b,12(a,b){b.1x()}),a.6g.2g("1J",c.2S.8x),d.1z({2n:d.1z("73"),2r:d.1z("74"),73:1f,74:1f}),g.1Z(l,12(a,b){b.2E("18-3e")}),"12"==1e c.1l.9g&&c.1l.9g.1m(11,11.1I);2k{a.2z=a.4W=a.3X=a.5p=!0;a.1V.1y({2U:1});g.1Z(b,12(a,b){b.1T()});a.6g.2g("1J",c.2S.9f);1a(-1!=c.76.1X(e.1i))d.1z({73:d.1z("2n"),74:d.1z("2r"),2n:f,2r:h});2k{17 b=e.14.4I||c.4I||"",a=f,e=h,f=d.1z("2n"),k=d.1z("2r");"df"==b.25()?(e=a/f*k,e<h&&(a=h/k*f,e=h)):"dj"==b.25()?(h=11.5L(a,e,f,k,!0),a=h.1c,e=h.1d):"dk"!=b.25()&&(h=11.5L(a,e,f,k,f>a||k>e?!0:!1),a=h.1c,e=h.1d);d.1z({73:d.1z("2n"),74:d.1z("2r"),2n:a,2r:e})}g.1Z(l,12(a,b){b.1D("18-3e")});"12"==1e c.1l.9d&&c.1l.9d.1m(11,11.1I)}}2k a.2z=a.2z?!1:!0;11.3a(!0)},3l:12(){17 a=11.1k,b=11.14;M.6s(".1w");a.2z&&v.4P(1v.3E);A.5y(".1w");g(".18-1V, .18-1O, .18-1B").5y(".1w");b.1T.4n?a.1V.1W().4h(b.1T.2t,12(){a.1V.4N();a.36.2E("18-7q").5y(".1w")}):(a.1V.4N(),a.36.2E("18-7q").5y(".1w"));g.1Z([a.1P,a.1O,a.2I,a.2H,a.2M,a.2B,a.2o,a.1B],12(a,b){b.8f("3C").4N()});a.5Z=a.2z=!1;u.1w=1f;b.2q&&(a.3q=!0,da(),2P(12(){a.3q=!1},55));"12"==1e b.1l.9c&&b.1l.9c.1m(11,11.1I)},3a:12(){17 a=11.1k,b=11.14,c=b.3r.25(),d=G(),e=d.1c,f=d.1d,d=a.2z&&b.3t||a.3x?0:"1F"==c?0:a.1B.3f(),h=a.3x?a.1P.2j():a.2z&&b.3t?0:"1F"==c?a.1B.2j():0,e=a.2z&&b.3t?e:e-b.1N.5P,f=a.2z&&b.3t?f:f-b.1N.5M,l="1F"==c?1h(11.1n[a.1j]||11.1n[a.1q]?2*(b.1N.64+b.1N.65):30>=e/10?30:e/10):1h(30>=e/10?30:e/10)+d,k="1F"==c?1h(30>=f/10?30:f/10)+h:1h(11.1n[a.1j]||11.1n[a.1q]?2*(b.1N.64+b.1N.65):30>=f/10?30:f/10),d={1i:"1p",1c:e,1d:f,5N:11.1n[a.1p],8C:l,8D:k,9a:d,97:h,2w:2T.1g,1O:a.1O};11.7a(d);11.1n[a.1j]&&(d=g.2O(d,{1i:"1j",5N:11.1n[a.1j],4v:b.1N.64,5k:b.1N.96,1O:a.2I}),11.7a(d));11.1n[a.1q]&&(d=g.2O(d,{1i:"1q",5N:11.1n[a.1q],4v:b.1N.65,5k:b.1N.95,1O:a.2H}),11.7a(d));b="1F"==c?{1C:1h(e/2-a.2o.3f()/2)}:{1E:1h(f/2-a.2o.2j()/2)};a.2o.1y(b)},7a:12(a){17 b=11.1k,c=11.14,d=c.3r.25(),e="1p"==a.1i?b.2z&&c.3t?a.1c:a.1c-a.8C:a.1c-a.8C,f="1p"==a.1i?b.2z&&c.3t?a.1d:a.1d-a.8D:a.1d-a.8D,h=a.5N,l=a.5N.14,k=a.1O,m=a.4v||0,n=a.5k||0,p=a.9a,s=a.97;"1p"==a.1i?("32"==1e l.1c&&l.1c&&(e=b.2z&&c.3t&&(-1!=c.76.1X(h.1i)||l.4I||c.4I)?e:l.1c>e?e:l.1c),"32"==1e l.1d&&l.1d&&(f=b.2z&&c.3t&&(-1!=c.76.1X(h.1i)||l.4I||c.4I)?f:l.1d>f?f:l.1d)):("32"==1e l.1c&&l.1c&&(e=l.1c>e?e:l.1c),"32"==1e l.1d&&l.1d&&(f=l.1d>f?f:l.1d));f=1h(f-g(".18-4O-1P",k).2j());b="34"==1e l.1c&&-1!=l.1c.1X("%")?Y(1h(l.1c.1o("%","")),a.1c):k.1z("2n");h="34"==1e l.1d&&-1!=l.1d.1X("%")?Y(1h(l.1d.1o("%","")),a.1d):k.1z("2r");h="34"==1e l.1c&&-1!=l.1c.1X("%")||"34"==1e l.1d&&-1!=l.1d.1X("%")?{1c:b,1d:h}:11.5L(e,f,b,h);e=g.2O({},h,{});"1q"==a.1i||"1j"==a.1i?(b=1h(h.1c*("1j"==a.1i?c.1N.5A:c.1N.5B)),h=1h(h.1d*("1j"==a.1i?c.1N.5A:c.1N.5B))):(b=h.1c,h=h.1d);f=1h((C(k,"4Q-1C")+C(k,"4Q-5v")+C(k,"47-1C-1c")+C(k,"47-5v-1c"))/2);l=1h((C(k,"4Q-1E")+C(k,"4Q-94")+C(k,"47-1E-1c")+C(k,"47-94-1c")+g(".18-4O-1P",k).2j())/2);4d(a.1i){1r"1p":17 q=1h(a.1d/2-h/2-l-s/2),r=1h(a.1c/2-b/2-f-p/2);1A;1r"1j":q="1F"==d?1h(a.1d/2-n-h/2-l-s/2):1h(a.1d-m-l-s/2);r="1F"==d?1h(a.1c-m-f-p/2):1h(a.1c/2-b/2-f-n-p/2);1A;1r"1q":q="1F"==d?1h(a.1d/2-n-h/2-l-s/2):1h(m-l-h-s/2),r="1F"==d?1h(m-f-b-p/2):1h(a.1c/2-n-b/2-f-p/2)}k.1z("3m",{1E:q,1C:r,5E:e,8b:{W:f,H:l},9T:{W:p,H:s},3p:a});0<a.2w&&c.2C.6o?(k.1y(z,F).1W().2w({1E:q,1C:r},c.2C.5J,"2R",12(){k.1y(z,"")}),g("1b.18-24",k).1W().2w({1c:b,1d:h},c.2C.5J,"2R"),g("1b.18-4O-1P",k).1W().2w({1c:b},c.2C.5J,"2R",12(){g(11).1y("aO","3d")})):(k.1y({1E:q,1C:r}),g("1b.18-24",k).1y({1c:b,1d:h}),g("1b.18-4O-1P",k).1y({1c:b}))},5O:12(a){17 b=11,c=b.1k,d=b.14;!d.3A.8K||d.2e.3A&&1>=c.1M||a<c.4u||(c.4u=0,c.3w&&(c.3w=4M(c.3w)),c.3w=2P(12(){c.1p==c.1M-1?b.43(0):b.2a("1j")},d.3A.8K))},3Y:12(a){17 b=11.1k;a<b.4u||(b.4u=a||2l,b.3w&&(b.3w=4M(b.3w)))},87:12(){17 a=11.1k;11.14.2e.3A&&a.3w&&!a.4u&&11.5O()},5L:12(a,b,c,d,e){41=a?b?23.2Y(a/c,b/d):a/c:b/d;e||(41>11.14.4q?41=11.14.4q:41<11.14.4p&&(41=11.14.4p));a=11.14.8N?23.8O(c*41):a;b=11.14.8N?23.8O(d*41):b;19{1c:a,1d:b,ek:41}},5S:12(a){11.14=g.2O(!0,11.14,a||{});11.4w()},bu:12(){17 a=1v.5i("1K");11.3c={2D:0<=1h(N.3M("ai"))||0<=1h(N.3M("8V"))?!0:!1,2X:0<=1h(N.3M("5W"))?!0:!1,8T:!(!a.4l||!a.4l("1K/42").1o(/5g/,"")),8S:!(!a.4l||!a.4l("1K/3s").1o(/5g/,"")),8L:!(!a.4l||!a.4l("1K/4X").1o(/5g/,"")),8X:!(!a.4l||!a.4l("1K/2X").1o(/5g/,""))}},57:12(a,b){17 c;4d(b.1i){1r"1K":c=!1;17 d=b.7U,e=b.14.26;("1K/42"==d||"42"==b.35||"7N"==b.35||e.8Y)&&11.3c.8T?(b.35="42",b.1t=e.8Y||b.1t):e.3s&&11.3c.8S?(b.35="3s",b.1t=e.3s||b.1t):e.4X&&11.3c.8L&&(b.35="7S",b.1t=e.4X||b.1t);!11.3c.8T||"1K/42"!=d&&"42"!=b.35&&"7N"!=b.35?!11.3c.8S||"1K/3s"!=d&&"3s"!=b.35?!11.3c.8L||"1K/4X"!=d&&"7S"!=b.35?!11.3c.8X||"1K/2X"!=d&&"aW"!=b.35&&"eB"!=b.35||(c=!0,d="1K/2X"):(c=!0,d="1K/4X"):(c=!0,d="1K/3s"):(c=!0,d="1K/42");c?c=g("<1K />",{1c:"2l%",1d:"2l%",6f:e.6f,5d:e.5d,8Z:e.8Z,2e:e.2e}).1H(g("<4G />",{2m:b.1t,1i:d})):11.3c.2X?(c=g("<3p />",{1i:"1K/2X",4K:"3j://59.6J.3h/2X/7v"}).2g({1z:b.1t,1c:"2l%",1d:"2l%"}).1H(g("<4i />",{2h:"2m",2J:b.1t})).1H(g("<4i />",{2h:"5d",2J:"2Z"})).1H(g("<4i />",{2h:"91",2J:"2Z"})).1H(g("<4i />",{2h:"92",2J:"93"})),x.6V&&(c=ac(b.1t,"2l%","2l%","","eG","93","eH","2Z","eI","2Z"))):c=g("<2p />",{"1u":"18-68",2G:11.14.5w.8J.1o("{4K}","3j://59.6J.3h/2X/7v").1o("{1i}","5W")});1A;1r"2D":1a(11.3c.2D){17 f="",h=0;b.14.8I?g.1Z(b.14.8I,12(a,b){0!=h&&(f+="&");f+=a+"="+7h(b);h++}):f=1f;c=g("<7g />").2g({1i:"5T/x-7b-2D",2m:b.1t,1c:"32"==1e b.14.1c&&b.14.1c&&"1"==11.14.4p&&"1"==11.14.4q?b.14.1c:"2l%",1d:"32"==1e b.14.1d&&b.14.1d&&"1"==11.14.4p&&"1"==11.14.4q?b.14.1d:"2l%",eN:"eO",eP:"#eR",4E:"79",91:"79",eV:"79",eX:"eY",92:"eZ",f0:"98",99:"79",8I:f,3e:"8q"})}2k c=g("<2p />",{"1u":"18-68",2G:11.14.5w.8J.1o("{4K}","3j://59.f7.3h/go/f9").1o("{1i}","fb 8V fc")});1A;1r"4j":c=g("<4j />").2g({1c:"32"==1e b.14.1c&&b.14.1c&&"1"==11.14.4p&&"1"==11.14.4q?b.14.1c:"2l%",1d:"32"==1e b.14.1d&&b.14.1d&&"1"==11.14.4p&&"1"==11.14.4q?b.14.1d:"2l%",2m:b.1t,fd:0,gs:"",fh:"",99:""});1A;1r"6t":c=g(\'<1b 1u="18-6C"></1b>\').2G(g(b.1t).5D(!0));1A;1r"2G":c=b.1t,c[0].7W||(c=g(b.1t),c=c.5z?g("<1b>"+c+"</1b>"):c),c=g(\'<1b 1u="18-6C"></1b>\').2G(c)}g("1b.18-24",a).4f().2G(c);19 c},7M:12(a,b){17 c=11,d=a.1t,e={1g:!1};c.69();ea(d,12(a){c.4B();1a(6r==a.5b){a=a.fi;17 d=a.1i,l=a.4G;e.4G=l.2m;e.1c=l.1c&&1h(l.1c)||0;e.1d=l.1d&&1h(l.1d)||0;e.1i=d;e.1Y=l.1Y||a.fk[0];e.26=a.26||{};e.1g=!0;"5T/x-7b-2D"==l.1i?e.1i="2D":-1!=l.1i.1X("1K/")?e.1i="1K":-1!=l.1i.1X("/2G")?e.1i="4j":-1!=l.1i.1X("2y/")&&(e.1i="2y")}2k 1a("2V"!=1e a.9b)5C a.9b;b(e.1g?e:!1)})},7F:12(a){17 b=11.1k,c=11.14;a=S(a||u.31.33).4b;17 d=a.1X("#"+c.2q+"/"),e=a.2u("/");b.3q||"#"+c.2q!=e[0]&&1<a.1g||(-1!=d?(b=e[1]||0,11.1n[b]?(a=g(".18-1V"),a.1g&&a.2g("bf")==c.2q?11.43(b):11.6c[b].77("63")):(a=g(".18-1V"),a.1g&&11.3l())):(a=g(".18-1V"),a.1g&&11.3l()))}};g.fn.1w=12(){17 a=2T,b=g.9z(a[0])?a[0]:a[1],c=g.3G(a[0])||"34"==1e a[0]?a[0]:a[1];b||(b={});17 b=g.2O(!0,{2g:"33",3r:"9X",3z:"fu",2q:!1,2N:!1,3v:0,bz:!1,8N:!0,4q:1,4p:0.2,4k:!1,66:!1,8F:!0,3t:!0,4I:1f,76:"2D, 1K",1V:{af:!0,2U:0.85},2e:{7d:!1,3A:!1,1P:!0,3e:!0,1Y:!0,3N:!0,3P:!0,3T:!0},3N:{1C:!0,5v:!0,8U:!0,ag:!0,am:!0,av:!0},1x:{4n:!0,2t:9e,1J:!0},1T:{4n:!0,2t:9e},1Q:{2W:!0,1x:"4D",1T:"5h"},1R:{2W:!0,1x:"4D",1T:"5h",88:!1},1N:{5P:0,5M:0,64:45,96:0,78:1,5A:1,65:45,95:0,6b:1,5B:1},1B:{7n:fG,7o:80,7j:1,7i:0.6},2C:{6o:!0,5J:6r,9W:a0,5I:fH,5Y:6r},3A:{8K:fI,ad:!1,aZ:!0},2S:{3Z:"fK fL 75 3Z",8x:"8z 9h (9i+8z)",9f:"fV 9h (9i+8z)",bt:"gc",1j:"gd",7Y:"gf"},5w:{4e:"9j 44 9k 9l 9m 75 51 gq.",aN:"9j 44 9k 9l 9m 75 51 gr.",8J:"8w bI bJ bK bL 75 bM 8s 9p <a 33=\'{4K}\' 9q=\'9o\'>{1i} 71</a>."},2Q:{2F:"",6A:12(a,b){},6u:!1,6B:12(a,b){},6v:!1,44:12(a,b,c){},62:12(a,b,c){},6w:!0,6x:!1,6y:1f,6z:1f,1i:"bQ"},1l:{}},b),d=g.3G(c)||"34"==1e c?!0:!1,c=g.3G(c)?c:[];"34"==1e a[0]&&(c[0]=a[0]);1a(fa(g.fn.bR,"1.8",">=")){17 e=3R aa(g(11),b,c,d);19{3Z:12(){e.3l()},3e:12(){e.54()},b2:12(){e.2a("1j")},b1:12(){e.2a("1q")},43:12(a){e.43(a)},4w:12(){e.4w()},6o:12(){0<2T.1g?e.3a(!0):e.3a()},5S:12(a){e.5S(a)},b0:12(){e.3l();e.6p()}}}5C"8w 8o 2x bT bU bV 3L bW bX. 1w 8s 8o 1.8+";};g.1w=12(a,b){19 g.fn.1w(a,b)};g.2O(g.bY,{7O:12(a,b,c,d,e){19-d*(23.70(1-(b/=e)*b)-1)+c},2R:12(a,b,c,d,e){19 d*23.70(1-(b=b/e-1)*b)+c},5q:12(a,b,c,d,e){19 1>(b/=e/2)?-d/2*(23.70(1-b*b)-1)+c:d/2*(23.70(1-(b-=2)*b)+1)+c}});g(1v);g.1Z("6l b5 7w bZ c0 3T c1 c2 c3 c4".2u(" "),12(a,b){g.fn[b]=12(a){19 a?11.4g(b,a):11.77(b)};g.9t&&(g.9t[b]=!0)});g.4x.9v.3S={9w:12(){17 a=11,b=g(11),c,d;b.4g("6l.8l",12(e){c=K();b.83("7w.8l",12(b){d=K();b=g.4x.c8(b||u.4x);b.1i="3S";c&&d&&c.x==d.x&&c.y==d.y&&(g.4x.c9||g.4x.cb).1m(a,b);c=d=H})})},9y:12(){g(11).6s("6l.8l")}};(12(){v={4S:!1,8t:12(){19!1},72:12(){},4P:12(){},7y:"",3F:""};8j=["52","9C","o","9D","cj"];1a("2V"!=1e 1v.4P)v.4S=!0;2k 1s(17 a=0,b=8j.1g;a<b;a++)1a(v.3F=8j[a],"2V"!=1e 1v[v.3F+"9E"]){v.4S=!0;1A}v.4S&&(v.7y=v.3F+"cl",v.8t=12(){4d(11.3F){1r"":19 1v.cm;1r"52":19 1v.cn;8d:19 1v[11.3F+"co"]}},v.72=12(a){19""===11.3F?a.72():a[11.3F+"cp"]()},v.4P=12(a){19""===11.3F?1v.4P():1v[11.3F+"9E"]()})})();(12(){17 a,b;a=6Z.9G;a=a.25();b=/(9H)[ \\/]([\\w.]+)/.4F(a)||/(52)[ \\/]([\\w.]+)/.4F(a)||/(cu)(?:.*2x|)[ \\/]([\\w.]+)/.4F(a)||/(6V) ([\\w.]+)/.4F(a)||0>a.1X("cv")&&/(cw)(?:.*? 9I:([\\w.]+)|)/.4F(a)||[];a=b[1]||"";b=b[2]||"0";x={};a&&(x[a]=!0,x.2x=b);x.9H?x.52=!0:x.52&&(x.cy=!0)})();(12(){12 a(a){1s(17 e=0,f=b.1g;e<f;e++){17 h=b[e]?b[e]+a.46(0).cz()+a.5H(1):a;1a(c.3C[h]!==H)19 h}}17 b=["","52","9C","9D","o"],c=1v.5i("1b");z=a("cA")||"";F=a("cB")?"cC(0) ":""})();17 N={2x:"0.7.9",2h:"cD",9J:12(a,b,c){19 12(){a(b,c)}},5l:"<",4z:12(a){19"2V"!=1e a},3G:12(a){19/cH/i.1G(8h.5t.8g.1m(a))},56:12(a){19"12"==1e a},4m:12(a){19"34"==1e a},5F:12(a){19"32"==1e a},4c:12(a){19"34"==1e a&&/\\d/.1G(a)},9R:/[\\d][\\d\\.\\8u,-]*/,3k:/[\\.\\8u,-]/g,5m:12(a,b){17 c=11.4c(a)?(11.4z(b)?2s(b):11.9R).4F(a):1f;19 c?c[0]:1f},3O:12(a,b,c){17 d=1h;1a(11.4c(a)&&11.4c(b)){1a(11.4z(c)&&c.3O)19 c.3O(a,b);a=a.2u(11.3k);b=b.2u(11.3k);1s(c=0;c<23.2Y(a.1g,b.1g);c++){1a(d(a[c],10)>d(b[c],10))19 1;1a(d(a[c],10)<d(b[c],10))19-1}}19 0},3y:12(a,b){17 c,d;1a(!11.4c(a))19 1f;11.5F(b)||(b=4);b--;d=a.1o(/\\s/g,"").2u(11.3k).5s(["0","0","0","0"]);1s(c=0;4>c;c++)1a(/^(0+)(.+)$/.1G(d[c])&&(d[c]=2s.$2),c>b||!/\\d/.1G(d[c]))d[c]="0";19 d.5H(0,4).53(",")},$$5U:12(a){19 12(b){1a(!a.3Q&&b){17 c,d,e=a.3G(b)?b:a.4m(b)?[b]:[];1s(d=0;d<e.1g;d++)1a(a.4m(e[d])&&/[^\\s]/.1G(e[d])&&(c=(b=6Z.cY[e[d]])?b.82:0)&&(c.2h||c.4o))19 b}19 1f}},81:12(a,b,c){a=2s(a,"i");b=!11.4z(b)||b?/\\d/:0;c=c?2s(c,"i"):0;17 d=6Z.3c,e,f,h;1s(e=0;e<d.1g;e++)1a(h=d[e].4o||"",f=d[e].2h||"",a.1G(h)&&(!b||b.1G(2s.a1+2s.a2))||a.1G(f)&&(!b||b.1G(2s.a1+2s.a2)))1a(!c||!c.1G(h)&&!c.1G(f))19 d[e];19 1f},d4:12(a,b,c){17 d;b=2s(b,"i");c=c?2s(c,"i"):0;17 e,f,h=11.4m(a)?[a]:a;1s(f=0;f<h.1g;f++)1a((d=11.5U(h[f]))&&(d=d.82)&&(e=d.4o||"",a=d.2h||"",b.1G(e)||b.1G(a))&&(!c||!c.1G(e)&&!c.1G(a)))19 d;19 0},7Z:12(a,b){17 c,d,e,f,h=-1;1a(2<11.6U||!a||!a.2x||!(c=11.5m(a.2x)))19 b;1a(!b)19 c;c=11.3y(c);b=11.3y(b);d=b.2u(11.3k);e=c.2u(11.3k);1s(f=0;f<d.1g;f++)1a(-1<h&&f>h&&"0"!=d[f]||e[f]!=d[f]&&(-1==h&&(h=f),"0"!=d[f]))19 b;19 c},a5:u.d8,3J:12(a){17 b=1f;2d{b=3R 11.a5(a)}2c(c){}19 b},a8:12(a){17 b,c,d=/^[\\$][\\$]/;1s(b 2K a)1a(d.1G(b))2d{c=b.5H(2),0<c.1g&&!a[c]&&(a[c]=a[b](a),5X a[b])}2c(e){}},6S:12(a,b,c){17 d;1a(a){1a(1==a[b[0]]||c)1s(d=0;d<b.1g;d+=2)a[b[d]]=b[d+1];1s(d 2K a)(c=a[d])&&1==c[b[0]]&&11.6S(c,b)}},a9:12(){17 a=6Z,b,c=1v,d=a.9G||"",e=a.dg||"",f=a.dh||"",a=a.di||"";11.6S(11,["$",11]);1s(b 2K 11.4Y)11.4Y[b]&&11.6S(11.4Y[b],["$",11,"$$",11.4Y[b]],1);11.a8(11);11.6U=2l;1a(f){17 h=["7T",1,"dl",2,"dm",3,"dn",4,"do",21.1,"dp",21.2,"dq",21.3,"7T.*dr",22.1,"7T.*ds",22.2,"dt\\\\s*du",22.3,"",2l];1s(b=h.1g-2;0<=b;b-=2)1a(h[b]&&2s(h[b],"i").1G(f)){11.6U=h[b+1];1A}}11.3g=c.6O("3g")[0]||c.6O("2L")[0]||c.2L||1f;11.61=(11.3Q=(3R dy("19/*@dz!@*/!1"))())&&/dA\\s*(\\d+\\.?\\d*)/i.1G(d)?7L(2s.$1,10):1f;11.7I=11.7H=1f;1a(11.3Q){b=1v.5i("1b");2d{b.3C.dD="2F(#8d#dE)",11.7H=b.dF("{dG-dH-7G-dJ-dK}","dL").1o(/,/g,".")}2c(g){}b=7L(11.7H||"0",10);11.7I=c.aj||(/dM/i.1G(c.dN||"")?5:b)||11.61;11.61=b||11.7I}11.6M=!1;1a(11.3Q)1s(c="al.dP al.dQ dR.dS 6L.6L ao.ao dV.dW dX.dY dZ.e0".2u(" "),b=0;b<c.1g;b++)1a(11.3J(c[b])){11.6M=!0;1A}11.e1=(11.e2=/ap/i.1G(a)&&/ap\\s*\\/\\s*\\d/i.1G(d))?11.3y(/9I\\s*\\:\\s*([\\.\\,\\d]+)/i.1G(d)?2s.$1:"0.9"):1f;11.e4=(11.aq=/e6\\s*\\/\\s*(\\d[\\d\\.]*)/i.1G(d))?11.3y(2s.$1):1f;11.e7=(11.e8=(/e9/i.1G(e)||!e&&!11.aq)&&/eb\\s*\\/\\s*(\\d[\\d\\.]*)/i.1G(d))&&/ar\\s*\\/\\s*(\\d[\\d\\.]*)/i.1G(d)?11.3y(2s.$1):1f;11.ed=(11.ee=/ef\\s*[\\/]?\\s*(\\d+\\.?\\d*)/i.1G(d))&&(/ar\\s*\\/\\s*(\\d+\\.?\\d*)/i.1G(d)||1)?7L(2s.$1,10):1f;11.as("51",11.9J(11.at,11))},au:12(a){17 b,c={5b:-3,71:0};1a(!11.4m(a))19 c;1a(1==a.1g)19 11.7D=a,c;a=a.25().1o(/\\s/g,"");b=11.4Y[a];1a(!b||!b.3M)19 c;c.71=b;11.4z(b.58)||(b.58=1f,b.2x=1f,b.ax=1f,b.5o=1f,b.en=a);11.7A=!1;1a(11.3Q&&!11.6M&&"ep"!==a)19 c.5b=-2,c;c.5b=1;19 c},aA:12(a,b){11.3G(b)&&(11.56(a)||11.3G(a)&&0<a.1g&&11.56(a[0]))&&b.4J(a)},5K:12(a){17 b;1a(11.3G(a))1s(b=0;b<a.1g&&1f!==a[b];b++)11.1m(a[b]),a[b]=1f},1m:12(a){17 b=11.3G(a)?a.1g:-1;1a(0<b&&11.56(a[0]))a[0](11,1<b?a[1]:0,2<b?a[2]:0,3<b?a[3]:0);2k 11.56(a)&&a(11)},7D:",",$$3M:12(a){19 12(b,c,d){b=a.au(b);1a(0>b.5b)19 1f;b=b.71;1!=b.5o&&(b.3M(1f,c,d),1f===b.5o&&(b.5o=1));a.aB();19 c=(c=b.2x||b.ax)?c.1o(a.3k,a.7D):c}},aB:12(){11.7A&&11.4z(u.aC)&&u.aC()},7x:12(a,b){17 c=!1,d=\'<3p 1c="1" 1d="1" 3C="6F:4T" \'+a.aF(b)+">"+a.aG+11.5l+"/3p>";1a(!11.3g)19 c;11.3g.aH(1v.5i("3p"),11.3g.3K);11.3g.3K.7p=d;2d{11.3g.3K.6P=a.6D}2c(e){}2d{11.3g.3K.3p&&(c=!0)}2c(f){}2d{c&&4>11.3g.3K.aK&&(11.7A=!0)}2c(h){}11.3g.5x(11.3g.3K);19 c},67:12(a,b){17 c=11;1a(!c.6M||!a)19 1f;a.5V&&a.5V.1g&&1f!==a.5V[a.5V.1g-1]&&c.5K(a.5V);17 d,e=a.8Q;1a(c.4c(b)){1a(e.5G&&e.2Y&&0>=c.3O(b,e.2Y))19!0;1a(e.5G&&e.3u&&0<=c.3O(b,e.3u))19!1;(d=c.7x(a,b))&&(!e.2Y||0<c.3O(b,e.2Y))&&(e.2Y=b);d||e.3u&&!(0>c.3O(b,e.3u))||(e.3u=b);19 d}17 f=[0,0,0,0],h=[].5s(e.8M),g=e.2Y?1:0,k,m,n=12(b,d){17 e=[].5s(f);e[b]=d;19 c.7x(a,e.53(","))};1a(e.3u){d=e.3u.2u(c.3k);1s(k=0;k<d.1g;k++)d[k]=1h(d[k],10);d[0]<h[0]&&(h[0]=d[0])}1a(e.2Y){m=e.2Y.2u(c.3k);1s(k=0;k<m.1g;k++)m[k]=1h(m[k],10);m[0]>f[0]&&(f[0]=m[0])}1a(m&&d)1s(k=1;k<m.1g&&m[k-1]==d[k-1];k++)d[k]<h[k]&&(h[k]=d[k]),m[k]>f[k]&&(f[k]=m[k]);1a(e.3u)1s(k=1;k<h.1g;k++)1a(0<d[k]&&0==h[k]&&h[k-1]<e.8M[k-1]){h[k-1]+=1;1A}1s(k=0;k<h.1g;k++){m={};1s(e=0;20>e&&!(1>h[k]-f[k]);e++){d=23.8O((h[k]+f[k])/2);1a(m["a"+d])1A;m["a"+d]=1;n(k,d)?(f[k]=d,g=1):h[k]=d}h[k]=f[k];!g&&n(k,f[k])&&(g=1);1a(!g)1A}19 g?f.53(","):1f},as:12(a,b){17 c=u,d;11.56(b)&&(c.aP?c.aP(a,b,!1):c.aQ?c.aQ("1S"+a,b):(d=c["1S"+a],c["1S"+a]=11.aR(b,d)))},aR:12(a,b){19 12(){a();"12"==1e b&&b()}},aS:[],4C:[],at:12(a){a.3o=!0;a.5K(a.aS);a.5K(a.4C);1a(a.8a)a.8a()},3o:!1,$$eQ:12(a){19 12(b){a.3o?a.1m(b):a.aA(b,a.4C)}},1b:1f,6q:"eS",aX:50,3n:1,aY:12(){17 a,b,c,d;1a(11.1b&&11.1b.4U)1s(a=11.1b.4U.1g-1;0<=a;a--){1a((c=11.1b.4U[a])&&c.4U)1s(b=c.4U.1g-1;0<=b;b--){d=c.4U[b];2d{c.5x(d)}2c(e){}}1a(c)2d{11.1b.5x(c)}2c(f){}}!11.1b&&(a=1v.86(11.6q))&&(11.1b=a);1a(11.1b&&11.1b.7X){2d{11.1b.7X.5x(11.1b)}2c(h){}11.1b=1f}},7R:[],8a:12(){17 a,b;1a(11.3o&&(!11.4C||!11.4C.1g||1f===11.4C[11.4C.1g-1])){1s(a 2K 11)1a((b=11[a])&&b.6n&&(3==b.f1||b.6n.1g&&1f!==b.6n[b.6n.1g-1]))19;1s(a=0;a<11.7R.1g;a++)11.5K(11.7R);11.aY()}},6m:12(a){19 a&&(a=a.f3||a.f4,11.5F(a))?a:-1},f5:12(a,b,c,d){17 e=a.2p,f=11.6m(e);c=c.2p;17 h=11.6m(c);b=b.2p;17 g=11.6m(b);1a(!(e&&c&&b&&11.6j(a)))19-2;1a(h<g||0>f||0>h||0>g||g<=11.3n||1>11.3n)19 0;1a(f>=g)19-1;2d{1a(f==11.3n&&(!11.3Q||4==11.6j(a).aK)&&(!a.3o&&11.3o||a.3o&&11.5F(d)&&(11.5F(a.7s)||(a.7s=d),10<=d-a.7s)))19 1}2c(k){}19 0},6j:12(a,b){17 c=a?a.2p:0,d=c&&c.3K?1:0;2d{d&&b&&11.1b.f8()}2c(e){}19 d?c.3K:1f},6i:12(a,b){17 c=a.3C,d;1a(c&&b)1s(d=0;d<b.1g;d+=2)2d{c[b[d]]=b[d+1]}2c(e){}},b7:12(a,b){17 c=1f,d=b?u.1E.1v:u.1v,e=d.6O("2L")[0]||d.2L;1a(!e)2d{d.b8(\'<1b 6a="b9">.\'+11.5l+"/1b>"),c=d.86("b9")}2c(f){}1a(e=d.6O("2L")[0]||d.2L)e.aH(a,e.3K),c&&e.5x(c)},bb:12(a,b,c,d,e){e=1v;17 f,h=e.5i("2p"),g,k="fe 4T ff 4T 4Q 5e bc 5e bd 3d".2u(" ");11.4z(d)||(d="");1a(11.4m(a)&&/[^\\s]/.1G(a)){a=a.25().1o(/\\s/g,"");f=11.5l+a+\' 1c="\'+11.3n+\'" 1d="\'+11.3n+\'" \';f+=\'3C="fj-3C:4T;47-3C:4T;4Q:5e;bc:5e;bd:3d;6F:6t;" \';1s(g=0;g<b.1g;g+=2)/[^\\s]/.1G(b[g+1])&&(f+=b[g]+\'="\'+b[g+1]+\'" \');f+=">";1s(g=0;g<c.1g;g+=2)/[^\\s]/.1G(c[g+1])&&(f+=11.5l+\'4i 2h="\'+c[g]+\'" 2J="\'+c[g+1]+\'" />\');f+=d+11.5l+"/"+a+">"}2k f=d;11.1b||((b=e.86(11.6q))?11.1b=b:(11.1b=e.5i("1b"),11.1b.6a=11.6q),11.6i(11.1b,k.5s(["1c",11.aX+"4R","1d",11.3n+3+"4R","bg",11.3n+3+"4R","bh",11.3n+3+"4R","bi","bj","6F","fq"])),b||(11.6i(11.1b,"8n fr 5v 5e 1E 5e".2u(" ")),11.b7(11.1b)));1a(11.1b&&11.1b.7X){11.6i(h,k.5s(["bg",11.3n+3+"4R","bh",11.3n+3+"4R","bi","bj","6F","6t"]));2d{h.fs=f}2c(m){}2d{11.1b.ft(h)}2c(n){}19{2p:h,3o:11.3o,bk:a,7p:f}}19{2p:1f,3o:11.3o,bk:"",7p:f}},4Y:{2X:{4L:["1K/2X","5T/x-fv","2y/x-fw","2y/x-2X"],3D:"fy.fz.1",fA:"5W.5W",6D:"6N:ah-ak-aw-ay-aD",8G:7,aG:\'<4i 2h="2m" 2J="" /><4i 2h="fC" 2J="2Z" />\',aF:12(a){19\'6I="#2x=\'+a+\'"\'},8Q:{2Y:0,3u:0,5G:0,8M:[16,bn,bn,0]},3M:12(a){17 b=11.$,c=1f,d=1f;1a(b.3Q){b.4c(a)&&(a=a.2u(b.3k),3<a.1g&&0<1h(a[3],10)&&(a[3]="fF"),a=a.53(","));1a(b.4c(a)&&b.61>=11.8G&&0<11.8A()){11.58=11.bp(a);11.5o=0;19}11.5o=1;!c&&b.61>=11.8G&&(c=11.bq(b.67(11)));c||(d=b.3J(11.3D))&&d.br&&(c=d.br.8g(16),c=1h(c.46(0),16)+"."+1h(c.46(1),16)+"."+1h(c.46(2),16))}2k b.5U(11.4L)&&(d=3!=b.6U?b.81("5W.*fJ-?2K",0):1f)&&d.2h&&(c=b.5m(d.2h));11.58=c?1:d?0:-1;11.2x=b.3y(c,3)},8y:["7,60,0,0","0,0,0,0"],84:["7,50,0,0",1f],7k:[12(a,b){17 c=b.2u(a.$.3k);19[c[0],c[1].46(0),c[1].46(1),c[2]].53()},1f],bq:12(a){17 b=11.$,c,d=11.8y,e=11.84;1a(a)1s(a=b.3y(a),c=0;c<d.1g;c++)1a(d[c]&&0>b.3O(a,d[c])&&e[c]&&0<=b.3O(a,e[c])&&11.7k[c])19 11.7k[c](11,a);19 a},8A:12(){17 a=11.$,b,c=11.8A,d=11.8y,e=11.84;1a(!c.2J)1s(c.2J=-1,b=0;b<d.1g;b++){1a(d[b]&&a.67(11,d[b])){c.2J=1;1A}1a(e[b]&&a.67(11,e[b])){c.2J=-1;1A}}11.8Q.5G=1==c.2J?1:0;19 c.2J},bp:12(a){19 11.$.67(11,a)?0.7:-1}},2D:{4L:"5T/x-7b-2D",3D:"6L.6L",6D:"6N:fN-fO-7G-fP-bv",3M:12(){17 a=12(a){19 a?(a=/[\\d][\\d\\,\\.\\s]*[bw]{0,1}[\\d\\,]*/.4F(a))?a[0].1o(/[bw\\.]/g,",").1o(/\\s/g,""):1f:1f},b=11.$,c,d=1f,e=1f,f=1f;1a(b.3Q){1s(c=15;2<c;c--)1a(e=b.3J(11.3D+"."+c)){f=c.8g();1A}e||(e=b.3J(11.3D));1a("6"==f)2d{e.fS="98"}2c(g){19"6,0,21,0"}2d{d=a(e.bx("$2x"))}2c(l){}!d&&f&&(d=f)}2k{1a(e=b.5U(11.4L)){c=b.6j(b.bb("3p",["1i",11.4L],[],"",11));2d{d=b.5m(c.bx("$2x"))}2c(k){}}d||((c=e?e.82:1f)&&c.4o&&(d=a(c.4o)),d&&(d=b.7Z(c,d)))}11.58=d?1:-1;11.2x=b.3y(d);19!0}},7b:{4L:"5T/x-fU",3D:"by.by",6D:"6N:fW-fX-7G-fY-bv",3M:12(){17 a=1f,b=1f,c=11.$;1a(c.3Q){2d{b=c.3J(11.3D).fZ("")}2c(d){}c.4m(b)&&0<b.1g?a=c.5m(b):c.3J(11.3D+".8")?a="8":c.3J(11.3D+".7")?a="7":c.3J(11.3D+".1")&&(a="6")}2k(b=c.81("ai\\\\s*1s\\\\s*g0"))&&b.4o&&c.5U(11.4L)&&(a=c.5m(b.4o)),a&&(a=c.7Z(b,a));11.58=a?1:-1;11.2x=c.3y(a)}},g1:0}};N.a9();17 j=\'8w "%%" 12 8s an g2 32 g3 2T.\\g4 g5 be 2K 9p g6 "g7", "g8", ...\',p=1f,B="bC",O=1v,U,ba=g.4x.9v,ca=O.aj,V="1S"+B 2K u&&(ca===H||7<ca);g.fn[B]=12(a){19 a?11.4g(B,a):11.77(B)};g.fn[B].bD=50;ba[B]=g.2O(ba[B],{9w:12(){1a(V)19!1;g(U.2W)},9y:12(){1a(V)19!1;g(U.1W)}});U=12(){12 a(){17 b=I(),e=h(d);b!==d?(f(d=b,e),g(u).77(B)):e!==d&&(31.33=31.33.1o(/#.*/,"")+e);c=2P(a,g.fn[B].bD)}17 b={},c,d=I(),e=12(a){19 a},f=e,h=e;b.2W=12(){c||a()};b.1W=12(){c&&4M(c);c=H};x.6V&&!V&&12(){17 c,d;b.2W=12(){c||(d=(d=g.fn[B].2m)&&d+I(),c=g(\'<4j 6G="-1" 1J="4f"/>\').1T().83("51",12(){d||f(I());a()}).2g("2m",d||"9s:0").gi("2L")[0].gj,O.gk=12(){2d{"1J"===4x.gl&&(c.1v.1J=O.1J)}2c(a){}})};b.1W=e;h=12(){19 I(c.31.33)};f=12(a,b){17 d=c.1v,e=g.fn[B].bE;a!==b&&(d.1J=O.1J,d.9r(),e&&d.b8(\'<bF>1v.bE="\'+e+\'"\\gp/bF>\'),d.3Z(),c.31.4b=a)}}();19 b}();6H.5t.7K||(6H.5t.7K=12(a,b){1a(1f==11)5C 3R 8P;17 c=8h(11),d=c.1g>>>0;1a("12"!=1e a)5C 3R 8P;1s(17 e=[],f=0;f<d;f++)1a(f 2K c){17 g=c[f];a.1m(b,g,f,c)&&e.4J(g)}19 e});6H.5t.5u||(6H.5t.5u=12(a){1a(1f==11)5C 3R 8P;17 b=8h(11),c=b.1g>>>0;1a(0===c)19-1;17 d=c;1<2T.1g&&(d=eF(2T[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(0<d||-1)*23.89(23.4Z(d))));1s(c=0<=d?23.2Y(d,c-1):c-23.4Z(d);0<=c;c--)1a(c 2K b&&b[c]===a)19 c;19-1})})(8o,11);',
62,1021,"                                                               this function  options   var ilightbox return if div width height typeof null length parseInt type next vars callback call items replace current prev case for URL class document iLightBox show css data break thumbnails left addClass top horizontal test append ui title video onRender total styles holder toolbar caption social on hide onAfterLoad overlay stop indexOf thumbnail each    Math container toLowerCase html5video    moveTo onBeforeLoad catch try controls add attr name coords outerHeight else 100 src naturalWidth loader span linkId naturalHeight RegExp speed split onShow animate version image isInFullScreen  prevButton effects flash removeClass url html prevPhoto nextPhoto value in body nextButton infinite extend setTimeout ajaxSetup easeOutCirc text arguments opacity undefined start quicktime min false  location number href string ext BODY    repositionPhoto isSwipe plugins visible fullscreen outerWidth head com fadeIn http splitNumRegx closeAction offset pluginSize winLoaded object hashLock path webm fullAlone max startFrom cycleID isMobile formatNum skin slideshow pathname style progID documentElement prefix isArray disabled configureHolder getAXO firstChild is getVersion keyboard compareNums mousewheel isIE new itap swipe prevLock nextLock loadRequests lockWheel pause close  factor mp4 goTo error  charAt border innerNextButton button innerPrevButton hash isStrNum switch loadImage empty bind fadeOut param iframe innerToolbar canPlayType isString effect description minScale maxScale scrollLeft mouseID authority isPaused offsetX refresh event Share isDefined scrollTop hideLoader WLfuncs mouseenter play exec source generateThumbnails fullViewPort push pluginspage mimeType clearTimeout remove inner cancelFullScreen padding px supportsFullScreen none childNodes active lockKey ogg Plugins abs  load webkit join fullScreenAction  isFunc addContent installed www obj status createUI autoplay 0px protocol no mouseleave createElement time offsetY openTag getNum ondragstart getVersionDone lockSwipe easeInOutCirc loadContent concat prototype lastIndexOf right errors removeChild off selector nextScale prevScale throw clone newDims isNum match slice loadedFadeSpeed repositionSpeed callArray getNewDimenstions pageOffsetY item resume pageOffsetX positionThumbnails emb setOption application hasMimeType BIfuncs QuickTime delete fadeSpeed dontGenerateThumbs  verIE success click nextOffsetX prevOffsetX smartRecognition codebaseSearch alert showLoader id prevOpacity itemsObject thumbs grid preload fullScreenButton scrollTo setStyle getDOMobj generateBoxes touchstart getWidth funcs reposition dispatchItemsEvents divID 200 unbind inline cache crossDomain global ifModified username password beforeSend complete wrapper classID icon display tabindex Array codebase apple ajax ShockwaveFlash ActiveXEnabled clsid getElementsByTagName classid originalEvent touches initObj substring OS msie onBeforeChange onAfterChange PATHINFO_EXTENSION navigator sqrt plugin requestFullScreen naturalWidthOld naturalHeightOld to fullStretchTypes trigger nextOpacity true repositionEl shockwave php_js arrows search setSocial embed encodeURIComponent activeOpacity normalOpacity cdbase2ver align context maxWidth maxHeight outerHTML noscroll mousemove count dims normalizeItems download touchend isActiveXObject fullScreenEventName verticalDistanceThreshold garbage hideableElements dataType getVersionDelimiter mobileMaxWidth hashChangeHandler 11CF verIEfull docModeIE doFullscreen filter parseFloat ogpRecognition m4v easeInCirc hasClass preventDefault DONEfuncs ogv Win videoType img nodeName parentNode previous getPluginFileVersion  findNavPlugin enabledPlugin one cdbaseLower  getElementById resetCycle buttons floor onDoneEmptyDiv diff substr default PATHINFO_ALL removeAttr toString Object loadSwitcher browserPrefixes reddit iTap php position jQuery isNaN yes innerPlayButton requires isFullScreen _ patchItemsEvents The enterFullscreen cdbaseUpper Enter canUseIsMin addContents offsetW offsetH patchEvents mobileOptimizer minIEver attachItems flashvars missingPlugin pauseTime html5Vorbis digits keepAspectRatio round TypeError SEARCH setCaption html5WebM html5H264 up Flash ENV html5QuickTime h264 poster  loop scale tofit bottom prevOffsetY nextOffsetY thumbsOffsetH always allowFullScreen thumbsOffsetW response onHide onEnterFullScreen 300 exitFullscreen onExitFullScreen Fullscreen Shift An occurred when trying pl _blank the target open javascript attrFn li special setup ul teardown isPlainObject submit digg moz ms CancelFullScreen delicious userAgent chrome rv handler PATHINFO_FILENAME twitter share facebook PATHINFO_BASENAME PATHINFO_DIRNAME normalizeSocial getNumRegx pageYOffset thumbsOffset random 3E3 switchSpeed vertical 1E3 closedhand 500 leftContext rightContext pageY pageX AXO getTime Date convertFuncs initScript  background ha pauseOnHover not blur down 02BF25D5 Shockwave documentMode 8C17 Msxml2 esc  TDCCtl Gecko isChrome Version addWinEvent runWLfuncs init shift_enter 4B23 version0 BC80 setTime fPush cleanup CollectGarbage D3488ABDDC6B hspace getCodeBaseVersion HTML insertBefore vspace accesskey readyState noexternaldata fadeTo loadContents overflow addEventListener attachEvent winHandler WLfuncs0 element jsonp onOpen mov divWidth emptyDiv startPaused destroy movePrev moveNext ja ka touchmove instant insertDivInBody write pd33993399  insertHTML margin visibility  linkid fontSize lineHeight verticalAlign baseline tagName closeButton  128 720 isMin CDBASE2VER QuickTimeVersion 1280 slideShow availPlugins 444553540000 rRdD GetVariable SWCtl randomStart instantCall 192px iLightBoxHashChange delay domain script 30px ne content your are attempting view le php3 prepend GET jquery jsp that was loaded too old easing tap taphold swipeleft swiperight scrollstart scrollstop Facebook home gt fix dispatch  handle Twitter googleplus https plus google Google cab khtml post fullscreenchange fullScreen webkitIsFullScreen FullScreen RequestFullScreen Delicious float qtplugin filename opera compatible mozilla phase safari toUpperCase transform perspective translateZ PluginDetect Digg extension basename array dirname qtactivex 640 360 mousedown nextElement onclick Image window onload menubar onerror resizable onabort scrollbars htm mimeTypes cfm inArray cgi aspx resize getMimeEnabledPlugin 400 asp 2E3 ActiveXObject gradient  keydown prevElement keyCode rc fill vendor platform product fit stretch Mac Linux FreeBSD iPhone iPod iPad CE Mobile Pocket PC shiftKey RC iLCallback Function cc_on MSIE jpe jfif behavior clientcaps getComponentVersion 89820200 ECBD tif 8B85 00AA005B4383 componentid back compatMode tiff XMLHTTP DOMDocument Microsoft XMLDOM beta png Shell UIHelper Scripting Dictionary wmplayer ocx verGecko isGecko jpg verChrome alpha Chrome verSafari isSafari Apple  Safari dev verOpera isOpera Opera currentItem nextItem children jpeg ratio ontouchstart pop pluginName index java  dragger prevItem 3gp port QT_GenerateOBJECTText hostname mouseout mouseover ig movie qt gif WEBM hidden Number SCALE AUTOPLAY LOOP metadata appendTo host 980 quality high bgcolor onWindowLoaded 000000 plugindetect bmp getSource menu net wmode transparent showall allowScriptAccess OTF swf scrollWidth offsetWidth getTagStatus mpeg adobe focus getflash  Adobe player frameborder outlineStyle borderStyle mpg mozallowfullscreen results outline images eval String  mouseup avi block absolute innerHTML appendChild dark quicktimeplayer macpaint Height QuickTimeCheckObject QuickTimeCheck progID0 txt controller Width shtml 9999 120 180 5E3 Plug Press Esc rhtml D27CDB6E AE6D 96B8 rb pageXOffset AllowScriptAccess phtml director Exit 166B1BCA 3F9C 8075 ShockwaveVersion Director zz even of nArguments should form atttributeName attributeValue client  innerWidth Slideshow Next  Previous currentElement php5 insertAfter contentWindow onpropertychange propertyName php4 lt  x3c photo contents webkitAllowFullScreen".split(" "),
0,{}));

/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = cssStyles;

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm

//function ssc_init(){if(!document.body)return;var e=document.body;var t=document.documentElement;var n=window.innerHeight;var r=e.scrollHeight;ssc_root=document.compatMode.indexOf("CSS")>=0?t:e;ssc_activeElement=e;ssc_initdone=true;if(top!=self){ssc_frame=true}else if(r>n&&(e.offsetHeight<=n||t.offsetHeight<=n)){ssc_root.style.height="auto";if(ssc_root.offsetHeight<=n){var i=document.createElement("div");i.style.clear="both";e.appendChild(i)}}if(!ssc_fixedback){e.style.backgroundAttachment="scroll";t.style.backgroundAttachment="scroll"}if(ssc_keyboardsupport){ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,t,n,r){r||(r=1e3);ssc_directionCheck(t,n);ssc_que.push({x:t,y:n,lastX:t<0?.99:-.99,lastY:n<0?.99:-.99,start:+(new Date)});if(ssc_pending){return}var i=function(){var s=+(new Date);var o=0;var u=0;for(var a=0;a<ssc_que.length;a++){var f=ssc_que[a];var l=s-f.start;var c=l>=ssc_animtime;var h=c?1:l/ssc_animtime;if(ssc_pulseAlgorithm){h=ssc_pulse(h)}var p=f.x*h-f.lastX>>0;var d=f.y*h-f.lastY>>0;o+=p;u+=d;f.lastX+=p;f.lastY+=d;if(c){ssc_que.splice(a,1);a--}}if(t){var v=e.scrollLeft;e.scrollLeft+=o;if(o&&e.scrollLeft===v){t=0}}if(n){var m=e.scrollTop;e.scrollTop+=u;if(u&&e.scrollTop===m){n=0}}if(!t&&!n){ssc_que=[]}if(ssc_que.length){setTimeout(i,r/ssc_framerate+1)}else{ssc_pending=false}};setTimeout(i,0);ssc_pending=true}function ssc_wheel(e){if(!ssc_initdone){init()}var t=e.target;var n=ssc_overflowingAncestor(t);if(!n||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(t,"embed")&&/\.pdf/i.test(t.src)){return true}var r=e.wheelDeltaX||0;var i=e.wheelDeltaY||0;if(!r&&!i){i=e.wheelDelta||0}if(Math.abs(r)>1.2){r*=ssc_stepsize/120}if(Math.abs(i)>1.2){i*=ssc_stepsize/120}ssc_scrollArray(n,-r,-i);e.preventDefault()}function ssc_keydown(e){var t=e.target;var n=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n){return true}if(ssc_isNodeName(t,"button")&&e.keyCode===ssc_key.spacebar){return true}var r,i=0,s=0;var o=ssc_overflowingAncestor(ssc_activeElement);var u=o.clientHeight;if(o==document.body){u=window.innerHeight}switch(e.keyCode){case ssc_key.up:s=-ssc_arrowscroll;break;case ssc_key.down:s=ssc_arrowscroll;break;case ssc_key.spacebar:r=e.shiftKey?1:-1;s=-r*u*.9;break;case ssc_key.pageup:s=-u*.9;break;case ssc_key.pagedown:s=u*.9;break;case ssc_key.home:s=-o.scrollTop;break;case ssc_key.end:var a=o.scrollHeight-o.scrollTop-u;s=a>0?a+10:0;break;case ssc_key.left:i=-ssc_arrowscroll;break;case ssc_key.right:i=ssc_arrowscroll;break;default:return true}ssc_scrollArray(o,i,s);e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,t){for(var n=e.length;n--;)ssc_cache[ssc_uniqueID(e[n])]=t;return t}function ssc_overflowingAncestor(e){var t=[];var n=ssc_root.scrollHeight;do{var r=ssc_cache[ssc_uniqueID(e)];if(r){return ssc_setCache(t,r)}t.push(e);if(n===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<n){return ssc_setCache(t,document.body)}}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow");if(overflow==="scroll"||overflow==="auto"){return ssc_setCache(t,e)}}}while(e=e.parentNode)}function ssc_addEvent(e,t,n){window.addEventListener(e,t,n||false)}function ssc_removeEvent(e,t,n){window.removeEventListener(e,t,n||false)}function ssc_isNodeName(e,t){return e.nodeName.toLowerCase()===t.toLowerCase()}function ssc_directionCheck(e,t){e=e>0?1:-1;t=t>0?1:-1;if(ssc_direction.x!==e||ssc_direction.y!==t){ssc_direction.x=e;ssc_direction.y=t;ssc_que=[]}}function ssc_pulse_(e){var t,n,r;e=e*ssc_pulseScale;if(e<1){t=e-(1-Math.exp(-e))}else{n=Math.exp(-1);e-=1;r=1-Math.exp(-e);t=n+r*(1-n)}return t*ssc_pulseNormalize}function ssc_pulse(e){if(e>=1)return 1;if(e<=0)return 0;if(ssc_pulseNormalize==1){ssc_pulseNormalize/=ssc_pulse_(1)}return ssc_pulse_(e)}var ssc_framerate=150;var ssc_animtime=500;var ssc_stepsize=150;var ssc_pulseAlgorithm=true;var ssc_pulseScale=6;var ssc_pulseNormalize=1;var ssc_keyboardsupport=true;var ssc_arrowscroll=50;var ssc_frame=false;var ssc_direction={x:0,y:0};var ssc_initdone=false;var ssc_fixedback=true;var ssc_root=document.documentElement;var ssc_activeElement;var ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var ssc_que=[];var ssc_pending=false;var ssc_cache={};setInterval(function(){ssc_cache={}},10*1e3);var ssc_uniqueID=function(){var e=0;return function(t){return t.ssc_uniqueID||(t.ssc_uniqueID=e++)}}();$.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if($.browser.chrome){ssc_addEvent("mousedown",ssc_mousedown);ssc_addEvent("mousewheel",ssc_wheel);ssc_addEvent("load",ssc_init)}
function ssc_init() {
    if (!document.body) return;
    var e = document.body;
    var t = document.documentElement;
    var n = window.innerHeight;
    var r = e.scrollHeight;
    ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
    ssc_activeElement = e;
    ssc_initdone = true;
    if (top != self) {
        ssc_frame = true
    }
    else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
        ssc_root.style.height = "auto";
        if (ssc_root.offsetHeight <= n) {
            var i = document.createElement("div");
            i.style.clear = "both";
            e.appendChild(i)
        }
    }
    if (!ssc_fixedback) {
        e.style.backgroundAttachment = "scroll";
        t.style.backgroundAttachment = "scroll"
    }
    if (ssc_keyboardsupport) {
        ssc_addEvent("keydown", ssc_keydown)
    }
}

function ssc_scrollArray(e, t, n, r) {
    r || (r = 1e3);
    ssc_directionCheck(t, n);
    ssc_que.push({
        x: t,
        y: n,
        lastX: t < 0 ? .99 : -.99,
        lastY: n < 0 ? .99 : -.99,
        start: +(new Date)
    });
    if (ssc_pending) {
        return
    }
    var i = function () {
        var s = +(new Date);
        var o = 0;
        var u = 0;
        for (var a = 0; a < ssc_que.length; a++) {
            var f = ssc_que[a];
            var l = s - f.start;
            var c = l >= ssc_animtime;
            var h = c ? 1 : l / ssc_animtime;
            if (ssc_pulseAlgorithm) {
                h = ssc_pulse(h)
            }
            var p = f.x * h - f.lastX >> 0;
            var d = f.y * h - f.lastY >> 0;
            o += p;
            u += d;
            f.lastX += p;
            f.lastY += d;
            if (c) {
                ssc_que.splice(a, 1);
                a--
            }
        }
        if (t) {
            var v = e.scrollLeft;
            e.scrollLeft += o;
            if (o && e.scrollLeft === v) {
                t = 0
            }
        }
        if (n) {
            var m = e.scrollTop;
            e.scrollTop += u;
            if (u && e.scrollTop === m) {
                n = 0
            }
        }
        if (!t && !n) {
            ssc_que = []
        }
        if (ssc_que.length) {
            setTimeout(i, r / ssc_framerate + 1)
        }
        else {
            ssc_pending = false
        }
    };
    setTimeout(i, 0);
    ssc_pending = true
}

function ssc_wheel(e) {
    if (!ssc_initdone) {
        init()
    }
    var t = e.target;
    var n = ssc_overflowingAncestor(t);
    if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
        return true
    }
    var r = e.wheelDeltaX || 0;
    var i = e.wheelDeltaY || 0;
    if (!r && !i) {
        i = e.wheelDelta || 0
    }
    if (Math.abs(r) > 1.2) {
        r *= ssc_stepsize / 120
    }
    if (Math.abs(i) > 1.2) {
        i *= ssc_stepsize / 120
    }
    ssc_scrollArray(n, -r, -i);
    e.preventDefault()
}

function ssc_keydown(e) {
    var t = e.target;
    var n = e.ctrlKey || e.altKey || e.metaKey;
    if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
        return true
    }
    if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
        return true
    }
    var r, i = 0,
        s = 0;
    var o = ssc_overflowingAncestor(ssc_activeElement);
    var u = o.clientHeight;
    if (o == document.body) {
        u = window.innerHeight
    }
    switch (e.keyCode) {
    case ssc_key.up:
        s = -ssc_arrowscroll;
        break;
    case ssc_key.down:
        s = ssc_arrowscroll;
        break;
    case ssc_key.spacebar:
        r = e.shiftKey ? 1 : -1;
        s = -r * u * .9;
        break;
    case ssc_key.pageup:
        s = -u * .9;
        break;
    case ssc_key.pagedown:
        s = u * .9;
        break;
    case ssc_key.home:
        s = -o.scrollTop;
        break;
    case ssc_key.end:
        var a = o.scrollHeight - o.scrollTop - u;
        s = a > 0 ? a + 10 : 0;
        break;
    case ssc_key.left:
        i = -ssc_arrowscroll;
        break;
    case ssc_key.right:
        i = ssc_arrowscroll;
        break;
    default:
        return true
    }
    ssc_scrollArray(o, i, s);
    e.preventDefault()
}

function ssc_mousedown(e) {
    ssc_activeElement = e.target
}

function ssc_setCache(e, t) {
    for (var n = e.length; n--;) ssc_cache[ssc_uniqueID(e[n])] = t;
    return t
}

function ssc_overflowingAncestor(e) {
    var t = [];
    var n = ssc_root.scrollHeight;
    do {
        var r = ssc_cache[ssc_uniqueID(e)];
        if (r) {
            return ssc_setCache(t, r)
        }
        t.push(e);
        if (n === e.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
                return ssc_setCache(t, document.body)
            }
        }
        else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow");
            if (overflow === "scroll" || overflow === "auto") {
                return ssc_setCache(t, e)
            }
        }
    } while (e = e.parentNode)
}

function ssc_addEvent(e, t, n) {
    window.addEventListener(e, t, n || false)
}

function ssc_removeEvent(e, t, n) {
    window.removeEventListener(e, t, n || false)
}

function ssc_isNodeName(e, t) {
    return e.nodeName.toLowerCase() === t.toLowerCase()
}

function ssc_directionCheck(e, t) {
    e = e > 0 ? 1 : -1;
    t = t > 0 ? 1 : -1;
    if (ssc_direction.x !== e || ssc_direction.y !== t) {
        ssc_direction.x = e;
        ssc_direction.y = t;
        ssc_que = []
    }
}

function ssc_pulse_(e) {
    var t, n, r;
    e = e * ssc_pulseScale;
    if (e < 1) {
        t = e - (1 - Math.exp(-e))
    }
    else {
        n = Math.exp(-1);
        e -= 1;
        r = 1 - Math.exp(-e);
        t = n + r * (1 - n)
    }
    return t * ssc_pulseNormalize
}

function ssc_pulse(e) {
    if (e >= 1) return 1;
    if (e <= 0) return 0;
    if (ssc_pulseNormalize == 1) {
        ssc_pulseNormalize /= ssc_pulse_(1)
    }
    return ssc_pulse_(e)
}
var ssc_framerate = 150;
var ssc_animtime = 500;
var ssc_stepsize = 150;
var ssc_pulseAlgorithm = true;
var ssc_pulseScale = 6;
var ssc_pulseNormalize = 1;
var ssc_keyboardsupport = true;
var ssc_arrowscroll = 50;
var ssc_frame = false;
var ssc_direction = {
    x: 0,
    y: 0
};
var ssc_initdone = false;
var ssc_fixedback = true;
var ssc_root = document.documentElement;
var ssc_activeElement;
var ssc_key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
};
var ssc_que = [];
var ssc_pending = false;
var ssc_cache = {};
setInterval(function () {
    ssc_cache = {}
}, 10 * 1e3);
var ssc_uniqueID = function () {
    var e = 0;
    return function (t) {
        return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
    }
}();
ssc_addEvent("mousedown", ssc_mousedown);
ssc_addEvent("mousewheel", ssc_wheel);
ssc_addEvent("load", ssc_init);