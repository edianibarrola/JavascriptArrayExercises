let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color){
    // your code here
    return '<li>' + color.label + '</li>'
}
//array.filter(function(currentValue, index, arr), thisValue)
    
function filterColors(color){
    // your code here
    //variablename = (condition) ? value1:value2
    if ( color.sexy == true ) 
    
     return color.label
     
    
}
    // function filterByName(theArray, theString){
//   let filteredArray = theArray.filter(item => item.includes(theString))
//   return filteredArray
// }


function generateHTMLFromArray(array){
	
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

