//constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;
let empWage = 0;
let empHrs = 0;

//UC 3
//Refactor the code to write function for daily working hours
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            
        default:
            return 0;
    }
}
// Expression for employee wage for a single day
empCheck = Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Wage for the day is: "+empWage);


    