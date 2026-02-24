const numOfOrder = 5;
let totalPrice = 0;

for (let i = 0; i <= numOfOrder; i++) {
    let price = Math.floor(Math.random() * 5000000);

    if (price < 1000000) {
        price = 1000000;
    }
        totalPrice += price;
    
    console.log(`Đơn hàng ${i}: ${price} VND`); 
}
console.log(`Tổng tiền phải trả: ${totalPrice} VND`);   

