function formatDate(date) {
    if (!(date instanceof Date)) {
        return 'Đối số phải là một đối tượng Date.';
    }
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}
export default formatDate;
