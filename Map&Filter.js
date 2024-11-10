let arr = [20,29,34,19];
let a = arr.map((val , index) => {
    if(index === 2 ){
        console.log(`Element at 2 index is ${val}`);
    }
    if(index === 3){
        console.log(`Element at 3 index is ${val}`);
    }
    return val + index;
});

console.log(a);
let b = arr.filter((val) => {
    return val < 30;
})
console.log(b);