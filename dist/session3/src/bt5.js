"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "john";
let lastName = "doe";
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
    firstName = capitalizeFirstLetter(firstName);
}
if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
    lastName = capitalizeFirstLetter(lastName);
}
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
//# sourceMappingURL=bt5.js.map