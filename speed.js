
// this part of my code propmts a user to input speed of any limit


let speed = prompt('enter speed')

  if (speed<70)
  {
      console.log('ok');

  } 

  else 
  {
      let demeritPoint = ((speed-70)/5)

      console.log('demerit points:' + demeritPoint)

      if (demeritPoint>12) 
      {
            console.log('driver is suspended')

      }

  }