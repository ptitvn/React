class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return [...this.data]; 
  }

  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }
}
const stringStore = new DataStore<string>();
stringStore.add("hello");
stringStore.add("world");
console.log(stringStore.getAll()); 
stringStore.remove(0);
console.log(stringStore.getAll()); 
type Product = { id: number; name: string };

const productStore = new DataStore<Product>();
productStore.add({ id: 1, name: "Laptop" });
productStore.add({ id: 2, name: "Phone" });

console.log(productStore.getAll());