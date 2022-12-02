function grades(marks){             // function for calculating student gardes.


if(marks >=79 && marks <=100){      // calculating student marks
    console.log('A')                // output student grade
}
else if(marks>= 60 && marks <=79){  // calculating student marks
    console.log('B')                // output student grade
}
else if(marks >= 49 && marks <= 49){  // calculating student marks      
    console.log('C')                  // output student grade
}
else if(marks >= 49 && marks <= 40){   // calculating student marks
    console.log('D')                  // output student grade
}
else{
    console.log('E')                   // calculating student marks
}
}
grades(15)
