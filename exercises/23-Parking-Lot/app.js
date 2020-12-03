let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const getParkingLotState =(parking_state) =>{
    for (let arrCount = 0; arrCount < parking_state.length; arrCount++){

        for (let i=0 ; i<parking_state.length; i++ ){
            if ( parking_state[arrCount][i] != 0){
                
                if(parking_state[arrCount][i] == 1 ){
                    state.occupiedSlots++;
                }
                else if(parking_state[arrCount][i] == 2 ){
                    state.availableSlots++;
                }

            }state.totalSlots++;
        }
    }return state
}
const state ={
    totalSlots: 0,
    availableSlots: 0, 
    occupiedSlots: 0
}
console.log(getParkingLotState(parking_state))

console.log(parking_state[0].length);
console.log(parking_state.length);
