let n = +prompt(`Nhập số n`);
let num = [];
if(Number.isInteger(n) && n > 0){
    for(let i = 1 ; i<=n; i++){
        if(i % 5 === 0){
            num.push(i)
        }
    }
}else{
    alert(`Vui lòng nhập n nguyên dương`);
}
console.log(`Các số chia hết cho 5 trong khoảng từ 1-${n} là :`);
for(let i = 0; i< num.length; i++){
    console.log(`${num[i]}`);
}
