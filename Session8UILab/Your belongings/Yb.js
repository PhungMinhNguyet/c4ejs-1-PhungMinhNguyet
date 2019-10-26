let items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);

let item = document.getElementById("list_items");
console.log(item);

let btn = document.getElementById('add');
btn.addEventListener('click', onBtnAdd);


function showList() {
    for (let i = 0; i < items.length; i++) {

        item.insertAdjacentHTML('beforeend', `<li><span> ${items[i]} <button class="btn_remove">Remove</button></span></li> </br>`);
    }
}


let btnRemoves = document.getElementsByClassName("btn_remove");
for (let i = 0; i < btnRemoves.length; i++) {
    let btn_clicked = btnRemoves[i];
    btn_clicked.addEventListener('click', () => {
        console.log("remove");
    });

}


function insertItem() {
    let newI = document.getElementById("newItem").value;
    items.push(newI);
    item.insertAdjacentHTML('beforeend', `<li><span> ${newI} <button class="btn_remove" >Remove</button></span></li> </br>`);
}

function resetInput() {
    document.getElementById("newItem").value = " ";
}

function onBtnAdd() {
    console.log('ADD on clickkk');
    insertItem();
    resetInput();

}
console.log(items);




showList();