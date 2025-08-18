"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    constructor(initialData) {
        this.data = [];
        if (initialData) {
            this.data = [...initialData];
        }
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return [...this.data]; // Trả về bản sao để tránh thay đổi trực tiếp
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
    }
}
const numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(0);
console.log(numberStore.getAll());
const userStore = new DataStore();
userStore.add({ id: 1, name: "Alice" });
userStore.add({ id: 2, name: "Bob" });
console.log(userStore.getAll());
//# sourceMappingURL=bt6.js.map