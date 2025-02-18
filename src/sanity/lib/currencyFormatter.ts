export function currencyFormatter(amount: number, currencyCode: string = "USD") {
  try {
    return new Intl.NumberFormat("en-US", 
      { 
        style: 'currency', 
        currency: currencyCode.toUpperCase()
      }).format(amount);
  } catch (err) {
    console.error("Invalid currency code:", currencyCode, err);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  };
};