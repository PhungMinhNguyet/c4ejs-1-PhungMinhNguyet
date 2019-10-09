// STUDY

//1.Variable Swap
let a = 5;
let b = 6;
console.log('1. ' + a, b);
let c = 0;
c = a;
a = b;
b = c;
console.log('2. ' + a, b);

//2.Split string into Array
const s = 'Hello Beauty there';
const a = Array(s);
console.log(a);
const s1 = 'Hello Beauty there';
const a1 = s1.split(' ');
console.log(a1);

//3.Print out array without using loops
const a = [4, 5, 7, -8];
console.log(...a);

//4. Simulating a clothes shop

let re = prompt('Hi there, welcome to shop admin panel, what do u want (C,R,U,D)');

let listItems = ['Jeans', 'T - shirt', 'Socks'];
for (;;) {
    re = re.toUpperCase();
    if (re == 'EXIT' || re == 'X') {
        break;
    } else {

        if (re == 'C' || re == 'R' || re == 'U' || re == 'D') {
            if (re == 'C') {
                let add = prompt('Enter the name of the newe Item:');
                listItems.push(add);
                alert('done');
                re = prompt('Hi there, welcome to shop admin panel, what do u want (C,R,U,D)');

            }

            if (re == 'U') {
                let updateNum = prompt('Enter the position u want to update:');
                for (let i = 0; i < listItems.length; i++) {
                    if ((i + 1) == updateNum) {
                        let newUp = prompt('Enter the name of the newe Item:');
                        listItems[i] = newUp;
                        alert('okay done!');
                    }
                }
                re = prompt('Hi there, welcome to shop admin panel, what do u want (C,R,U,D)');

            }
            if (re == 'D') {
                let deNo = prompt('enter the pos u wanna delete');
                for (let i = 0; i < listItems.length; i++) {
                    if (deNo == i + 1) {
                        listItems.splice(i, 1);
                    }
                }
                re = prompt('Hi there, welcome to shop admin panel, what do u want (C,R,U,D)');
            }
            if (re == 'R') {
                let listItemsf = [];
                for (let i = 0; i < listItems.length; i++) {

                    listItemsf.push(`\n ${i + 1} : ${listItems[i]} `);
                }
                alert('The current Items are: ' + listItemsf);
                re = prompt('Hi there, welcome to shop admin panel, what do u want (C,R,U,D)');

            }


        } else {
            alert(' This command is not supported ');
            re = prompt('Hi there, welcome to shop admin panel, what do u want (C,R,U,D)');

        }
    }

}
//5 Sum 
let inputNo = prompt('ENTER a sequence of Number,separated by commas(,)');
inputNo = inputNo.split(",");
let sum = 0;
for (let i = 0; i < inputNo.length; i++) {
    sum = sum + Number(inputNo[i]);
}
alert(' The sum of them is ' + sum);

//6 Sorting
let inputNo = prompt('ENTER a sequence of Number,separated by commas(,)');
inputNo = inputNo.split(",");
let min = inputNo[0];
for (let i = 0; i < inputNo.length; i++) {
    if (min > inputNo[i]) {
        min = inputNo[i];
    }
}
alert(' The smallest num is ' + min);

//7: Searching number
// bài này lỗi í ạ em mãi chả hiểu =((
let inputNo = Number(prompt('ENTER a number'));
const​​ arr​ = [3​, 4, ​6, -9​, 10​, -88​, 2​];
for (let i = 0; i < arr.length; i++) {
    if (inputNo == arr[i]) {
        alert(inputNo + ' is FOUND in my array at index' + i);
    } else {
        alert(inputNo + ' is NOT found in my array ');
    }
}


//8 flockSizeOfSheep 
let flockSizeOfSheep = [5, 7, 300, 90, 24, 50, 75];
let flockSizeOfSheepz = flockSizeOfSheep.join(' ');
console.log(`HEllO,Im PMN and here is my sheep sizes:\n ${flockSizeOfSheepz}`);
// max
let max = 0;
for (let i = 0; i < flockSizeOfSheep.length; i++) {
    if (max < Number(flockSizeOfSheep[i])) {
        max = Number(flockSizeOfSheep[i]);

    }
}
console.log('Now my biggest sheep has size ' + max + " let's shave it ");
let newVal = flockSizeOfSheep.indexOf(max);
flockSizeOfSheep[newVal] = 8;
flockSizeOfSheepz = flockSizeOfSheep.join(' ');
console.log(`After shearing, here is my flock sizes:\n ${flockSizeOfSheepz}`);
let lastMonth = Number(prompt('enter the month to count :'));
for (let j = 1; j <= lastMonth; j++) {
    let max = 0;
    for (let i = 0; i < flockSizeOfSheep.length; i++) {
        flockSizeOfSheep[i] += 50;
    }
    flockSizeOfSheepz = flockSizeOfSheep.join(' ');
    if (j !== lastMonth) {
        console.log(`\n MONTH ${j}\n`);
        console.log(`One month has, passed, my sheeps have grown, here is their sizes :\n ${flockSizeOfSheepz}\n`);
        for (let i = 0; i < flockSizeOfSheep.length; i++) {
            if (max < Number(flockSizeOfSheep[i])) {
                max = Number(flockSizeOfSheep[i]);

            }
        }
        console.log(` \n Now my biggest sheep has size  ${max} let's shave it \n`);
        newVal = flockSizeOfSheep.indexOf(max);
        flockSizeOfSheep[newVal] = 8;
        flockSizeOfSheepz = flockSizeOfSheep.join(' ');
        console.log(`\n After shearing, here is my flock sizes:\n ${flockSizeOfSheepz}\n`);

    } else {
        console.log(`\n MONTH ${j}\n`);
        console.log(`One month has, passed, my sheeps have grown, here is their sizes :\n ${flockSizeOfSheepz}\n`);
    }

}
let totalSize = 0;
for (let i = 0; i < flockSizeOfSheep.length; i++) {
    totalSize += Number(flockSizeOfSheep[i]);
}

let moneyEarned = totalSize * 2;
console.log(`My flock has sizes in total: ${totalSize}
              I would get ${totalSize} * 2$ = ${moneyEarned}`);

// Turtle
// Em chưa làm đổi màu đc ạ = (

const​​ colors​ = [​'red'​, ​'gray'​, ​'blue'​, ​'purple'​, ​'cyan']
let times = Number(prompt('ENTER a number of shapes'));
let size = 20;
for (let j = 0; j < times; j++) {
    size += 20;
    for (let i = 0; i < 4; i++) {
        fd(size);
        rt(90);
    }
}

//Optional1
let listName = prompt(' Enter a list of name separated by commas(,)');
listName = listName.split(',');
let arrName = [];
for (let i = 0; i < listName.length; i++) {
    arrName.push(`<${listName[i]}>`);
}
alert(` ${listName} => ${arrName}`);

//Optional2

let listNum = prompt(' Enter a list of Number ,separated by commas(,)');
listNum = listNum.split(',');
let arrNum = [];
for (let i = 0; i < listNum.length; i++) {
    if (Number(listNum[i]) % 2 !== 0) {
        arrNum.push(listNum[i]);
    }

}