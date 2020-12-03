let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];
let newNames =[];
let prepender = function(name){
	return 'My name is: '+name;
};

//your code here
newNames = names.map(prepender);

console.log(newNames);