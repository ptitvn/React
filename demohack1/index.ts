/*Xây dựng một ứng dụng để Quản lý hệ thống thư viện với các tính năng sau:
Quản lý danh sách thành viên (độc giả).
Quản lý kho tài liệu với nhiều loại khác nhau (Sách, Tạp chí).
Quản lý việc mượn/trả tài liệu, tính toán phí phạt nếu trả muộn.
Xây dựng một hàm tìm kiếm chung (generic) để có thể tái sử dụng cho việc tìm kiếm thành viên hoặc tài liệu theo mã định danh.
Sử dụng hiệu quả các phương thức của mảng trong JavaScript/TypeScript như map, reduce, filter, find, và findIndex để xử lý dữ liệu.
Cấu trúc dữ liệu tham khảo
1. 1. Lớp Member (Thành viên/Độc giả):
Thuộc tính:
memberId: Mã định danh thành viên (số nguyên, tự động tăng).
name: Tên thành viên (chuỗi).
contact: Thông tin liên hệ (chuỗi, có thể là email hoặc SĐT).
borrowedItems: Danh sách các tài liệu đã mượn (LibraryItem[]).
Phương thức:
getDetails(): Trả về chuỗi thông tin chi tiết của thành viên.
2. Lớp LibraryItem (Tài liệu thư viện - Abstract Class):
Thuộc tính:
id: Mã định danh tài liệu (số nguyên, tự động tăng).
title: Tiêu đề tài liệu (chuỗi).
isAvailable: Trạng thái (true nếu có sẵn, false nếu đã được mượn).
Phương thức:
borrowItem(): Đánh dấu tài liệu đã được mượn (isAvailable = false).
returnItem(): Đánh dấu tài liệu đã được trả (isAvailable = true).
calculateLateFee(daysOverdue: number): number: (Abstract) Tính toán phí trả muộn dựa trên số ngày quá hạn.
getLoanPeriod(): number: (Abstract) Trả về số ngày mượn tiêu chuẩn cho loại tài liệu này.
getItemType(): string: (Abstract) Trả về loại tài liệu (ví dụ: "Sách", "Tạp chí").
3. Các lớp con (kế thừa) của LibraryItem:
Book:
Thuộc tính bổ sung: author (tác giả - chuỗi).
Thời gian mượn tiêu chuẩn: 30 ngày.
Phí phạt trả muộn: 10,000 VND/ngày.
Magazine:
Thuộc tính bổ sung: issueNumber (số kỳ phát hành - số nguyên).
Thời gian mượn tiêu chuẩn: 7 ngày.
Phí phạt trả muộn: 5,000 VND/ngày.
4. Lớp Loan (Lượt mượn):
Thuộc tính:
loanId: Mã lượt mượn (số nguyên, tự động tăng).
member: Thành viên mượn (Member).
item: Tài liệu được mượn (LibraryItem).
dueDate: Ngày hết hạn trả (Date).
isReturned: Trạng thái đã trả (boolean).
Phương thức:
getDetails(): Trả về thông tin chi tiết của lượt mượn.
5. Lớp Library (Quản lý thư viện):
Thuộc tính:
items: LibraryItem[]: Danh sách tất cả tài liệu.
members: Member[]: Danh sách tất cả thành viên.
loans: Loan[]: Danh sách các lượt mượn.
Phương thức:
addItem(item: LibraryItem): void: Thêm một tài liệu mới vào kho.
addMember(name: string, contact: string): Member: Thêm một thành viên mới.
borrowItem(memberId: number, itemId: number): Loan | null: Tạo một lượt mượn tài liệu.
returnItem(itemId: number): number: Xử lý việc trả tài liệu và trả về phí phạt (nếu có).
listAvailableItems(): void: Hiển thị danh sách các tài liệu đang có sẵn (sử dụng filter).
listMemberLoans(memberId: number): void: Hiển thị các tài liệu một thành viên đang mượn (sử dụng filter).
calculateTotalLateFees(): number: Tính tổng phí phạt thu được từ tất cả các lượt mượn (sử dụng reduce).
getItemTypeCount(): void: Đếm và hiển thị số lượng của từng loại tài liệu (sử dụng reduce hoặc map).
updateItemTitle(itemId: number, newTitle: string): void: Cập nhật tiêu đề của một tài liệu (sử dụng findIndex).
findEntityById<T extends { id: number } | { memberId: number }>(collection: T[], id: number): T | undefined: (Yêu cầu Generic) Một phương thức chung để tìm một đối tượng bất kỳ (Item, Member) trong một danh sách dựa vào mã định danh.
Menu Chức Năng & Thang Điểm Chi Tiết
Thêm thành viên mới. (10đ)
Thêm tài liệu mới (cho chọn loại: Sách, Tạp chí). (10đ)
Mượn tài liệu (chọn thành viên, chọn tài liệu). (10đ)
Trả tài liệu (hiển thị phí phạt nếu có). (10đ)
Hiển thị danh sách tài liệu có sẵn (sử dụng filter). (10đ)
Hiển thị danh sách tài liệu đang mượn của một thành viên (sử dụng filter). (10đ)
Tính và hiển thị tổng phí phạt đã thu (sử dụng reduce). (10đ)
Thống kê số lượng từng loại tài liệu (sử dụng reduce hoặc map). (10đ)
Cập nhật tiêu đề một tài liệu (sử dụng findIndex). (5đ)
Tìm kiếm thành viên hoặc tài liệu theo ID (sử dụng hàm generic đã tạo). (10đ)
Thoát chương trình. (5đ)
Lưu ý: Chỉ tính điểm khi chức năng phải thực hiện đúng theo yêu cầu
 

 */
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
class Library {
  private items: LibraryItem[] = [];
  private members: Member[] = [];
  private loans: Loan[] = [];
  // Các phương thức khác của lớp Library
}
class Member {
  private id: number;
  private name: string;
  private contact: string;

  constructor(id: number, name: string, contact: string) {
    this.id = id;
    this.name = name;
    this.contact = contact;
  }

  // Các phương thức khác của lớp Member
}
class LibraryItem {
  protected id: number;
  protected title: string;
  protected isAvailable: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.isAvailable = true;
  }

  borrowItem(): void {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else {
      throw new Error("Item is not available for borrowing.");
    }
  }

  returnItem(): void {
    this.isAvailable = true;
  }

  // Các phương thức khác của lớp LibraryItem
}
class Book extends LibraryItem {
  private author: string;
  private genre: string;

  constructor(id: number, title: string, author: string, genre: string) {
    super(id, title);
    this.author = author;
    this.genre = genre;
  }

  // Các phương thức khác của lớp Book
}

class Magazine extends LibraryItem {
  private issueNumber: number;
  private publicationDate: Date;

  constructor(id: number, title: string, issueNumber: number, publicationDate: Date) {
    super(id, title);
    this.issueNumber = issueNumber;
    this.publicationDate = publicationDate;
  }

  // Các phương thức khác của lớp Magazine
}
class Newspaper extends LibraryItem {
  private issueDate: Date;

  constructor(id: number, title: string, issueDate: Date) {
    super(id, title);
    this.issueDate = issueDate;
  }

  // Các phương thức khác của lớp Newspaper
}
class Loan {
  private member: Member;
  private item: LibraryItem;
  private loanDate: Date;
  private returnDate: Date | null;

  constructor(member: Member, item: LibraryItem, loanDate: Date) {
    this.member = member;
    this.item = item;
    this.loanDate = loanDate;
    this.returnDate = null;
  }

  // Các phương thức khác của lớp Loan
}
// class Library {
//   private items: LibraryItem[] = [];
//   private members: Member[] = [];
//   private loans: Loan[] = [];
//   // Các phương thức khác của lớp Library
  
// }