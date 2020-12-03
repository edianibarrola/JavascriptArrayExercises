var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var newList=[];
    for(let i=0; i< people.length; i++){
        
        if (personName != people[i]){
            newList.push(people[i]);
        }


    }
    return newList;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));