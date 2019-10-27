let count = 0;

let btnH = document.getElementById('high');
btnH.addEventListener('click', onHighNum);

function onHighNum() {
    document.getElementById('num').innerHTML = count;
    count += 1;
}

let btnL = document.getElementById('low');
btnL.addEventListener('click', onLowNum);

function onLowNum() {
    document.getElementById('num').innerHTML = count;
    count -= 1;
}