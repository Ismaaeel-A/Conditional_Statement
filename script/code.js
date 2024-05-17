// if statement
/* let num1 = 14
let num2 = 7
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else {
    console.log(`${numb1} is not greater than ${num2}`)
}

let salary = 8000
let bonus = 600
salary > 5000 ?
    console.log("yesnt") :
    console.log("nes")



// If statement
let performance = true
let salary = 7000
let bonus = 500




if (salary > 5000) {
    console.log(`Your salary is R${salary + bonus}`);
} else {
    console.log(`Your salary is R${salary}`);
} */



//if and else if statement

/* if (performance) {
    console.log(`Your salary is R${salary + bonus}`);
} else if (salary > 5000) {
    console.log(`Your salary is R${salary + bonus}`);
} else {
    console.log(`Your salary is R${salary}`);
} */

//nested if statement
/* if (performance) {
    if (salary > 5000) {
        console.log(`Your salary is R${salary + bonus}`);
    } else {
        console.log(`Your salary is R${salary}`);
    }
} else {
    console.log('You didn\'t perform well'); */
//}
//Switch statement
/* switch (salary) {
    case 5000:
        console.log(`Salary is R${salary}`);
        break
    case 7000:
        console.log(`Salary is R${salary}`);
        break
    default:
        console.log(`This ${salary} was not included in one of the case`);
        break
} */






/* 
let wage = 6000
let afterhours = 1000
let hours =

    if (hours > 8) {
        console.log(`Your wage this week is ${wage + afterhours}.`)
    } else {
        console.log(`Your wage this week is ${wage}.`)
    }
 */


/* let mark = 73

switch (true) {
    case (100):
        console.log(`Congrats you got an A`)
        break

    case mark >= 90 && mark < 99:
        console.log(`Congrats you got a B`)
        break


    case mark >= 80 && mark < 89:
        console.log(`Congrats you got a C`)
        break

    case mark >= 70 && mark < 79:
        console.log(`Congrats you got a D`)
        break

    case mark >= 60 && mark < 69:
        console.log(`Congrats you got a E`)
        break

    case mark < 60:
        console.log(`Congrats you fail`)
        break

    default:
        console.log(`You failed beyond comprehension`)
        break
} */

let grade = ""
let mark = 50
switch (true) {
    case mark == 100:
        grade: 'A'
        break

    case mark >= 90:
        grade: 'B'
        break

    case mark >= 80:
        grade: 'C'
        break

    case mark >= 70:
        grade: 'D'
        break

    case mark >= 60:
        grade: 'E'
        break

    case mark >= 50:
        grade: 'F'
        break

    default:
        grade: 'FAIL'
        break
}

console.log(`${grade}`)