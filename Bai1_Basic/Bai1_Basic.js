let n = +prompt(`Nhập số n`);
let sum = 0;
if(Number.isInteger(n) && n > 0){
    for(let i = 1 ; i<=n; i++){
        sum += i;
    }
    alert(`SUM = ${sum}`);
}else{
    alert(`Vui lòng nhập n nguyên dương`);
}
