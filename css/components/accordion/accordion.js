const $ = require('jquery');

export default class Accordion {
	constructor() {
		// super();
		this._actions();
	}
	// target dt element in faq minor
	// on click toggle class is-active to dl parent

	onAccordionClick(event) {
		const accordionParents = $('.Accordion-child');
		// const accordionTargets = $ ('.Accordion-subtitle');
		// first remove '.is-active' on all of them while ignoring the one clicked
		accordionParents.not(event.currentTarget).removeClass('is-active');
		// then add it on the current target
		$(event.currentTarget).toggleClass('is-active');
	}

	_actions() {
		const accordionParents = $('.Accordion-child');
		accordionParents.on('click', this.onAccordionClick.bind(this));
	}
}
