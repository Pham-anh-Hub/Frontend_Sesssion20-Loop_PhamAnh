let number = prompt(`Nhập vào 1 số`);
let n = +(number.length);
let temp = 0;
if(Number.isNaN(number)){
    alert(`Vui lòng nhập số hợp lệ`)
}else{
   for (let i = 0; i < (n / 2); i++){
    if(number[i] == number[n-1]){
        n--;
        temp = 1;
    }else{
        console.log(`Số ${number} không phải số đối xứng`);
        temp = 0
        break;
    }
    }
    if(temp === 1){
        console.log(`Số ${number} là số đối xứng`);
    } 
}
