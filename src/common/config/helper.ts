
const formatCurrency = (value: number) => {
  if (value >= 10000000) {
    return `₹ ${(value / 10000000).toFixed(2)} Cr`;
  } else if (value >= 100000) {
    return `₹ ${(value / 100000).toFixed(2)} Lakh`;
  }
  return `₹ ${value?.toLocaleString("en-IN")}`;
};

export { formatCurrency };