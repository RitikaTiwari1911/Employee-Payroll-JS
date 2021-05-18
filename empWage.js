//constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

//variables
let empWage = 0;
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

//using function to check emp working hours for a day
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

//function for daily wage
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
// Expression for employee wage for a month
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: " +totalWorkingDays+ " Total Hrs: "+totalEmpHrs+ " Emp Wage: "+empWage);


    