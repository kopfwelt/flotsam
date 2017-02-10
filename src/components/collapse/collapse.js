const $ = require('jquery');

export default class Collapse {
	constructor() {
		// super();
		this._actions();
		this.collapseParents;
	}
	// target dt element in faq minor
	// on click toggle class is-active to dl parent

	onCollapseClick(event) {
		// const collapseTargets = $ ('.Collapse-subtitle');
		// first remove '.is-active' on all of them while ignoring the one clicked
		this.collapseParents.not(event.currentTarget).removeClass('is-active');
		// then add it on the current target
		$(event.currentTarget).toggleClass('is-active');
	}

	_actions() {
    this.collapseParents = $('.Collapse-child');
		this.collapseParents.on('click', this.onCollapseClick.bind(this));
	}
}
