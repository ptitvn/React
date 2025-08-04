function greetingWithWeather(name, weather) {
    if (typeof name !== 'string' || typeof weather !== 'string') {
        return 'Tên và thời tiết phải là chuỗi.';
    }

    switch (weather.toLowerCase()) {
        case 'sunny':
            return `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
        case 'rainy':
            return `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
        default:
            return `Chào ${name}! Hôm nay thời tiết không xác định.`;
    }
}
console.log(greetingWithWeather('Nguyễn An', 'sunny'));
console.log(greetingWithWeather('Lê Nam', 'rainy'));
console.log(greetingWithWeather('Trần Tâm', 'cloudy'));
