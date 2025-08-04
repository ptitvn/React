function checkElement (arr, value){
    if(!Array.isArray(arr)){
        return `Khong phai là mảng`
    }
    arr.includes(value)? console.log(true)  : console.log(false);
    
}
let arr = [1,2,3,4,5];
let value = 3;
console.log(checkElement(arr,value));
arr = [1,2,3,4,5];
value = 6;
console.log( checkElement(arr,value));