class DataStore<T> {
  private data: T[] = [];

  constructor(initialData?: T[]) {
    if (initialData) {
      this.data = [...initialData];
    }
  }

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return [...this.data]; // Trả về bản sao để tránh thay đổi trực tiếp
  }

  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }
}
const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll()); 
numberStore.remove(0);
console.log(numberStore.getAll()); 
type User = { id: number; name: string };

const userStore = new DataStore<User>();
userStore.add({ id: 1, name: "Alice" });
userStore.add({ id: 2, name: "Bob" });

console.log(userStore.getAll());
