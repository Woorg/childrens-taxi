import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'magnific-popup';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/ui/widgets/spinner';


(function ($) {
	$(function () {
		svg4everybody();

		/**
		 *
		 * Add address
		 *
		 */

		const $addAddress = $('.form__add-address');
		let i = 1;

		$addAddress.on('click', function (e) {
			e.preventDefault();
			let addressCont = $('.form__field-w');
			i += 1;
			addressCont.append($('<div class="form__field form__field_text"><input type="text" value="" placeholder="" class="form__input"' + 'name="address_' + i + '"></div>'));
		});

		/**
		 *
		 * Quant spinner
		 *
		 */

		$('.form__field_quant').on('hover', function () {
			$(this).find('.taxi-age').attr('fill', '#157460');
		});

		const $quantInput = $('.form__quant-input');
		const $quantUp = $('.form__quant-button_up');
		const $quantDown = $('.form__quant-button_down');


		$quantInput.spinner({
		   max: 100,
		   min: 1,
		   step: 1
		});

		let passAge = '';
		let passQuant = 0;
		let passCont = $('.form__summary-val');
		let passContTotal = '';
		$quantUp.click(function() {
			$(this).parents('.form__quant').find('.form__quant-input').spinner('stepUp');
			passAge += $(this).parents('.form__field_quant').data('age');
			passQuant = $(this).parents('.form__quant').find('.form__quant-input').val();
			console.log($(this).parents('.form__quant').find('.form__quant-input').val());
			// passContTotal += $('.form__summary-val').html();
			console.log(passContTotal);
			if ($(this).parents('.form__field_quant').data('age') == 'adult') {
				passCont.html('<span>'  +  passQuant + '&nbsp;' + 'взрослый; ' + '</span>');
			}
			if ($(this).parents('.form__field_quant').data('age') == '12-18') {
				passCont.html('<span>'  +  passQuant + '&nbsp;' + '12-18 лет; ' + '</span>');
			}
			if ($(this).parents('.form__field_quant').data('age') == '7-12') {
				passCont.html('<span>'  +  passQuant + '&nbsp;' + '7-12 лет; ' + '</span>');
			}
			if ($(this).parents('.form__field_quant').data('age') == '8-7') {
				passCont.html('<span>'  +  passQuant + '&nbsp;' + '8 мес.-7 лет; ' + '</span>');
			}
			if ($(this).parents('.form__field_quant').data('age') == '0-8') {
				passCont.html('<span>'  +  passQuant + '&nbsp;' + '0-8 мес.; ' + '</span>');
			}

			// $('.form__summary-val').html(passQuant + '&nbsp;' + passAge);
		});
		$quantDown.click(function() {
		   $(this).parents('.form__quant').find('.form__quant-input').spinner('stepDown');
		   if ($(this).parents('.form__field_quant').data('age') == 'adult') {
			   passCont.html('<span>'  +  passQuant + '&nbsp;' + 'взрослый; ' + '</span>');
		   }
		   if ($(this).parents('.form__field_quant').data('age') == '12-18') {
			   passCont.html('<span>'  +  passQuant + '&nbsp;' + '12-18 лет; ' + '</span>');
		   }
		   if ($(this).parents('.form__field_quant').data('age') == '7-12') {
			   passCont.html('<span>'  +  passQuant + '&nbsp;' + '7-12 лет; ' + '</span>');
		   }
		   if ($(this).parents('.form__field_quant').data('age') == '8-7') {
			   passCont.html('<span>'  +  passQuant + '&nbsp;' + '8 мес.-7 лет; ' + '</span>');
		   }
		   if ($(this).parents('.form__field_quant').data('age') == '0-8') {
			   passCont.html('<span>'  +  passQuant + '&nbsp;' + '0-8 мес.; ' + '</span>');
		   }
		});

		/**
		 *
		 * Popup
		 *
		 */

	 	$('.open-popup').magnificPopup({
			type:'inline',
			midClick: true,
			closeBtnInside: true
		});


		/**
		 *
		 * Animate to section
		 *
		 */


		$('.header__nav a, .footer__to-top, .header__logo').on('click', function(e) {
			var _scroll = $(this).attr('href');
			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top - 80 }, 800);
			}
		});



		$(window).on('scroll', function(e) {
			if($(window).scrollTop() > $('.header').height() ) {
				$('.header').addClass('header_fixed');
			} else {
				$('.header').removeClass('header_fixed');
			}
		});


		var styles = [
			'padding: 10px',
			'background: #fff',
			'color: #333',
			'display: block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
			'line-height: 1.4',
			'text-align: left',
			'font-size: 12px',
			'font-weight: 400'
		].join(';');

		console.log('%c html верстка',  styles);
		console.log('%c gorlov35@gmail.com',  styles);


	});

})(jQuery);
