// console.log('app.js is running!');
//JSX - JavaScript XML

const app = {
	title: 'Indecision App',
	subTitle: 'Trust your decisions with me',
	options: []
};

const onFormSubmit = event => {
	event.preventDefault();
	const option = event.target.elements.option.value;
	if (option) {
		app.options.push(option);
		event.target.elements.option.value = '';
		render();
	}
};

const removeAll = event => {
	event.preventDefault();
	app.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subTitle && <p>{app.subTitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What Should I Do?
			</button>
			<button onClick={removeAll}>Remove All</button>

			<ol>
				{app.options.map(option => (
					<li key={option}>{option}</li>
				))}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

render();
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
