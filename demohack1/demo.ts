// demo.ts
const readline = require("readline");

// ======= HÀM NHẬP LIỆU CHO NODE.JS =======
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function ask(question: string): Promise<string> {
  return new Promise<string>((resolve) =>
    rl.question(question, (answer: string) => resolve(answer))
  );
}

// ======= CÁC LỚP SẢN PHẨM, KHÁCH HÀNG, ĐƠN HÀNG =======
// định nghĩa các lớp
abstract class Product {
  static nextId = 1;
  id: number;
  name: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.id = Product.nextId++;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  sell(quantity: number): void {
    if (this.stock >= quantity) this.stock -= quantity;
  }

  restock(quantity: number): void {
    this.stock += quantity;
  }

  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}

// lớp sản phẩm điện tử
class ElectronicsProduct extends Product {
  warrantyPeriod: number;
  constructor(
    name: string,
    price: number,
    stock: number,
    warrantyPeriod: number
  ) {
    super(name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }
  getProductInfo(): string {
    return `${this.name} - Bảo hành: ${this.warrantyPeriod} tháng`;
  }
  getShippingCost(): number {
    return 50000;
  }
  getCategory(): string {
    return "Đồ điện tử";
  }
}

// lớp sản phẩm quần áo
class ClothingProduct extends Product {
  size: string;
  color: string;
  constructor(
    name: string,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(name, price, stock);
    this.size = size;
    this.color = color;
  }
  getProductInfo(): string {
    return `${this.name} - Size: ${this.size}, Màu: ${this.color}`;
  }
  getShippingCost(): number {
    return 25000;
  }
  getCategory(): string {
    return "Quần áo";
  }
}

// lớp khách hàng
class Customer {
  static nextId = 1;
  id: number;
  name: string;
  email: string;
  shippingAddress: string;
  constructor(name: string, email: string, address: string) {
    this.id = Customer.nextId++;
    this.name = name;
    this.email = email;
    this.shippingAddress = address;
  }
  getDetails(): string {
    return `Khách hàng #${this.id}: ${this.name}, Email: ${this.email}, Địa chỉ: ${this.shippingAddress}`;
  }
}

// lớp đơn hàng
class Order {
  static nextId = 1;
  orderId: number;
  customer: Customer;
  products: { product: Product; quantity: number }[];
  totalAmount: number;
  constructor(
    customer: Customer,
    products: { product: Product; quantity: number }[]
  ) {
    this.orderId = Order.nextId++;
    this.customer = customer;
    this.products = products;
    this.totalAmount = products.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
  getDetails(): string {
    const productDetails = this.products
      .map(
        (p) =>
          `- ${p.product.name} x${p.quantity} = ${
            p.product.price * p.quantity
          } VND`
      )
      .join("\n");
    return `Đơn hàng #${this.orderId} của ${this.customer.name}:\n${productDetails}\nTổng: ${this.totalAmount} VND`;
  }
}

// lớp cửa hàng
class Store {
  products: Product[] = [];
  customers: Customer[] = [];
  orders: Order[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addCustomer(name: string, email: string, address: string): void {
    this.customers.push(new Customer(name, email, address));
  }

  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    const customer = this.findEntityById(this.customers, customerId);
    if (!customer) return null;

    const orderItems: { product: Product; quantity: number }[] = [];
    for (const pq of productQuantities) {
      const product = this.findEntityById(this.products, pq.productId);
      if (!product || product.stock < pq.quantity) return null;
      product.sell(pq.quantity);
      orderItems.push({ product, quantity: pq.quantity });
    }
    const order = new Order(customer, orderItems);
    this.orders.push(order);
    return order;
  }

  cancelOrder(orderId: number): void {
    const index = this.orders.findIndex((o) => o.orderId === orderId);
    if (index !== -1) {
      const order = this.orders[index];
      if (order) {
        order.products.forEach((p) => p.product.restock(p.quantity));
      }
      this.orders.splice(index, 1);
    }
  }

  listAvailableProducts(): void {
    this.products
      .filter((p) => p.stock > 0)
      .forEach((p) => {
        console.log(`${p.name} - ${p.stock} cái`);
      });
  }

  listCustomerOrders(customerId: number): void {
    this.orders
      .filter((o) => o.customer.id === customerId)
      .forEach((o) => console.log(o.getDetails()));
  }

  calculateTotalRevenue(): number {
    return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
  }

  countProductsByCategory(): void {
    const count = this.products.reduce((acc, p) => {
      const cat = p.getCategory();
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    console.log(count);
  }

  updateProductStock(productId: number, newStock: number): void {
    const product = this.findEntityById(this.products, productId);
    if (product) product.stock = newStock;
  }

  findEntityById<T extends { id: number }>(
    collection: T[],
    id: number
  ): T | undefined {
    return collection.find((item) => item.id === id);
  }
}

// ======= MENU =======
async function runMenu(store: Store) {
  let choice = 0;
  do {
    console.log(`
      === MENU CHỨC NĂNG ===
      1. Thêm khách hàng mới
      2. Thêm sản phẩm mới
      3. Tạo đơn hàng mới
      4. Hủy đơn hàng
      5. Hiển thị sản phẩm còn hàng
      6. Hiển thị đơn hàng của khách
      7. Tính tổng doanh thu
      8. Thống kê sản phẩm theo danh mục
      9. Cập nhật tồn kho
      10. Tìm kiếm theo ID sản phẩm
      11. Xem thông tin chi tiết sản phẩm
      12. Thoát chương trình
    `);
    choice = Number(await ask("Chọn chức năng: "));

    switch (choice) {
      case 1:
        store.addCustomer(
          await ask("Nhập tên khách hàng: "),
          await ask("Nhập email khách hàng: "),
          await ask("Nhập địa chỉ khách hàng: ")
        );
        break;

      case 2:
        const type = await ask("Chọn loại sản phẩm (1: Điện tử, 2: Quần áo): ");
        const name = await ask("Tên sản phẩm: ");
        const price = Number(await ask("Giá: "));
        const stock = Number(await ask("Số lượng: "));
        if (type === "1") {
          const warranty = Number(await ask("Bảo hành (tháng): "));
          store.addProduct(
            new ElectronicsProduct(name, price, stock, warranty)
          );
        } else {
          const size = await ask("Size: ");
          const color = await ask("Màu: ");
          store.addProduct(
            new ClothingProduct(name, price, stock, size, color)
          );
        }
        break;

      case 3:
        const customerId = Number(await ask("Nhập ID khách hàng: "));
        const productQuantities: { productId: number; quantity: number }[] = [];
        while (true) {
          const pid = Number(await ask("Nhập ID sản phẩm: "));
          const qty = Number(await ask("Nhập số lượng: "));
          productQuantities.push({ productId: pid, quantity: qty });
          const more = await ask("Thêm sản phẩm khác? (y/n): ");
          if (more.toLowerCase() !== "y") break;
        }
        const order = store.createOrder(customerId, productQuantities);
        console.log(order ? order.getDetails() : "Không thể tạo đơn hàng.");
        break;

      case 4:
        store.cancelOrder(Number(await ask("Nhập ID đơn hàng: ")));
        break;

      case 5:
        store.listAvailableProducts();
        break;

      case 6:
        store.listCustomerOrders(Number(await ask("Nhập ID khách hàng: ")));
        break;

      case 7:
        console.log(`Tổng doanh thu: ${store.calculateTotalRevenue()} VND`);
        break;

      case 8:
        store.countProductsByCategory();
        break;

      case 9:
        store.updateProductStock(
          Number(await ask("Nhập ID sản phẩm: ")),
          Number(await ask("Số lượng tồn kho mới: "))
        );
        break;

      case 10:
        const found = store.findEntityById(
          store.products,
          Number(await ask("Nhập ID sản phẩm: "))
        );
        console.log(
          found ? found.getProductInfo() : "Không tìm thấy sản phẩm."
        );
        break;

      case 11:
        const detail = store.findEntityById(
          store.products,
          Number(await ask("Nhập ID sản phẩm: "))
        );
        console.log(
          detail ? detail.getProductInfo() : "Không tìm thấy sản phẩm."
        );
        break;

      case 12:
        console.log("Thoát chương trình");
        break;

      default:
        console.log("Lựa chọn không hợp lệ");
    }
  } while (choice !== 12);

  rl.close();
}

const store = new Store();
runMenu(store);
