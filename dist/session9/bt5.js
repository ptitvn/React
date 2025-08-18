"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return [...this.data];
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
    }
}
const stringStore = new DataStore();
stringStore.add("hello");
stringStore.add("world");
console.log(stringStore.getAll());
stringStore.remove(0);
console.log(stringStore.getAll());
const productStore = new DataStore();
productStore.add({ id: 1, name: "Laptop" });
productStore.add({ id: 2, name: "Phone" });
console.log(productStore.getAll());
//# sourceMappingURL=bt5.js.map