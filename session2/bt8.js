function displayUserInfo(user) {
    const { name, age, location, contact = {}, job = {} } = user;
    const { city, country } = location;
    const { email = 'unknown', phone = 'unknown' } = contact;
    const { title = 'unknown', company = 'unknown' } = job;

    return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}
console.log(displayUserInfo({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } }));
console.log(displayUserInfo({ name: "John", age: 25, location: { city: "Hanoi", country: "Vietnam" }, contact: { email: "john@example.com", phone: "0123456789" }, job: { title: "Developer", company: "Tech Corp" } }));