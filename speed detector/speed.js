
// this part of my code propmts a user to input speed of any limit

function Speed() {
    const speedLimit = 70;
   
  let speed = parseInt(document.getElementById("Speed").value)
    if (speed <= speedLimit + Point) {
        document.getElementById("output").innerHTML = 'OK'
        reoutput
    }
  
    const points = Math.floor((speed - speedLimit) / 5);
    if (points >= 12) 
    document.getElementById("output").innerHTML =("License suspended");
    else 
    document.getElementById("output").innerHTML =(5);
  }