let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];

//your code here
// array.filter(function(currentValue, index, arr), thisValue)


//variablename = (condition) ? value1:value2 

//let bigCities = cities.filter(city => city.population > 3000000);
let newArray = tasks.filter(tasks => tasks.done  );
console.log(newArray);