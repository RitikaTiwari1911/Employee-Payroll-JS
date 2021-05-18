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

//Array Helper Functions
//UC7A - Calculate total wage using array for each traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);;
console.log("UC7A - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp wage: "+totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}

console.log("UC7A - Emp wage with reduce: "+empDailyWageArr.reduce(totalWages,0))

//UC 7B - Show the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily wage map");
console.log(mapDayWithWageArr);

//UC7C  - Show Days when Full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily wage filter when full time wage is earned")
console.log(fullDayWageArr);

//UC 7D - Find the first occcurance when full time wage was earned using find function 
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time fulltime wage was earned on day: "+mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - Check if every element of full time wage is truely holding full time wage
function isAllFulltimewage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E - Check all elements have full time wage: "+fullDayWageArr.every(isAllFulltimewage));

///UC 7F - Check if there is  any part time wage
function isAnyPartTimewage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if any part time wage: "+mapDayWithWageArr.some(isAnyPartTimewage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of days emp worked: "+empDailyWageArr.reduce(totalDaysWorked,0));


    