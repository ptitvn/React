interface Category {
  id: string;
  name: string;
}
interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  discount?: number;
}
let listProduct: Product[] = [
  {
    id: "P001",
    name: "Áo sơ mi",
    price: 300000,
    category: { id: "C001", name: "Thời trang nam" },
    discount: 20 
  },
  {
    id: "P002",
    name: "Quần jeans",
    price: 400000,
    category: { id: "C001", name: "Thời trang nam" }
  },
  {
    id: "P003",
    name: "Giày thể thao",
    price: 600000,
    category: { id: "C002", name: "Giày dép" },
    discount: 10 
  }
];
function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price - (product.price * product.discount / 100);
  }
  return product.price;
}
function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);
  console.log(`- Tên: ${product.name}`);
  console.log(`- Giá gốc: ${product.price.toLocaleString()} VND`);
  console.log(`- Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
  console.log(`- Danh mục: ${product.category.name}`);
}
listProduct.forEach(product => {
  printProductInfo(product);
});
let exampleProduct: Product = {
  id: "P004",
  name: "Áo khoác",
  price: 500000,
  category: { id: "C001", name: "Thời trang nam" },
  discount: 15 
};
console.log("\nThông tin sản phẩm ví dụ:");
printProductInfo(exampleProduct);