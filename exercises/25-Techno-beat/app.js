
const lyricsGenerator = (beatmap) => {
    let threeInArowCtr = 0;
    let lyr1 = 'Drop the base ';
    let lyr0 = 'Boom ';
    let lyr3InArow = '!!!Break the base!!! ';
    let lyricsGenerated = [];
    for (beat of beatmap){
        if (beat == 1){
            lyricsGenerated.push(lyr1);
            threeInArowCtr++;
            
        }
        if (beat == 0){
            lyricsGenerated.push(lyr0);
            threeInArowCtr=0;
        }
        if (threeInArowCtr == 3 ){
            lyricsGenerated.push(lyr3InArow)
        }
    
    
    }return lyricsGenerated.join('')//return String(lyricsGenerated);
}





// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
