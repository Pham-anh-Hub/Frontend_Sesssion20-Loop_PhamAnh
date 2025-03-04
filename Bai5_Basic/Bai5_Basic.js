let a = prompt(`Nhập vào a`);
let b = prompt(`Nhập vào số mũ b`);
let result = 1;
if(Number.isNaN){
    alert(`Số liệu nhập vào không hợp lệ`)
}else{
    for(let i = 0; i<b; i++){
        result *= a;
    }
    console.log(`Lũy thừa ${a} mũ ${b} là: ${result}`);
}