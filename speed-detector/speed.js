
// This part of code prompts the user to test my code using and number.
let speed = prompt ("please enter the speed")

//If the speed is less than 70, then it return OK.

if (speed<70){
    console.log(OK)
}

//If the speed exceeds 70km/hr then the license gets suspended.


// In order for the license to get suspended,it also checks the number of points that the speed of the car has exceeded with. 
else{
    let demeritPoint = ((speed-70)/5)
    console.log("demerit Points:" + demeritPoint)
    if (demeritPoint>12){
        console.log('Driver is suspended')
    }
}
console.log(speed_detector(100))