function basicSalary(salary){  //function for calculating basic monthly salary of an employee.
    let NSSF = salary*0.06;    // declare and calculate percentage of NSSF from the employee salary.
    

    if(salary <= 24000){       // monthly employee salary
     let Tax = salary*0.1;     // declare Tax bracket
     let NHIF = 500;           // declare NHIF contribution
        console.log(salary-(Tax+NSSF+NHIF)) // output net employee salary after deductions.
    }
    else if(salary>=24001 && salary<=32333){ //monthl salary bracket of an employee
        let Tax = salary*0.25                // re-delare Tax bracket
        let NHIF = 800;                     // re-declare NHIF contribution
    console.log(salary-(Tax+NSSF+NHIF))     // output net salary of an employee
}
else{
    let Tax = salary*0.3;                    // re-delare Tax bracket 
    let NHIF = 1000;                         // re-declare NHIF contribution
    console.log(salary-(Tax+NSSF+NHIF))      // output net salary of an employee
}
}

basicSalary(50000)                          