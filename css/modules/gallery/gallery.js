const Flickity = require("flickity");

const gallery = selector => {
	const defaultOptions = {
		draggable: false,
		pageDots: false,
		prevNextButtons: false,
		// imagesLoaded: true,
		// lazyLoad: 2,
		percentPosition: true,
		cellAlign: "left",
		setGallerySize: true,
		contain: true,
		autoPlay: 3000,
		pauseAutoPlayOnHover: false
	};
	return new Flickity(selector, defaultOptions);
};

const init = (selector = ".js-gallery") => {
	if (!document.querySelector(selector)) {
		return;
	}
	gallery(selector);
};

module.exports = init;
