var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
let lengthOfFirst = chunk_one.length;
let lengthOfSecond = chunk_two.length;
const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for (let i=0; i< lengthOfFirst; i++){
        newArray.push(chunk_one[i]);
        
    };
    for (let i=0; i< lengthOfSecond; i++){
        newArray.push(chunk_two[i]);
        
    };
    
    
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));