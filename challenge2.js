function speedCar(speed){    // function to detect car speed and output demerit points.

let difference = speed-70   // declare difference between normal and high speeds.
let point = difference/5    // declare demerit point
console.log(point)          // output demerit point
if(speed <= 70){            // detect car speed
    console.log('Ok')
}
else if(point > 12){        // calculate demerit points

    console.log('license suspended') // output license suspension
}
else{
    console.log(point)      // output demerit point
}
}
speedCar(140)