const KEY = 'grocery'

export function getAllItems() {
    return localStorage.getItem(KEY)
        ? JSON.parse(localStorage.getItem(KEY))
        : [];
}

export function getItem(id) {
    let items = getAllItems();

    items = items.filter(function (item) {
        if (item.id == id) {
            return item;
        }
    });

    return items[0];
}

export function addItem(data) {
    let items = getAllItems();

    items.push(data);

    saveAllItems(items);
}

export function updateItem(id, data) {
    let items = getAllItems();

    items = items.map(function (item) {
        if (item.id === id) {
            item = data;
        }
        return item;
    });

    saveAllItems(items);
}

export function deleteItem(id) {
    let items = getAllItems();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });

    saveAllItems(items);
}

export function removeAllItems() {
    return localStorage.removeItem(KEY);
}

function saveAllItems(items) {
    items = JSON.stringify(items)
    localStorage.setItem(KEY, items);
}