function chopOnions(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(time>1000){
                reject("Not able to find Oninons")
            }
            resolve("Onions chopped");
        }, time)
    })
}

function heatPan(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(time>1000){
                reject("Pan Overheated")
            }
            resolve("Pan heated")
        }, time)
    })
}

function cookMeal(time, prevSteps){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           
            if(time>1000){
                reject("Meal is still cooking")
                return;
            }
             const resultMessage = `Meal is ready, thanks to the ingredient prep that was: "${prevSteps}"`;
            console.log("-> Step 3 Complete: Meal cooked!");
            resolve(resultMessage);
             
        }, time)
    })
}

console.log("starting the recipe....")

chopOnions(1000) 
    .then(resultOfChop => {
        console.log(`(Received: ${resultOfChop})`);
        return heatPan(800);
    })
    .then(resultOfHeat => {
        console.log(`(Received: ${resultOfHeat})`);
        return cookMeal(1000, resultOfHeat); 
    })
    .then(finalResult => {
        console.log("\n✅ Recipe Success! Final result:");
        console.log(finalResult);
    })
    .catch(error => {
        console.error("\n❌ Recipe Failure! Error caught:");
        console.error(error);
    });