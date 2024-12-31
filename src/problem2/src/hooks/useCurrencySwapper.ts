import { CryptoCurrencyPrice } from "@/services";
import { useCallback, useEffect, useState } from "react";

export const useCurrencySwapper = () => {
  const [fromCurrency, setFromCurrency] = useState<CryptoCurrencyPrice | null>(
    null,
  );
  const [toCurrency, setToCurrency] = useState<CryptoCurrencyPrice | null>(
    null,
  );
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(0);

  const calculateToValue = useCallback(
    (value: number) =>
      (value * (fromCurrency?.price || 0)) / (toCurrency?.price || 0),
    [fromCurrency, toCurrency],
  );

  const calculateFromValue = useCallback(
    (value: number) =>
      (value * (toCurrency?.price || 0)) / (fromCurrency?.price || 0),
    [fromCurrency, toCurrency],
  );

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      setToValue(calculateToValue(fromValue));
    }
  }, [toCurrency]);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      setFromValue(calculateFromValue(toValue));
    }
  }, [fromCurrency]);

  const handleSwap = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromValue(toValue);
    setToValue(fromValue);
  }, [fromCurrency, toCurrency, fromValue, toValue]);

  return {
    fromCurrency,
    toCurrency,
    fromValue,
    toValue,
    setFromCurrency,
    setToCurrency,
    setFromValue,
    setToValue,
    calculateToValue,
    calculateFromValue,
    handleSwap,
  };
};
