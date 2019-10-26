let items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);

let item = document.getElementById("list_items");
console.log(item);

let btn = document.getElementById('add');
btn.addEventListener('click', onBtnAdd);


function showList() {
    for (let i = 0; i < items.length; i++) {
        item.insertAdjacentHTML('beforeend', `<li><span> ${items[i]} <button class="btn_remove">Remove</button></span></li>`);
    }
}
showList();

function insertItem() {
    let newI = document.getElementById("newItem").value;
    items.push(newI);
    console.log("items = ", items);
    item.insertAdjacentHTML('beforeend', `<li><span> ${newI} <button class="btn_remove" >Remove</button></span></li>`);
    delete_btn()
}

function resetInput() {
    document.getElementById("newItem").value = " ";
}

function onBtnAdd() {
    console.log('ADD on clickkk');
    insertItem();
    resetInput();

}


function delete_btn() {
    let btnRemoves = document.getElementsByClassName("btn_remove");
    for (let i = 0; i < btnRemoves.length; i++) {
        let btn_clicked = btnRemoves[i];
        btn_clicked.addEventListener('click', () => {
            console.log("remove");
            console.log("item ", i);
            let span = btn_clicked.parentNode;
            let li = span.parentNode
            li.remove();
            console.log(items);
        });
    }
}
delete_btn()