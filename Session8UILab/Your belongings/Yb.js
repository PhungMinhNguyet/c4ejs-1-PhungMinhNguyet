let items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);

let item = document.getElementById("list_items");
console.log(item);

let btn = document.getElementById('add');
btn.addEventListener('click', onBtnAdd);


function showList() {
    for (let i = 0; i < items.length; i++) {

        item.insertAdjacentHTML('beforeend', `<li><span> ${items[i]} <button onclick="onBtnRemove()">Remove</button></span></li> </br>`);
    }
}

function insertItem() {
    let newI = document.getElementById("newItem").value;
    items.push(newI);
    item.insertAdjacentHTML('beforeend', `<li><span> ${newI} <button onclick="onBtnRemove()">Remove</button></span></li> </br>`);
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

function onBtnRemove(i) {
    console.log("removed");
    for (let i = 0; i < items; i++) {
        console.log("Item :", i);
    }
}


showList();