function sino(array){
    let [time, steps, stepTime] = array;
    
    steps = Number(steps);
    stepTime = Number(stepTime);
    let [hours, minutes, seconds] = time.split(":");
    hours = Number(hours);
    minutes = Number(minutes);
    seconds = Number(seconds);
    if(hours.length < 2){
        hours = hours.padStart(2, 0)
    }
    if(minutes.length < 2){
        minutes = minutes.padStart(2, 0)
    }
    if(seconds.length < 2){
        seconds = seconds.padStart(2, 0)
    }
    let walkTime = steps * stepTime;
    let totalWalkTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds + walkTime;
    let result = new Date(totalWalkTimeInSeconds * 1000).toISOString().slice(11, 19);

    console.log(`Time Arrival: ${result}`);
}

sino(["23:49:13","5424","2"]);