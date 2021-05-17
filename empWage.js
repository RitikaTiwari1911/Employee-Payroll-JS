//constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;
let empWage = 0;
let empHrs = 0;

//UC2
//To check the emp wage accounding to the part time and full time work
    empCheck = Math.floor(Math.random()*10)%3;
    switch(empCheck){
        case IS_PART_TIME:
            console.log("Employee is PRESENT for half day")
            empHrs=PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            console.log("Employee is PRESENT for full day")
            empHrs=FULL_TIME_HOURS;
            break;
        default:
            console.log("Employee is ABSENT")
            empHrs=0;        
            break;
    }
// Expression for employee wage for a single day
empWage = empHrs * WAGE_PER_HOUR;
console.log("Wage for the day is: "+empWage)


    