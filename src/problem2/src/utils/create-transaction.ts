import { CryptoCurrencyPrice } from "@/services";

export const createTransaction = ({
  fromCurrency,
  toCurrency,
  fromValue,
  toValue,
}: {
  fromCurrency: CryptoCurrencyPrice | null;
  toCurrency: CryptoCurrencyPrice | null;
  fromValue: number;
  toValue: number;
}) => ({
  fromCurrency: fromCurrency?.currency ?? "",
  toCurrency: toCurrency?.currency ?? "",
  fromValue,
  fromCurrencyPrice: fromValue * (fromCurrency?.price || 0),
  toValue,
  toCurrencyPrice: toValue * (toCurrency?.price || 0),
  date: new Date().toISOString(),
});
