function checkElement (arr, value){
    if(!Array.isArray(arr)){
        return `Khong phai là mảng`
    }
   console.log(arr.includes(value));
}
let arr = [1,2,3,4,5];
let value = 3;
checkElement(arr,value);
arr = [1,2,3,4,5];
value = 6;
checkElement(arr,value);