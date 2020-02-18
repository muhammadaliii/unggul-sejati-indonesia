(function($){

	$('.certificate').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	$('.awards').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	$('.gallery').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		selector: '.selector',
		download: false,
	});

	$('.project-slider .project-area').slick({
		centerMode: true,
		centerPadding: '20%',
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		asNavFor: '.project-slider .project-nav .wrapper',
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					centerPadding: '15%',
				}
			},
			{
				breakpoint: 770,
				settings: {
					centerPadding: '10%',
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: false,
				}
			}
		]
	});

	$('.project-slider .project-nav .wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.project-slider .project-area',
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		focusOnSelect: true,
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		responsive: [
			{
				breakpoint: 770,
				settings: {
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerPadding: '20px',
				}
			}
		]
	});

	$('.partners-info .partners-slider').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					dots: true,
				}
			}
		]
	});



	var $slickElement = $('#cover-content');

	$slickElement.slick({
		slidesToShow: 1,
		infinite: true,
		autoplay: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		prevArrow: '<button class="button-arrow prev-arrow"><span class="slide-arrow" data-aos="fade-right" data-aos-delay="900"></span></button>',
		nextArrow: '<button class="button-arrow next-arrow"><span class="slide-arrow" data-aos="fade-left" data-aos-delay="900"></span></button>',	
		dots: true,
	});

	function ClassDotsManager(slickElementId, numOfItems, numOfDots) {
		this.listDotsElement = $("#" + slickElementId + " ul.slick-dots li");
		this.numOfDots = numOfDots <= numOfItems ? numOfDots : numOfItems;
		this.minIndex = 0;
		this.maxIndex = numOfDots - 1;
		this.showDotsBetween = function (minIndex, maxIndex) {
			this.listDotsElement.filter(function (index) {
				$(this).css("display", index >= minIndex && index <= maxIndex ? "inline-block" : "none");
			});
		};
		this.init = function () {
			this.showDotsBetween(0, this.numOfDots - 1);
		};
		this.updateDots = function (newIndex) {
			if (newIndex >= this.minIndex && newIndex <= this.maxIndex) {
				// don't need to update
			} else {
			if (newIndex > this.maxIndex) {
				this.maxIndex = newIndex;
				this.minIndex = this.maxIndex - this.numOfDots + 1;
			} else {
				this.minIndex = newIndex;
				this.maxIndex = this.minIndex + this.numOfDots - 1;
			}
				this.showDotsBetween(this.minIndex, this.maxIndex);
			}
		};
	}

	var maxDots = 6; //max dots showing
	var numberOfItems = 28; //number of total the slide
	var dotsManager = new ClassDotsManager("list-banner", numberOfItems, maxDots);
	dotsManager.init();

	$slickElement.on("afterChange", function (slick, currentSlide) {
		dotsManager.updateDots(currentSlide.currentSlide);
	});




})(jQuery);