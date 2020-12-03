// Code goes here
let newArray=[];
let paramString=[];
const matrixBuilder = (param) => {
    
    for (let i=0; i< param; i++){
         newArray.push([]);
       
         for (let j=0; j< param; j++){
    
    newArray[i].push( Math.floor(Math.random()*2 ) );
    } 
    }
    
    return newArray;
}


// do not change anything from this line down
console.log(matrixBuilder(5))