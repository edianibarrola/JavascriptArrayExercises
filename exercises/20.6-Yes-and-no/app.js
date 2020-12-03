let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
let wikiArr =[];
//your code here


theBools.map( (bool) =>  (bool === 0) ? wikiArr.push('woko') : (bool === 1) ?  wikiArr.push('wiki') : null);
        

     
   
    
    console.log(wikiArr);