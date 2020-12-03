var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];
let biggestNum = 0;
const findBiggestNum = (numInArray) =>{
    for( let i=0; i < myArray.length; i++){

        if (numInArray[i] > biggestNum ){
            biggestNum = numInArray[i];
        }

    }
    return biggestNum;

}
console.log(findBiggestNum(myArray));

// myArray.forEach(findBiggestNumV2)
// const findBiggestNumV2 =(item)=>{
    // if (item<biggestNum){
        // biggestNum=item;
    // }
// }