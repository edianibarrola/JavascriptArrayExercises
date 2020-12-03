var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
    return value * 9/5 + 32;
    



});


// (0°C × 9/5) + 32 = 32°F

// var militaryToCivilian = function(hour){
//     if(hour==12) return hour + "pm";
//     else if(hour==24) return hour-12 + "am";
//     else if(hour > 11) return hour-12 + "pm";
//     else return hour + "am";
// }

// var civilianHours = militaryHours.map(militaryToCivilian);

 console.log(arrayOfFahrenheitValues);