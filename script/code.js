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

/* let grade = ""
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

console.log(`${grade}`) */







/* function greeting(firstName , lastName){
    console.log(`My name is ${firstName} ${lastName}`)
}

//argument
greeting('Joel','Mukanya')
greeting('Robyn','Carnow') */

//Addition function to display the sum of 2 numbers

/* function add(num1, num2 /* = 2   a default value that you can assign){
    let add = num1 + num2 // if a value isnt defined you will get an output of NaN
    console.log(add)
}*/

//function add(...storage) { // ...storage is an array called storage
/* console.log(storage.reduce((curr, n) => curr + n)) */
/*     console.log(storage.reduce(addition))

    if (Number.isInteger(addition)) {
        console.log(addition)
    } 
    else{
        console.log(0)
    } //doesnt work properly

} */
/* 
add(4, 86)
add(4, 86, 76)
add(4, 86, 23, 54) // these get pushed into the variables */

/* add('Sipho', 1, 'Jamin', 2, 3, 'Leah', 4, 2, 5, 6, 'Joel')

function addition(curr, nextV) {
    return curr + nextV
} */


//let arr = ['John','Arnold','Richie','Alex','Kino'] 


function ex(...arr) {
    arr.forEach((element) => {
     //   console.log(element)
        if (element == 2){
            console.log('ostrich')
        } else {
            console.log('Oct')
        } }     
    );
   // console.log(arr)
}

/* ex(2 , 'John', 9, 6, 'Arnold', 4 , 2 , 'Richie', 'Alex', 'Kino')


function ex2(...arr1){
for (let i = 0; i < arr1.length; i++ ){
    console.log(arr1[i])
}
}

ex2('bob' , 34 , 'Andre' , 5) 

let data = [9,6,'64','pop','op',4]

data.forEach((value) => {

    console.log(value.startsWith(value))
}) */


let data = [9, 'Peter', 'sipho', 3, 4, 11, 'Sarah', 'Sisi']
data.forEach((people) => {
    if ((typeof people == 'string') && (people.toLowerCase()[0] == 's'))
        console.log(people)
})