let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
par= par.toLowerCase();

// your code here
for (let i=0; i < par.length ; i++) {

    if (par[i] in counts){
        counts[par[i]] = counts[par[i]] +1;
    
    
    }else if (par[i] == ' '){
        continue;
    
    }else {
        counts[par[i]] = 1;
    }



}



console.log(counts);