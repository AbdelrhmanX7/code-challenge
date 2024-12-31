export const cryptoCurrencyValueHandler = (value: number): string => {
  if (value < 0.0001) {
    return value.toFixed(6);
  }

  return value.toFixed(3);
};
