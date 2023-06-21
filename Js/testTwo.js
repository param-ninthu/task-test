// Here we can see that I imported the sales files from the sales folder
// If you want to test this code with your sales data you can simply replace the sales file with your own file
// import sales from "./sales/sales";

// Also meantime I defined the sales array here for your convenience to run the code in the js compiler un comment the below commented array

const sales = [
  { amount: 12500, quantity: 24, test: 123 },
  { amount: 1500, quantity: 10 },
  { amount: 45000, quantity: 10 },
];

sortSalesArray = (salesArray, orderPreference) => {
  // We are defining a new array salesTotal to store the Total of each sales using the map function

  var salesTotal = salesArray.map(function (sale) {
    return {
      amount: sale.amount,
      quantity: sale.quantity,
      Total: sale.amount * sale.quantity,
      ...sale,
    };
  });

  if (orderPreference === "asc") {
    salesTotal.sort(function (current, next) {
      return current.Total - next.Total;
    });
  } else if (orderPreference === "dsc") {
    salesTotal.sort(function (current, next) {
      return next.Total - current.Total;
    });
  }

  // Using the sort function we are sorting the sales in asc order

  return salesTotal;
};

// We are assigning the sorted array to a new variable
var updatedSalesArray = sortSalesArray(sales, "dsc");

// Print the sorted array in the reverse order

console.log(updatedSalesArray);
