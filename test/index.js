let speed = prompt ("please enter the speed")

if (speed<70){
    console.log(OK)
}
else{
    let demeritPoint = ((speed-70)/5)
    console.log("demerit Points:" + demeritPoint)
    if (demeritPoint>12){
        console.log('Driver is suspended')
    }
}
console.log(speed_detector(100))