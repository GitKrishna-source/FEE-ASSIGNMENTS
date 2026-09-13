// function placeOrder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("🛒 Order Placed");
//         }, 1000);
//     });
// }

// function makePayment() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("💳 Payment Successful");
//         }, 2000);
//     });
// }

function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🛒 Order Placed");
        }, 1000);
    });
}

function makePayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("💳 Payment Successful");
        }, 2000);
    });
}

function prepareFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("👨‍🍳 Food Prepared");
        }, 1500);
    });
}





// function sendEmail() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("📧 Email Sent");
//         }, 1000);
//     });
// }

// placeOrder()
//     .then(result => {
//         console.log(result);
//         return makePayment();
//     })
//     .then(result => {
//         console.log(result);
//         return sendEmail();
//     })
//     .then(result => {
//         console.log(result);
//         console.log("🎉 Order Completed");
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// function greet(){
//     return ("Gazi",25);
// }
// console.log(greet());

// async function processOrder(){
//     let placeOrderresult = placeOrder();
//     console.log(placeOrderresult);
// }
// processOrder();

async function orderFood(){
    try{
        const order = await placeOrder();
        console.log(order);

        const payment = await makePayment();
        console.log(payment);
    }
}