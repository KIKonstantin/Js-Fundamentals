function spiceMustFlow(startingYield){
    // Spice is Love, Spice is Life. And most importantly, Spice must flow. It must be extracted from the scorching sands of Arrakis, 
    // under the constant threat of giant sandworms. To make the work as efficient as possible, the Duke has tasked you with the creation
    //  of management software. 
    let daysCount = 0;
    let workersExtraction = 0;
    while(startingYield >= 100){
        daysCount++;
        workersExtraction += startingYield - 26;
        startingYield -= 10;
    }

    console.log(daysCount);
    if(daysCount != 0){
        console.log(workersExtraction - 26);
    }    else{
        console.log(workersExtraction);
    }
 
}
spiceMustFlow(111)
spiceMustFlow(450)