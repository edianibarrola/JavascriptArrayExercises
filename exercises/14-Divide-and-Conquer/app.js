let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];
let odd = [];
let even = [];
let newArray =[];

// your code here
const mergeTwoList = (list) => {
    for (let i=0; i< list_of_numbers.length; i++ ){
        if (list_of_numbers[i]%2 != 0){
            odd.push(list_of_numbers[i]);
            
        }
    }
    for (let i=0; i< list_of_numbers.length; i++){
        if (list_of_numbers[i]%2 === 0) {
            even.push(list_of_numbers[i]);
            
        }
    }
        
    
    for (let i=0; i<even.length; i++){
        newArray.push(even[i]);
    }
    for (let i=0; i<odd.length; i++){
        newArray.push(odd[i]);
    }
    newArray= odd.concat(even);
    return newArray;
}


console.log(mergeTwoList(list_of_numbers))
console.log(newArray);
console.log('odd: ' + odd + ':' + odd.length);
console.log('even: ' + even + ':'+ even.length);
console.log('new array length: '+ newArray.length);
console.log('list of num length: '+ list_of_numbers.length);
console.log('length of odd and even: ' + (odd.length + even.length) );

