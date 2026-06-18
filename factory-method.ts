// ✅ Sửa typo: Interface, thêm Union type cho tên payment
type PaymentName = 'momo' | 'vnpay';

interface PaymentInterface {
    pay(amount: number): void;
}

// ✅ Bỏ constructor rỗng thừa
class MomoPayment implements PaymentInterface {
    pay(amount: number): void {
        console.log(`Momo processed: ${amount}`);  // ✅ sửa "pocessed"
    }
}

class VnPayPayment implements PaymentInterface {
    pay(amount: number): void {
        console.log(`VNPay processed: ${amount}`);  // ✅ sửa "pocessed"
    }
}

// ✅ PaymentName thay vì string — TypeScript bắt lỗi lúc compile
function createPayment(paymentName: PaymentName): PaymentInterface {
    switch (paymentName) {
        case 'momo':  return new MomoPayment();
        case 'vnpay': return new VnPayPayment();
    }
}

const momo = createPayment('momo');
momo.pay(100);  // Momo processed: 100

const vnpay = createPayment('vnpay');
vnpay.pay(200); // VNPay processed: 200

// ✅ Lỗi compile ngay — không cần chạy mới biết
createPayment('stripe'); // Error: Argument of type '"stripe"' is not assignable
