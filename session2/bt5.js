const phoneBooks = [];
function addContact(name, phone, email) {
    if (typeof name !== 'string' || typeof phone !== 'string' || typeof email !== 'string') {
        return 'Thông tin liên hệ phải là chuỗi.';
    }
    const contact = { name, phone, email };
    phoneBooks.push(contact);
}
function displayContact() {
    if (phoneBooks.length === 0) {
        console.log('Danh bạ rỗng.');
        return;
    }
    console.log('Danh bạ điện thoại:');
    phoneBooks.forEach((contact, index) => {
        console.log(`${index + 1}. Tên: ${contact.name}, Số Điện Thoại: ${contact.phone}, Email: ${contact.email}`);
    });
}
addContact('Nguyễn Văn A', '0123456789', 'nguyenvana@gmail.com');
addContact('Trần Văn B', '0987654321', 'tranvanb@gmail.com');
displayContact();