/*
	Middleware to expose available routes at the /ui-routes endpoint
*/
const fs = require('fs');
const path = require('path');

const vuejsRouteFile = '../src/router/routes.js';

/*
 * Extract Routes as formatted for Vue Router
 * removing async function calls and converting them into a valid json object.
 */
function buildRouteJSON() {
	// Pull in Route Declarations as a string so import statements aren't attempted
	const routesAsString = fs.readFileSync(path.resolve(__dirname, vuejsRouteFile), 'utf-8');
	// Clean out the arrow functions and imports used for code-splitting routes in vue
	// console.log(JSON.stringify(routesAsString));
	// re-establish a js array from our cleaned string
	const matchPaths = RegExp(/path:\s'([^']*)'/g);
	let myArray = [];
	const paths = [];
	// eslint-disable-next-line
	while ((myArray = matchPaths.exec(routesAsString)) !== null) {
		const msg = `${myArray[0]}`;
		// console.log(msg);
		const pathOnly = msg.replace(/(path:\s)/, '');
		// console.log(pathOnly);
		const cleanString = pathOnly.replace(/'/g, '');
		// console.log(cleanString);
		if (cleanString !== '*' && cleanString !== '' && cleanString.indexOf('/') === 0) {
			paths.push(cleanString);
		}
		// allow styleguide children
		// TODO: find some better way to handle children arrays
		if (cleanString === '/styleguide') {
			paths.push('/styleguide/:any');
		}
	}
	// add /static path and anything against it
	paths.push('/static/:any');
	// console.log(paths);
	return paths;
}

// eslint-disable-next-line
module.exports = (req, res, next) => {
	res.json(buildRouteJSON());
};
