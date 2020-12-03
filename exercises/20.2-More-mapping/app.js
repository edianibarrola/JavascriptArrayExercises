
var newArray = [];
var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
myFunction =(toBeTripled)=>{
    return toBeTripled*3;
    
}
newArray = myNumbers.map(myFunction);
console.log(newArray);