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
	const svg = document.querySelector('svg');
	const buildingsLayer = map.querySelector('.buildings_layer');
	const buildings = map.querySelectorAll('.building');
	const info = map.querySelector('.info_all');


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

		building.addEventListener('click', () => {
			console.log(id);
		});

		building.addEventListener('mouseover', () => {
			line.show();

			info.innerHTML = data[`id_${id}`].messages;
		});

		building.addEventListener('mouseout', () => {
			line.hide();

			info.innerHTML = '';

			lines.forEach((line) => {
				line.position();
			});
		});
	}


// --------------------------------------------------------------------
//  Шаг №2: Добавляем Hammer.js и перемещение карты
// --------------------------------------------------------------------

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


});

