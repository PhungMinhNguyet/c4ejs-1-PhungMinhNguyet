// STUDY
/// let - var - const 
// 1.- var is a type of variable that can be re-declared and globally use outside the scope ,
//     const is a variable that u cant re-declared and can only be accessed within the block it was declared.
// 2.- the diffrences between et and var is about the block scope.
//  Variable declared in a block with the let is only available for use within that block   
//  and var is available for use in the whole window. 
// 3. let can be re-declared and const can not
// 4.

/// Boolean
// 1- Boolean is a varialble that have only 2 values : True or false;
// 2- The results is yes or no it return true or false value 

//Review

//1 
//a  6 numbers, starting from 0 (no user input) 
for (let i = 0; i <= 6; i++) {
    console.log(i);
}


//b  n​ numbers, starting from 0, ​n​ entered by user 
let n = Number(prompt('input num '));
for (let i = 0; i < n; i++) {
    console.log(i);
}

//c  A sequence of numbers, starting from 3, ending before ​n​, ​n​ entered by user 
let n = Number(prompt('input num '));
for (let i = 3; i < n; i++) {
    console.log(i);
}

//d   A sequence of numbers, starting from ​c​, ending before ​n​, ​c​ and ​n​ entered by user 
let c = Number(prompt('input num start'));
let n = Number(prompt('input num end'));
for (let i = c; i < n; i++) {
    console.log(i);
}

//e   A sequence of numbers, starting from ​c​, ending before ​n​, stepping by 3, ​c​ and ​n entered by user 
let c = Number(prompt('input num start'));
let n = Number(prompt('input num end'));
for (let i = c; i < n; i += 3) {
    console.log(i);
}

//f  A sequence of numbers, starting from ​c​, ending before ​n​, stepping by ​s​. ​c​, ​n​ and s​ entered by user 
let c = Number(prompt('input num start'));
let n = Number(prompt('input num end'));
let s = Number(prompt('input step'));
for (let i = c; i < n; i += s) {
    console.log(i);
}

// 4  Write a program asking users their age, and then decide if they are old enough to view a 14+ content 
let age = Number(prompt('How old are you : '));
if (age <= 14) {
    alert('you are not old enough to watch');
} else {
    alert('enjoy');
}

//5  Write a program asking user to enter a number, ​x​, then check if ​x​ is in the lower half or higher half of 0 - 9 range 
let num = Number(prompt('Enter number: '));
if (num < 4.5) {
    alert('lower half of 9');
} else {
    alert('higher half of 9');
}

//6  Write a program asking user to enter two numbers, ​x​ and ​n​, then check if ​x​ is in lower half or higher half of ​n 
let x = Number(prompt('Enter x = '));
let n = Number(prompt('Enter n = '));
if (x < n / 2) {
    alert(x + ' is lower than half of ' + n);
} else {
    alert(x + ' is higher than half of ' + n);
}

//7  Write a script to check if a number is even (divisible by 2) or odd number
let x = Number(prompt('Enter x = '));
if (x % 2 == 0) {
    alert(x + ' is an even');
} else {
    alert(x + ' is an odd');
}

//8
// a- 6 L’s and H’s, half L’s, half H’s ​(L means low, H means high) 
for (let i = 0; i < 3; i++) {
    console.log('L');
}
for (let i = 0; i < 3; i++) {
    console.log('H');

}

//b - n​ L’s and H’s in total, n entered by user 
let x = Number(prompt('Enter x = '));

for (let i = 0; i < x / 2; i++) {
    console.log('L');
}
for (let i = 0; i < Math.floor(x / 2); i++) {
    console.log('H');
}

//c - 8 1’s and 0’s in total, consecutively 
for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log('0');
    } else {
        console.log('1');
    }
}

//d - n​ 1’s and 0’s in total, consecutively, ​n​ entered by user 
let x = Number(prompt('Enter x = '));

for (let i = 0; i < x; i++) {
    if (i % 2 == 0) {
        console.log('0');
    } else {
        console.log('1');
    }
}

//9 - the BMI 
let w = Number(prompt(' enter your weight(kg):'));
let h = Number(prompt(' enter your height (cm):'));
h = h / 100;
let BMI = w / (h * h);
alert('Your BMI is' + BMI);
if (BMI <= 0) {
    alert("smt wrong");
} else {
    if (BMI < 16) {
        alert('u are Severely underweight');
    } else if (BMI < 18.5) {
        alert('u are underweight');
    } else if (BMI < 25) {
        alert('u are normal');
    } else if (BMI < 30) {
        alert('u are overweight');
    } else {
        alert('u are obese');
    }
}

// turtle

// Square
for (let i = 0; i < 4; i++) {
    fd(100);
    rt(90);
}

//Triangle
for (let i = 0; i < 3; i++) {
    rt(120);
    fd(100);
}

//Pentagon
for (let i = 0; i < 6; i++) {
    rt(72);
    fd(100);
}

// Hexagon
for (let i = 0; i < 6; i++) {
    rt(60);
    fd(100);
}

//enter

//11
//a
numEd = Number(prompt('Enter the number of edges :'));
for (let i = 0; i < numEd; i++) {
    lt(120);
    fd(100);
}
//b
numEd = Number(prompt('Enter the number of edges :'));
for (let i = 0; i < numEd; i++) {
    lt(45);
    fd(100);
}
// CIRCLE

let n = Number(prompt('n:'));
for (let i = 0; i < n; i++) {
    fd(1);
    rt(1);
}


/// OPTIONAL
let numPo = Number(prompt('How many polygons u want: '));
if (numPo >= 1) {
    for (let i = 0; i < 8; i++) {
        color('red');
        rt(45);
        fd(60);
    }

    if (numPo >= 2) {
        for (let i = 0; i < 6; i++) {
            color('green');
            rt(60);
            fd(60);
        }

        if (numPo >= 3) {
            for (let i = 0; i < 5; i++) {
                color('red');
                rt(72);
                fd(60);
            }

            if (numPo >= 4) {
                for (let i = 0; i < 4; i++) {
                    color('green');
                    rt(90);
                    fd(60);
                }

                if (numPo >= 5) {
                    for (let i = 0; i < 3; i++) {
                        color('red');
                        rt(120);
                        fd(60);
                    }
                }
            }
        }

    }

} else {
    alert('Wrong');
    numPo = Number(prompt('How many polygons u want: '));
}