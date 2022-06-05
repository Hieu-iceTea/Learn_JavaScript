import { Alert } from "./components/Alert.js";
import { GroceryForm } from "./components/GroceryForm.js";
import { GroceryList } from "./components/GroceryList.js";
import * as groceryApi from "./api/groceryApi.js";

var app = document.querySelector('#app');

let alert = new Alert();
let groceryForm = new GroceryForm({ components: { formAlert: alert }, callBacks: { submit: submit } });
let groceryList = new GroceryList({ callBacks: { editClick: editClick, deleteClick: deleteClick, clearAllClick: clearAllClick }, data: { id: 123456, title: 'haha' } });

var data;
var isEdit;
var dataEdit;

main() // call itself to execute the application

function main() {
    init();
    fetchData();
}

function init() {
    app.insertBefore(groceryForm.element, app.firstChild)
    app.appendChild(groceryList.element)
}

function fetchData() {
    groceryList.clearList();

    let groceries = groceryApi.indexApi();

    if (groceries.length <= 0) {
        groceryList.show = false;
        return;
    }

    groceryList.show = true;

    groceries.forEach(grocery => {
        groceryList.addToList(grocery);
    });
}

function submit(e) {
    if (isEdit) {
        submitEdit(e);
    } else {
        submitCreate(e);
    }

    fetchData();
    resetForm();
}

function editClick(e, id) {
    let data = groceryApi.showApi(id);
    pushFormEdit(data);
}

function deleteClick(e, id) {
    if (!confirm('Are you sure delete this item?')) return;
    groceryApi.deleteApi(id);
    alert.alertDanger('Deleted !')
    fetchData();
}

function clearAllClick() {
    if (!confirm('Are you sure delete all item?')) return;
    groceryList.clearList();
    groceryApi.clearAllApi()
}

function resetForm() {
    isEdit = false;
    dataEdit = null;
    groceryForm.inputGrocery = '';
    groceryForm.submitBtnText = 'Submit';
}

function pushFormEdit(data) {
    isEdit = true;
    dataEdit = data;
    groceryForm.inputGrocery = data.title;
    groceryForm.submitBtnText = 'Update';
}

function submitCreate(e) {
    data = {
        id: new Date().getTime().toString(),
        title: groceryForm.inputGrocery,
    }

    groceryApi.createApi(data);

    alert.alertSuccess('Create !')
}

function submitEdit(e) {
    data = {
        id: dataEdit.id,
        title: groceryForm.inputGrocery,
    }

    groceryApi.updateApi(dataEdit.id, data)

    alert.alertSuccess('Update !')
}