import { CryptoCurrencyPrice } from "@/services";
import CryptoCurrencyDropDown from "../CryptoCurrencyDropDown/CryptoCurrencyDropDown";
import { Input } from "../ui/input";
import { currencyFormatter } from "@/utils/currency-formatter";

export const CurrencyInput = ({
  label,
  currency,
  value,
  onValueChange,
  onCurrencyChange,
  data,
  isLoading,
  disabledMenuItemById,
  disabled,
}: {
  label: string;
  currency: CryptoCurrencyPrice | null;
  value: number;
  onValueChange: (value: number) => void;
  onCurrencyChange: (currency: CryptoCurrencyPrice | null) => void;
  data: CryptoCurrencyPrice[] | undefined;
  isLoading: boolean;
  disabledMenuItemById?: string;
  disabled: boolean;
}) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f5f5f5] p-4 dark:bg-muted">
      <p className="text-lg font-semibold">{label}</p>
      <div className="relative flex w-full flex-col gap-2 sm:flex-row sm:gap-0">
        <div className="z-10 sm:absolute sm:left-1 sm:top-1">
          <CryptoCurrencyDropDown
            onMenuChange={onCurrencyChange}
            value={currency}
            data={data}
            isLoading={isLoading}
            disabledMenuItemById={disabledMenuItemById}
          />
        </div>
        <Input
          min={1}
          type="number"
          dir="rtl"
          className="w-full bg-background shadow-md"
          value={value}
          onChange={(e) => onValueChange(Number(e.target.value))}
          disabled={disabled}
        />
      </div>
      <p className="mr-2 self-end font-semibold text-[#acadb1]">
        {`~${currencyFormatter(value * (currency?.price || 0))}`}
      </p>
    </div>
  );
};
