import { CryptoCurrencyPrice } from "@/services";
import { currencyFormatter } from "@/utils/currency-formatter";
import React from "react";

interface ExchangeRateDisplayProps {
  fromCurrency: CryptoCurrencyPrice | null;
  toCurrency: CryptoCurrencyPrice | null;
  calculateToValue: (value: number) => number;
}

export const ExchangeRateDisplay = ({
  fromCurrency,
  toCurrency,
  calculateToValue,
}: ExchangeRateDisplayProps) => {
  if (!fromCurrency || !toCurrency) return null;

  return (
    <div className="flex flex-col items-start justify-between text-lg font-semibold sm:flex-row sm:items-center">
      <p className="font-semibold text-[#acadb1]">Exchange Rate</p>
      <p>
        {`1 ${fromCurrency?.currency} = ${calculateToValue(1)} ${
          toCurrency?.currency
        }`}{" "}
        <span className="font-bold text-[#acadb1]">{`(~${currencyFormatter(
          fromCurrency?.price ?? 0,
        )})`}</span>
      </p>
    </div>
  );
};

export default ExchangeRateDisplay;
