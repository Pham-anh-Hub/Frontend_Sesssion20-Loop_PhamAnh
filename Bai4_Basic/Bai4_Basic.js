const string = prompt(`Nhập vào một chuỗi bất kỳ`);
let index = prompt(`Nhập vào ký tự cần tìm kiếm`)
let check = 0;
for(let i = 0; i < string.length; i++){
    if(index === string[i]){
        check = 1;
        break;
    }
}
if(check === 1){
    alert(`Tồn tại từ cần tìm kiếm`)
}else{
    alert(`Không tồn tại từ cần tìm kiếm`)
}