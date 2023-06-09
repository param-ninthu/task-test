// const sales = [
//     { amount: 12500, quantity: 24 },
//     { amount: 1500, quantity: 10 },
//     { amount: 45000, quantity: 10 },
//   ];

// var salesTotal = sales.map(function (sale) {
//   return {
//     amount: sale.amount,
//     quantity: sale.quantity,
//     total: sale.amount * sale.quantity,
//   };
// });

// salesTotal.sort(function (a, b) {
//   return a.total - b.total;
// });

// for (var i = salesTotal.length - 1; i >= 0; i--) {
//   console.log(salesTotal[i]);
// }

import sales from "./sales/sales";

sortSalesArray = (salesArray) => {
  var salesTotal = salesArray.map(function (sale) {
    return {
      amount: sale.amount,
      quantity: sale.quantity,
      Total: sale.amount * sale.quantity,
    };
  });

  salesTotal.sort(function (current, next) {
    return current.Total - next.Total;
  });

  return salesTotal;
};

var updatedSalesArray = sortSalesArray(sales);

for (var i = updatedSalesArray.length - 1; i >= 0; i--) {
  console.log(updatedSalesArray[i]);
}
