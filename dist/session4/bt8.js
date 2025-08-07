"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}
function printOrder(order) {
    console.log(`Đơn hàng #${order.orderId}`);
    console.log(`- Khách hàng: ${order.customerName}`);
    console.log(`- Sản phẩm:`);
    order.items.forEach(item => {
        console.log(`  - ${item.product.name} × ${item.quantity} → ${item.product.price * item.quantity} VND`);
    });
    console.log(`- Tổng cộng: ${calculateOrderTotal(order)} VND`);
    if (order.note) {
        console.log(`- Ghi chú: ${order.note}`);
    }
}
let order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            product: { id: "P001", name: "Áo sơ mi", price: 250000 },
            quantity: 2
        },
        {
            product: { id: "P002", name: "Quần tây", price: 400000 },
            quantity: 1
        }
    ],
    note: "Giao sau 18h"
};
printOrder(order);
//# sourceMappingURL=bt8.js.map