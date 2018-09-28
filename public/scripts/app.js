'use strict';

// console.log('app.js is running!');
//JSX - JavaScript XML

var app = {
	title: 'Indecision App',
	subTitle: 'Trust your decisions with me',
	options: []
};

var onFormSubmit = function onFormSubmit(event) {
	event.preventDefault();
	var option = event.target.elements.option.value;
	if (option) {
		app.options.push(option);
		event.target.elements.option.value = '';
		render();
	}
};

var removeAll = function removeAll(event) {
	event.preventDefault();
	app.options = [];
	render();
};

var onMakeDecision = function onMakeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNum];
	alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subTitle && React.createElement(
			'p',
			null,
			app.subTitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No Options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What Should I Do?'
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
