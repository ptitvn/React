let firstName: string = "john";
let lastName: string = "doe";
function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
    firstName = capitalizeFirstLetter(firstName);
}
if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
    lastName = capitalizeFirstLetter(lastName);
}
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);
