var time = 60;

while (time >= 0){
    if (time === 50){
        console.log("Orbiter transfers from ground to internal power");
    } else if (time === 0){
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-"+time+" seconds");
    }
    time--;
}