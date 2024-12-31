import { cn } from "@/lib/utils";
import { getCryptoCurrencySvg } from "@/utils/crypto-currency-svgs";
import { currencyFormatter } from "@/utils/currency-formatter";
import { ColumnDef } from "@tanstack/react-table";
import { MdCheck, MdClose } from "react-icons/md";

export type TransactionsType = {
  fromCurrency: string;
  toCurrency: string;
  fromValue: number;
  fromCurrencyPrice: number;
  toValue: number;
  toCurrencyPrice: number;
  date: string;
  state: string;
};

export const columns: ColumnDef<TransactionsType>[] = [
  {
    accessorKey: "fromCurrency",
    header: "From Currency",
    cell: ({ row }) => {
      const fromCurrency = row.original.fromCurrency;

      return (
        <div className="flex items-center gap-2">
          <img
            src={getCryptoCurrencySvg(fromCurrency)}
            width={30}
            height={30}
            alt={fromCurrency}
          />
          <span className="text-lg font-medium">{fromCurrency}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "fromValue",
    header: "From Value",
    cell: ({ row }) => {
      const fromValue = row.original.fromValue;
      const fromPrice = row.original.fromCurrencyPrice;
      console.log(row.original);
      return (
        <div className="flex flex-col gap-1">
          <span className="font-bold text-primary">{fromValue}</span>
          <span className="text-sm text-[#c8c8c8]">
            (~{currencyFormatter(fromPrice)})
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "fromCurrencyPrice",
    header: "From Currency Price",
  },
  {
    accessorKey: "toCurrency",
    header: "To Currency",
    cell: ({ row }) => {
      const toCurrency = row.original.toCurrency;

      return (
        <div className="flex items-center gap-2">
          <img
            src={getCryptoCurrencySvg(toCurrency)}
            width={30}
            height={30}
            alt={toCurrency}
          />
          <span className="text-lg font-medium">{toCurrency}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "toValue",
    header: "To Value",
  },
  {
    accessorKey: "toCurrencyPrice",
    header: "To Currency Price",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.original.date;

      return <p>{new Date(date).toLocaleString()}</p>;
    },
  },
  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => {
      const state = row.original.state;

      return (
        <div
          className={cn(
            "flex w-fit items-center gap-1 rounded-md p-2 text-center",
            state === "success"
              ? "border-green-200 bg-green-100 dark:bg-green-800"
              : "border-red-200 bg-red-100 dark:bg-red-800",
          )}
        >
          {state}
          {state === "success" ? <MdCheck /> : <MdClose />}
        </div>
      );
    },
  },
];
