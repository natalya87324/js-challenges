function calculateTotalSalesWithTax(products, tax) {
  const taxPercent = tax / 100;
  const totalSales = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  let result = totalSales + totalSales * taxPercent;

  return result;
}

module.exports = calculateTotalSalesWithTax;
