import React, { useState } from "react";
import { Button } from "../ui/button";
import { MdSwapHoriz } from "react-icons/md";
import { useGetCryptoCurrencyPrices } from "@/services";
import { CurrencyInput } from "./CryptoCurrencyInput";
import { useCurrencySwapper } from "@/hooks";
import { useToast } from "@/hooks/use-toast";
import { useLocalStorage } from "usehooks-ts";
import { TransactionsType } from "../transactions/columns";
import { createTransaction } from "@/utils/create-transaction";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import TableSwitcher from "./TableSwitcher";

export const SwapperContainer = () => {
  const { data, isLoading } = useGetCryptoCurrencyPrices();
  const { toast } = useToast();
  const [isSwapping, setIsSwapping] = useState(false);
  const [transactions, setTransactions] = useLocalStorage<TransactionsType[]>(
    "transactions",
    [],
  );

  const {
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
  } = useCurrencySwapper();

  return (
    <div className="my-10 flex w-full flex-col items-start justify-center px-4">
      <div className="w-full rounded-lg bg-[#f2f2f2] p-1 dark:bg-accent/40">
        <div className="flex w-full flex-col gap-4 rounded-md border bg-background px-2 py-4 shadow-sm">
          <p className="px-4 text-xl font-bold">Currency Swap</p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <CurrencyInput
              label="From"
              currency={fromCurrency}
              value={fromValue}
              onValueChange={(value) => {
                const sanitizedValue = Math.max(value, 1);
                setFromValue(sanitizedValue);
                setToValue(calculateToValue(sanitizedValue));
              }}
              onCurrencyChange={setFromCurrency}
              data={data}
              isLoading={isLoading}
              disabledMenuItemById={toCurrency?.id}
              disabled={!fromCurrency}
            />
            <div>
              <Button
                onClick={handleSwap}
                size="icon"
                aria-label="Swap Currencies"
              >
                <MdSwapHoriz className="rotate-90 md:rotate-0" />
              </Button>
            </div>
            <CurrencyInput
              label="To"
              currency={toCurrency}
              value={toValue}
              onValueChange={(value) => {
                const sanitizedValue = Math.max(value, 1);
                setToValue(sanitizedValue);
                setFromValue(calculateFromValue(sanitizedValue));
              }}
              onCurrencyChange={setToCurrency}
              data={data}
              isLoading={isLoading}
              disabledMenuItemById={fromCurrency?.id}
              disabled={!toCurrency}
            />
          </div>
          <div className="flex w-full flex-col gap-4 px-4">
            <ExchangeRateDisplay
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              calculateToValue={calculateToValue}
            />
            <Button
              disabled={
                !fromCurrency ||
                !toCurrency ||
                fromValue <= 0 ||
                toValue <= 0 ||
                isSwapping
              }
              size={"lg"}
              className="w-full text-lg font-bold"
              isLoading={isSwapping}
              onClick={() => {
                setIsSwapping(true);
                setTimeout(
                  () => {
                    const isFailed = Math.random() > 0.5;

                    const transaction = createTransaction({
                      fromCurrency,
                      toCurrency,
                      fromValue,
                      toValue,
                    });

                    if (isFailed) {
                      toast({
                        title: "Swap Failed",
                        description: "Failed to swap the currencies",
                        duration: 5000,
                        variant: "destructive",
                      });
                      setIsSwapping(false);
                      setTransactions([
                        ...transactions,
                        {
                          ...transaction,
                          state: "failed",
                        },
                      ]);
                      return;
                    }
                    toast({
                      title: "Swapped Successfully",
                      description:
                        "You have successfully swapped the currencies",
                      duration: 5000,
                    });
                    setIsSwapping(false);
                    setFromCurrency(null);
                    setToCurrency(null);
                    setFromValue(1);
                    setToValue(0);
                    setTransactions([
                      ...transactions,
                      {
                        ...transaction,
                        state: "success",
                      },
                    ]);
                  },
                  Math.random() * 2000 + 1000,
                );
              }}
            >
              Swap
            </Button>
          </div>
        </div>
      </div>
      <TableSwitcher />
    </div>
  );
};

export default SwapperContainer;
