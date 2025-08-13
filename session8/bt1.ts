enum weekDays {
    MONDAY = "Thứ Hai",
    TUESDAY = "Thứ Ba",
    WEDNESDAY = "Thứ Tư",
    THURSDAY = "Thứ Năm",
    FRIDAY = "Thứ Sáu",
    SATURDAY = "Thứ Bảy",
    SUNDAY = "Chủ Nhật"
}

for (const day of Object.values(weekDays)) {
    console.log(day);
}