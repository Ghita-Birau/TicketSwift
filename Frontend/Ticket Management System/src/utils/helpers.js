export const formatCurrency = (value, decimalDigits = 2) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  }).format(value);
