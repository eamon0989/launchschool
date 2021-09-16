function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    paid: 0,

    total: function() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.paid += payment.total();
    },

    addPayments(array) {
      array.forEach(this.addPayment, this);

      // let paid = array.reduce((acc, obj) => acc + obj.total(), 0);
      // this.paid += paid;
    },

    amountDue() {
      return this.total() - this.paid;
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

invoiceTotal(invoices); // 31000

function createPayment(services = {}) {
  return {
    phonePaid: services.phone || 0,
    internetPaid: services.internet || 0,
    amount: services.amount || 0,

    total() {
      return this.amount || this.phonePaid + this.internetPaid;
    }
  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

paymentTotal(payments);      // => 24000

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });


invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);

console.log(invoice.amountDue());       // this should return 0