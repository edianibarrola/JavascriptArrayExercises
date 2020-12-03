let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here


let filterByName = (name , am) => {
    let namesWithAm = name.filter(name => name.includes(am) )
    return namesWithAm;

}


// function filterByName(theArray, theString){
//   let filteredArray = theArray.filter(item => item.includes(theString))
//   return filteredArray
// }

console.log(filterByName(names, 'am'));

//let newArray = tasks.filter(tasks => tasks.done  );