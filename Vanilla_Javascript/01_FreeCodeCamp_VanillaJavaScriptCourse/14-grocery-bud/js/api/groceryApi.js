import * as groceryDB from "../local-storage/groceryLocalStorage.js";

export function indexApi() {
    return groceryDB.getAllItems();
}

export function showApi(id) {
    return groceryDB.getItem(id);
}

export function createApi(data) {
    return groceryDB.addItem(data);
}

export function updateApi(id, data) {
    return groceryDB.updateItem(id, data);
}

export function deleteApi(id) {
    return groceryDB.deleteItem(id);
}

export function clearAllApi() {
    return groceryDB.removeAllItems();
}