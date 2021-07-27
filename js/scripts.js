document.addEventListener('DOMContentLoaded', function(){
	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 500);
	});

	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$('.menu-opener').toggleClass('active');

		if($(window).width() < 1200){
			$('.page-sidebar').toggleClass('opened');
			$('.page').toggleClass('shifted');
			$('.header').toggleClass('shifted');
		} else{
			$('.page').toggleClass('sidebar-minified');
			$('body').toggleClass('sidebar-minified');
			$('.page-sidebar').toggleClass('minified');
			$('.header').removeClass('shifted');
		}
	});

	$('.go-to-details-link').parent().addClass('with-go-to-link');

	$('.table').each(function(){
		if( $(this).find('th').length >= 8 ){
			$(this).addClass('tpg-small');
		}
	});

	// Accordions
	$('.accordion, .js-accordion').each(function(i, el){
		$(el).find('> .ac-header, > .ac-header > .ac-opener').click(function(e){
			e.preventDefault();
			e.stopPropagation();

			$(this).closest('.accordion, .js-accordion').find('> .ac-content').stop().slideToggle(300);
			$(this).closest('.accordion, .js-accordion').find('.slick-slider').slick('setPosition');
			$(this).closest('.accordion, .js-accordion').toggleClass('opened');
		});

		if ($(el).hasClass('opened-on-load')) {
			$(el).find('.ac-header').trigger('click');
		}
	});

	// User actions
	$('.user-actions-block .block-content').click(function(e){
		e.preventDefault();

		$(this).closest('.user-actions-block').toggleClass('opened');
	});

	$('.user-actions-block .block-content .block-opener').click(function(e){
		e.preventDefault();
		// e.stopPropagation();
	});

	// 
	$('body').append('<div class="window-size"></div>');

	$('.window-size').text($(window).width()+'x'+$(window).height());

	$(window).resize(function(){
		$('.window-size').text($(window).width()+'x'+$(window).height());
	});

	// Charts
	if ($('canvas').is('#amount-chart')){
		let el = document.getElementById('amount-chart');
		var ctx = el.getContext('2d');

		let gradient_1 = ctx.createLinearGradient(0, 0, 0, 400);
		gradient_1.addColorStop(0, 'rgba(255,105,0,1)');
		gradient_1.addColorStop(1, 'rgba(255,105,0,1)');

		let gradient_2 = ctx.createLinearGradient(0, 0, 0, 400);
		gradient_2.addColorStop(0, 'rgba(255,105,0,1)');
		gradient_2.addColorStop(1, 'rgba(255,105,0,1)');

		el.style.height = '250px';

		var myChart = new Chart(ctx, {
			type: 'bar',
			aspectRatio: 4.047,
			data: {
				labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
				datasets: [{
					data: [11, 10, 9, 11, 8, 11, 11, 10, 9, 11, 8, 11],
					backgroundColor: gradient_1,
					borderWidth: 1
				},{
					data: [9, 9, 10, 10, 7, 10, 9, 9, 0.1, 0.1, 0.1, 0.1],
					backgroundColor: gradient_2,
					borderWidth: 1
				}]
			},

			options: {
				maintainAspectRatio: false,
				scales: {
					yAxes: [{
						display: false,
						scaleShowVerticalLines: false
					}]
				},
				gridLines:{
					display: false
				},
				legend: {
					display: false
				}
			}
		});
	}

	if ($('canvas').is('#prices-chart')){
		let el = document.getElementById('prices-chart');
		var ctx = el.getContext('2d');

		let gradient_1 = ctx.createLinearGradient(0, 0, 0, 400);
		gradient_1.addColorStop(0, 'rgba(231,122,57,1)');
		gradient_1.addColorStop(1, 'rgba(255,171,107,1)');

		el.style.height = '250px';

		var myChart = new Chart(ctx, {
			type: 'bar',
			width: $('#prices-chart').closest('.chart-area').width(),	
			data: {
				labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
				datasets: [{
					type: "line",
					data: [9, 9, 10, 10, 7, 10, 9, 9],
					borderColor: '#454445',
					backgroundColor: '#fff',
					borderWidth: 2,
					fill: false,
					pointRadius: 6,
					pointHoverRadius: 6,
					lineTension: 0
				},{
					data: [11, 10, 9, 11, 8, 11, 11, 10, 9, 11, 8, 11],
					backgroundColor: gradient_1,
					borderWidth: 1
				}]
			},

			options: {
				maintainAspectRatio: false,
				scales: {
					yAxes: [{
						display: false,
						ticks: {
							beginAtZero: true
						}
					}],
				},
				legend: {
					display: false
				}
			}
		});
	}

	// Pie
	if ($('canvas').is('#pie-chart')){
		var ctx = document.getElementById('pie-chart').getContext('2d');

		var promisedDeliveryChart = new Chart(document.getElementById("pie-chart"),{
			"type": "doughnut",
			"data": {
				"labels": [
					"Вартість по ціні РДН",
					"Маржа постачальника",
					"Надбавка за небаланси",
					"Тариф за передачу",
					"Коригування",
					"Сума ПДВ",
				],
				"datasets": [
					{
						"label": "Sample Dataset",
						"data": [
							72,
							50,
							100,
							70,
							120,
							80
						],
						"backgroundColor": [
							"#E77A39",
							"#395FE7",
							"#E73939",
							"#39E7E7",
							"#E739A1",
							"#E7C139"
						]
					}
				]
			},
			options: {
				legend: {
					display: true,
					position: 'bottom',
					align: 'start'
				}
			},
			plugins: {
				// pieceLabel: {
				// 	render: 'label',
				// 	fontColor: '#fff',
				// 	position: 'outside',
				// 	arc: true,
				// }
				// outlabels: {
				// 	text: '%p',
				// 	color: 'black',
				// 	stretch: 1,
				// 	font: {
				// 		resizable: true,
				// 		minSize: 24,
				// 		maxSize: 24
				// 	}
				// }
				labels: {
					render: 'label',
					fontColor: '#454445',
					position: 'outside'
				}
			}
		});

		Chart.pluginService.register({
			beforeDraw: function(chart) {
				var width = chart.chart.width,
					height = width,
					ctx = chart.chart.ctx;

				ctx.restore();
				var fontSize = 14;
				ctx.font = fontSize + "px sans-serif";
				ctx.textBaseline = "middle";

				var text = "Елементи",
					textX = Math.round((width - ctx.measureText(text).width) / 2),
					textY = Math.round((width - ctx.measureText(text).width) / 2 - 30);

				var text2 = "ціни",
					text2X = Math.round((width - ctx.measureText(text2).width) / 2),
					text2Y = Math.round((width - ctx.measureText(text2).width) / 2 - 30);

				ctx.fillText(text, textX, textY);
				ctx.fillText(text2, text2X, text2Y);
				ctx.save();
			}
		});
	}

	// .slider-with-labels-component
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Попередній"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 15"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.7.6L.16 7.5l9.56 6.9.58-.8L2.55 8H61V7H2.55l7.74-5.6-.58-.8z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Наступний"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 15"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.44.6L61 7.5l-9.56 6.9-.59-.8L58.6 8H.15V7H58.6l-7.75-5.6.59-.8z"=/></svg></button>'
	}

	function getMaxOfArray(numArray) {
		return Math.max.apply(null, numArray);
	}

	function setItemHeights(labelsList, slidesLists){
		$(labelsList).find('li').attr('style', '');
		$(slidesLists).find('li').attr('style', '');

		$(labelsList).find('li').each(function(currentRow, item){
			let itemsHeightArr = [];
			let itemsToCompare = $(slidesLists).find('li:nth-child('+ (currentRow+1) +')');

			$(itemsToCompare).each(function(i, compareItem){
				itemsHeightArr.push( $(compareItem).height() );
			});

			itemsHeightArr.push( $(item).height() );

			let maxHeight = getMaxOfArray(itemsHeightArr);

			$(itemsToCompare).each(function(i, compareItem){
				$(compareItem).height(maxHeight)
			});

			$(item).height(maxHeight);
		});
	}

	$('.slider-with-labels-component').each(function(i, el){
		$(el).find('.cmp-slider').on('init reInit setPosition', function(e, slick){
			let labelsList = $(el).find('.cmp-labels');
			let slidesLists = $(el).find('.slide-list');

			setItemHeights(labelsList, slidesLists);
		});

		$(el).find('.cmp-slider').on('init reInit beforeChange', function(e, s, c, n){
			$(el).find('.cmp-slider-nav .nav-page').html( (n ? n : 0) + 1+'/'+s.slideCount);
		});

		$(el).find('.cmp-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: false,
			infinite: true,
			speed: 600,
			appendArrows: $(el).find('.cmp-slider-nav'),
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	});

	// Modals
	$('.modal').css('display','block');

	function getScrollWidth(){
		// create element with scroll
		let div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';

		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	$('.modal-dialog').click(function(e){
		e.stopPropagation();
	});

	$('.modal').click(function(e){
		hideModal( $(this) );
	});

	$('.modal-close, .js-modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		showModal( $(this).data('modal') );
	});

	let bodyScrolled = 0;
	function showModal(modal){
		$(modal).addClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').addClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', getScrollWidth());
		$('.header').css('padding-right', getScrollWidth());
	}

	function hideModal(modal){
		$(modal).removeClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').removeClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', 0);
		$('.header').css('padding-right', 0);
	}
});

// SVG use polyfill
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});

svg4everybody();