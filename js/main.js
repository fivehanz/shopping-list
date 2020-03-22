/*** 
 * forked from: https://www.youtube.com/watch?v=h8SDHa_wGlU 
 * @date Mar 22 2020 
 * ***/

const itemToAdd = document.getElementById("itemToAdd");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("list");

class Item {

    constructor(itemName) {
        this.name = itemName;

        this.create();
    }

    create() {
        // <div class="list-item">
        //     <input type="text" value="Butter" name="" id="" class="item-name" disabled />
        //     <div class="item-actions">
        //         <button class="update">Update</button>
        //         <button class="remove">Remove</button>
        //     </div>
        // </div>

        let listItem = document.createElement("div");
        listItem.classList.add("list-item");

        let input = document.createElement("input");
        input.classList.add("item-name");
        input.type = "text";
        input.value = this.name;
        input.disabled = true;

        let actions = document.createElement("div");
        actions.classList.add("item-actions");

        let updatebutton = document.createElement("button");
        updatebutton.classList.add("update");
        updatebutton.innerText = "Update";
        updatebutton.addEventListener("click", () => this.update(input));

        let removebutton = document.createElement("button");
        removebutton.classList.add("remove");
        removebutton.innerText = "Remove";
        removebutton.addEventListener("click", () => this.remove(listItem));

        actions.appendChild(updatebutton);
        actions.appendChild(removebutton);
        listItem.appendChild(input);
        listItem.appendChild(actions);

        itemList.appendChild(listItem);
    }

    update(input) {
        input.disabled = !input.disabled;
    }

    remove(listItem) {
        // go up and delete down/child
        listItem.parentNode.removeChild(listItem);
    }
}

addButton.addEventListener("click", () => newItem());

function newItem() {
    if (itemToAdd.value != "") {
        // Add Item
        new Item(itemToAdd.value);
        // Clear itemToAdd textbox
        itemToAdd.value = "";
    }
}