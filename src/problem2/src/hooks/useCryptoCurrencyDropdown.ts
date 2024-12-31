import { CryptoCurrencyPrice } from "@/services";
import { useEffect, useState } from "react";

export const useCryptoCurrencyDropdown = (
  value?: CryptoCurrencyPrice | null,
) => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<CryptoCurrencyPrice | null>({
      currency: "",
      price: 0,
      date: "",
      id: "",
    });

  useEffect(() => {
    if (value !== undefined) setSelectedCurrency(value);
  }, [value]);

  return { selectedCurrency, setSelectedCurrency };
};
