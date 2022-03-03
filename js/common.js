$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$( ".turn-1" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-2" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-3" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-4" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-5" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-6" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-7" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});


	$( ".turn-8" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});


	$( ".turn-9" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});


	$( ".turn-10" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-11" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-12" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-13" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});

	$( ".turn-14" ).mouseover(function() {
		$('.turn-fon').addClass('active');
		$('.all-trun').addClass('active');
		$('.warp_right .info_all').addClass('active');
	}).mouseleave(function (){
		$('.turn-fon').removeClass('active');
		$('.all-trun').removeClass('active');
		$('.warp_right .info_all').removeClass('active');
	});



	$( ".turn-fon" ).mouseover(function() {
		//$('.warp_right .info_all').hide();
	});

	// new LeaderLine(
	// 	document.getElementById('turn-8'),
	// 	document.getElementById('info_8_end')
	// );





	// --------------------------------------------------------------------
//  Данные
// --------------------------------------------------------------------

	const data = {
		id_0: {messages:'Администрация'},
		id_1: {messages:'Фермский магазин'},
		id_2: {messages:'Коворкинг'},
		id_3: {messages:'Коммерческие помещения свободного назначения'},
		id_4: {messages:'Спа и фитнес'},
		id_5: {messages:'Начальная школа'},
		id_6: {messages:'Детский сад'},
		id_7: {messages:'<div class="h1">I очередь</div><table><tr><td style="vertical-align: bottom;"><div class="sub_title"> Всего домовладений:</div></td><td><span class="sub_title_span">34</span></td></tr><tr><td style="vertical-align: bottom;"><div class="in_price">В продаже: </div></td><td><span class="in_price_span">5</span></td></tr></table>'},
		id_8: {messages:'<div class="h1">II очередь</div><table><tr><td style="vertical-align: bottom;"><div class="sub_title"> Всего домовладений:</div></td><td><span class="sub_title_span">34</span></td></tr><tr><td style="vertical-align: bottom;"><div class="in_price">В продаже: </div></td><td><span class="in_price_span">5</span></td></tr></table>'},
		id_9: {messages:'<div class="h1">II очередь</div><table><tr><td style="vertical-align: bottom;"><div class="sub_title"> Всего домовладений:</div></td><td><span class="sub_title_span">34</span></td></tr><tr><td style="vertical-align: bottom;"><div class="in_price">В продаже: </div></td><td><span class="in_price_span">5</span></td></tr></table>'},
		id_10: { messages:'<div class="h1">IV очередь</div><table><tr><td style="vertical-align: bottom;"><div class="sub_title"> Всего домовладений:</div></td><td><span class="sub_title_span">34</span></td></tr><tr><td style="vertical-align: bottom;"><div class="in_price">В продаже: </div></td><td><span class="in_price_span">5</span></td></tr></table>'},
		id_11: { messages:'<div class="h1">V очередь</div><table><tr><td style="vertical-align: bottom;"><div class="sub_title"> Всего домовладений:</div></td><td><span class="sub_title_span">34</span></td></tr><tr><td style="vertical-align: bottom;"><div class="in_price">В продаже: </div></td><td><span class="in_price_span">5</span></td></tr></table>'},
		id_12: { messages:'<div class="h1">VI очередь</div><table><tr><td style="vertical-align: bottom;"><div class="sub_title"> Всего домовладений:</div></td><td><span class="sub_title_span">34</span></td></tr><tr><td style="vertical-align: bottom;"><div class="in_price">В продаже: </div></td><td><span class="in_price_span">5</span></td></tr></table>'},
		id_13: { messages:'<div class="h1">VII очередь</div><table><tr><td style="vertical-align: bottom;"><div class="sub_title"> Всего домовладений:</div></td><td><span class="sub_title_span">34</span></td></tr><tr><td style="vertical-align: bottom;"><div class="in_price">В продаже: </div></td><td><span class="in_price_span">5</span></td></tr></table>'  },
		id_14: { messages:'7 14' },

	};


// --------------------------------------------------------------------
//  Используемые элементы на странице
// --------------------------------------------------------------------

	const map = document.getElementById('my-map');
	//const svg = document.querySelector('svg');
	let svgPlan = d3.select('svg#svg_plan')
	const buildingsLayer = map.querySelector('.buildings_layer');
	const buildings = map.querySelectorAll('.building');
	const info = map.querySelector('.info_all');

	let showSt = true;

// --------------------------------------------------------------------
//  Шаг №1: Инициализируем здания и линии от leader-line.js
// --------------------------------------------------------------------

	const lines = [];

	for (building of buildings) {
		const id = building.getAttribute('data-building-id');


		const line = new LeaderLine(
			LeaderLine.pointAnchor(building, { x: '50%', y: '50%' }),
			LeaderLine.pointAnchor(info, { x: '50%', y: '50%' }),
			{
				// startLabel: LeaderLine.captionLabel(`${price}р/сутки`, {
				// 	fontFamily: 'Rubik Mono One',
				// 	fontWeight: 400,
				// 	fontSize: 12,
				// 	offset: [-30, -50],
				// 	outlineColor: '#555'
				// }),
				color: '#fff',
				startPlug: 'arrow1',
				endPlug: 'behind',
				endSocket: 'bottom',
				hide: true
			}
		);

		lines.push(line);


		building.addEventListener('mouseover', () => {
			if(showSt) {
				console.log(showSt);
				line.show();
				info.innerHTML = data[`id_${id}`].messages;
			}
		});

		building.addEventListener('mouseout', () => {
			if(showSt){
				line.hide();
				console.log(showSt);
				info.innerHTML = '';

				lines.forEach((line) => {
					line.position();
				});
			}
		});

		building.addEventListener('click', function(path) {
			let e = path.target;
			let zoom = $(e).data('zoom');
			let line_turn = $(e).data('line');
			console.log(line_turn);
			$('.all-trun ').data('zoom', false);
			if(zoom === false){
				line.hide();
				showSt = false;
				$('.turn-fon').addClass('active_click');
				$('.all-trun').addClass('active_click');
				$('.warp_right .info_all').addClass('active_click');
				$(e).removeClass('active_click').addClass('active_perment');
				$('.line_turn_'+line_turn).addClass('active_line');
				showLeft(line_turn);
				let viewbox = $(e).data('viewbox');
				let scale = $(e).data('scale');

				$(e).data('zoom', true);

				svgPlan.transition()
					.duration(1000)
					.each('start', function () {

					})
					.attr('viewBox', viewbox)
					.attr('style', 'transform:scale('+scale+')')
					.each('end', function () {

					});

				console.log(path.target);
			} else {
				line.show();
				showSt = true;
				$(e).data('zoom', false);

				svgPlan.transition()
					.duration(1000)
					.each('start', function () {

					})
					.attr('viewBox', '0 0 1120 901')
					.attr('style', 'transform:scale(1.0)')
					.each('end', function () {

					});
				$('.turn-fon').removeClass('active_click');
				$('.all-trun').removeClass('active_click');
				$('.warp_right .info_all').removeClass('active_click');
				$(path.target).removeClass('active_click').removeClass('active_perment');
				$('.line_turn_'+line_turn).removeClass('active_line');
				showLeft(0);
			}
		});

	}




// --------------------------------------------------------------------
//  Шаг №2: Добавляем Hammer.js и перемещение карты
// --------------------------------------------------------------------
/*
	const hammertime = new Hammer(buildingsLayer);

	hammertime.get('pan').set({
		direction: Hammer.DIRECTION_ALL
	});

	hammertime.get('swipe').set({ enable: false });


	let translateX = 0;
	let translateY = 0;


	hammertime.on('pan', (e) => {
		const layer = buildingsLayer.getBoundingClientRect();
		const parent = svg.getBoundingClientRect();

		const offsets = {
			top:    layer.top - parent.top,
			bottom: layer.bottom - parent.bottom,
			right:  layer.right - parent.right,
			left:   layer.left - parent.left,
		};

		const speedX = e.velocityX * 20;
		const speedY = e.velocityY * 20;

		if (speedX > 0 && offsets.left < 0) {
			if (speedX < -offsets.left) {
				translateX += speedX;
			} else {
				translateX += -offsets.left * speedX / 100;
			}
		} else if (speedX < 0 && offsets.right > 0) {
			if (speedX > -offsets.right) {
				translateX += speedX;
			} else {
				translateX += offsets.right * speedX / 100;
			}
		}

		if (speedY > 0 && offsets.top < 0) {
			if (speedY < -offsets.top) {
				translateY += speedY;
			} else {
				translateY += -offsets.top * speedY / 100;
			}
		} else if (speedY < 0 && offsets.bottom > 0) {
			if (speedY > -offsets.bottom) {
				translateY += speedY;
			} else {
				translateY += offsets.bottom * speedY / 100;
			}
		}

		buildingsLayer.setAttribute('transform', `translate(${translateX} ${translateY})`);
	});


	hammertime.on('panstart', (e) => {
		lines.forEach((line) => {
			line.hide();
		});
	});


	hammertime.on('panend', (e) => {
		lines.forEach((line) => {
			line.position();
		});
	});



// --------------------------------------------------------------------
//  Не забываем сбрасывать все при изменении размера окна
// --------------------------------------------------------------------


	window.addEventListener('resize', () => {
		translateX = 0;
		translateY = 0;

		buildingsLayer.setAttribute('transform', `translate(${translateX} ${translateY})`);
	});

*/


	//turn-8
/*

	// get selection from DOM
	let svgPlan = d3.select('svg#svg_plan')

	// get the overall area to define
	// the viewbox.
	let width = 1120,
		height = 901;

	// set the initial view box
	// 0 0 are the x and y coordinates
	// preserveAspectRatio will ensure
	// things scale properly
	svgPlan.attr('viewBox', '0 0 ' + width + ' ' + height)
		.attr('preserveAspectRatio', 'xMinYMin meet');

	// stash all areas of interest;
	var aois = {}

	// get data for each of the
	// areas of interest, based
	// on the elements with `.aoi`
	svgPlan.select('.turn-8')
		.datum(function () {
			// define the datum for this selection
			// based on the data- attributes for
			// the elements
			return this.dataset;
		})
		.each(function (d) {
			// d is the current datum

			// aoi is the current element
			let aoi = d3.select(this);
			//console.log(d);
			//console.log($(this)[0].getBoundingClientRect().width);
			console.log(aoi.attr('data-scale'));

			// assuming none of the area of interest
			// are named the same
			// aois[d.name] = {
			// 	viewBox: aoi.attr('x') + ' ' +
			// 		aoi.attr('y') + ' ' +
			// 		$(this)[0].getBoundingClientRect().width + ' ' +
			// 		$(this)[0].getBoundingClientRect().height
			// };
			aois[d.name] = {
				viewBox: aoi.attr('data-viewbox'),
				scale: aoi.attr('data-scale'),
			};
		});

	// make scale to rotate
	// through different AOIs
	let scale = d3.scale.ordinal()
			.range(Object.keys(aois)),
		count = 0;

	count += 1;
	var current = scale(count);

	// transition the svg
	svgPlan.transition()
		.duration(1000)
		.each('start', function () {
			// at the beginning of the transition
			// set the label to nothing, move it out
			// of the way

		})
		.attr('viewBox', aois[current].viewBox)
		.attr('style', 'transform:scale('+aois[current].scale+')')
		.each('end', function () {
			// at the end of the transition
			// set the label to the name of the
			// current AOI, move it back into place

		});
*/
});


function showLeft(id){
	switch (id){
		case 0:
			$('#warp_left_colum').html('<div class="warp_menu"><div class="title_left"> Все для добрососедства и комфортной жизни </div> <div class="warp_hover"> <div class="left_block_hover top-border"> <div>18 <span>га</span></div> <div class="description_left">Площадь ЖК</div> </div> <div class="left_block_hover"> <div>30 <span>%</span></div> <div class="description_left">Общественные пространства</div> </div> <div class="left_block_hover"> <div>196 <span>домов</span></div> <div class="description_left">Один дом - одна семья</div> </div> </div> <div class="left_sub_title "> <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.899414 0H16.8994V16H0.899414V0Z" fill="#F2BB54"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3503 2.45065L14.3503 5.43056L13.3503 5.43056V4.15776L10.8804 6.62762L10.1733 5.92051L12.6432 3.45065L11.3704 3.45065L11.3704 2.45065L14.3503 2.45065Z" fill="#3A3A3A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.6272 9.88009L5.15733 12.35L6.43014 12.35L6.43014 13.35H3.45023V10.37L4.45023 10.37L4.45023 11.6429L6.92009 9.17298L7.6272 9.88009Z" fill="#3A3A3A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3501 10.37V13.35H11.3702L11.3702 12.35L12.643 12.35L10.1731 9.88009L10.8802 9.17298L13.3501 11.6429L13.3501 10.37L14.3501 10.37Z" fill="#3A3A3A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43039 3.45065L5.15758 3.45065L7.62745 5.92051L6.92034 6.62762L4.45047 4.15776V5.43056L3.45047 5.43056L3.45047 2.45065L6.43038 2.45065L6.43039 3.45065Z" fill="#3A3A3A"/> </svg> На территории </div> <ul class="list"> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Фермерский магазин и ресторан</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Площадка для дрессировки и выгула собак</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Коворкинг</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Начальная школа</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Детский сад</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Спортивные площадки и work out</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Спа</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Детские площадки</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Веревочный парк</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Велодорожки</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Зона BBQ</li> </ul> <div class="left_sub_title "> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0H16V16H0V0Z" fill="#F2BB54"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 9.00001C12.5 11.4853 10.4853 13.5 8 13.5C5.51472 13.5 3.5 11.4853 3.5 9.00001C3.5 7.2498 4.61746 5.68335 5.63676 4.60576C6.15679 4.05598 6.67513 3.60855 7.06289 3.29872C7.25716 3.14349 7.41967 3.022 7.53457 2.93866C7.59205 2.89698 7.63769 2.86479 7.66952 2.84264L7.70669 2.81701L7.71706 2.80996L7.72109 2.80724C7.72123 2.80715 7.72171 2.80683 8 3.22222C8.27829 2.80683 8.27841 2.80691 8.27855 2.807L8.27989 2.8079L8.28294 2.80996L8.29332 2.81701L8.33048 2.84264C8.36231 2.86479 8.40795 2.89698 8.46543 2.93866C8.58033 3.022 8.74284 3.14349 8.93712 3.29872C9.32488 3.60855 9.84321 4.05598 10.3632 4.60576C11.3825 5.68335 12.5 7.2498 12.5 9.00001ZM8 3.22222L8.27855 2.807L8 2.62039L7.72109 2.80724L8 3.22222ZM8 3.83784C7.912 3.90365 7.80623 3.98478 7.68711 4.07996C7.32488 4.3694 6.84321 4.78552 6.36324 5.29294C5.38254 6.32973 4.5 7.65217 4.5 9.00001C4.5 10.933 6.067 12.5 8 12.5C9.933 12.5 11.5 10.933 11.5 9.00001C11.5 7.65217 10.6175 6.32973 9.63676 5.29294C9.15679 4.78552 8.67513 4.3694 8.31289 4.07996C8.19377 3.98478 8.088 3.90365 8 3.83784Z" fill="#3A3A3A"/> </svg> Центральные коммуникации </div> <ul class="list"> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Электричество от 15 кВт</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Магистральный газ</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Центральный водопровод</li> <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50049 5.00024L0.122847 3.27279L1.03103 0.477701L3.96995 0.477702L4.87813 3.27279L2.50049 5.00024Z" fill="#F2BB54"/></svg>Центральная канализация</li> </ul> </div>');
			break;
		case 1:
			$('#warp_left_colum').html('<div class="warp_menu castums_left"><div><div class="title_left"> I очередь </div> <div class="warp_hover show_hover"> <div class="left_block_hover top-border"> <div class="color-gray">34</div> <div class="description_left">Всего домовладений</div> </div> <div class="left_block_hover"> <div>5</div> <div class="description_left">Свободно</div> </div> </div></div> <div class="in_sale">В продаже</div></div>');
			break;
	}
}











function zoomerPath(e){

	let svgPlan = d3.select('svg#svg_plan')

	let zoom = $(e).data('zoom');

	if(zoom === false){

		let viewbox = $(e).data('viewbox');
		let scale = $(e).data('scale');

		$(e).data('zoom', true);

		svgPlan.transition()
			.duration(1000)
			.each('start', function () {


			})
			.attr('viewBox', viewbox)
			.attr('style', 'transform:scale('+scale+')')
			.each('end', function () {

			});

	} else {


		$(e).data('zoom', false);
	}
}
