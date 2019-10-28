//12
// 12.1
let timeSheetData = [{
        Project: 'Learn front-end',
        Task: 'Learn HTML',
        TimeSpent: 6
    },
    {
        Project: 'Learn front-end',
        Task: 'Learn CSS',
        TimeSpent: 8
    },
    {
        Project: 'Learn front-end',
        Task: 'Learn JS Variables and Data Types',
        TimeSpent: 6
    },
    {
        Project: 'Learn git',
        Task: 'Learn git basics ',
        TimeSpent: 2
    }
]

//12.3
let read = document.getElementById('ts_tbody');

function readDom() {
    console.log(read);
}
readDom();

//12.4


function insertData() {
    for (let i = 0; i < timeSheetData.length; i++) {
        let insertD = document.getElementsByTagName('tbody')[0];
        let newRow = insertD.insertRow(i);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = timeSheetData[i].Project;
        cell2.innerHTML = timeSheetData[i].Task;
        cell3.innerHTML = timeSheetData[i].TimeSpent;

    }
}
insertData();


//12.6

function onAddPro() {
    let newP = document.getElementById('p').value;
    let newT = document.getElementById('t').value;
    let newTS = document.getElementById('ts').value;
    /////////// push and console timesheetj in html
    let a = timeSheetData.push(`{      
Project: '${newP}',
Task: '${newT}',
TimeSpent: ${newTS}}`);


    let insertD = document.getElementsByTagName('tbody')[0];
    let newRow = insertD.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = newP;
    cell2.innerHTML = newT;
    cell3.innerHTML = newTS;

}
let btnAdd = document.getElementById('Add');
btnAdd.addEventListener('click', onAddPro);