// //Yêu cầu 1
// const carts = [150000, 200000, 300000, 420000, 500000];
// let sum = +0;
// for(let i=0; i < carts.length; i++){
//             sum += carts[i];
    
// }
// console.log(`Tổng số tiền trong giỏ hàng là: ${sum}`);


// // Yêu cầu 2
// const payments = [150000, 200000, 300000, 420000, 100000];
// let total = +0;
// let i = 0;
// while(total < 1000000 && i<payments.length){
//     total += payments[i];
//     console.log(`Tổng tiên tiền tại vị trí thứ ${i+1} là: ${total}`);
//     i++;    
// }

// Yêu cầu 3
const password = "123456";
let checkPassword;
let temp = 0;
for(let i = 5; i >= 1; i--){
    checkPassword = prompt(`Vui lòng nhập vào mật khẩu`);
    if(checkPassword !== password){
        alert(`Sai mật khẩu!! Bạn còn ${i-1} lần thử `)
    }else{
        console.log(`Mật khẩu chính xác`);
        temp = 1;
        break;
    }
}
if(temp !== 1){
    console.log(`Tài khoản đã bị khóa !!!`);
}
