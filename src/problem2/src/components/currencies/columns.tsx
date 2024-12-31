import { CryptoCurrencyPrice } from "@/services";
import { getCryptoCurrencySvg } from "@/utils/crypto-currency-svgs";
import { currencyFormatter } from "@/utils/currency-formatter";
import { ColumnDef } from "@tanstack/react-table";
import Image from "../image-with-fallback";

export const columns: ColumnDef<CryptoCurrencyPrice>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <p className="truncate">{row.original.id}</p>;
    },
  },
  {
    accessorKey: "currency",
    header: "Currency",
    cell: ({ row }) => {
      const currency = row.original.currency;

      return (
        <div className="flex items-center gap-2">
          <Image
            src={getCryptoCurrencySvg(currency)}
            width={30}
            height={30}
            alt={currency}
          />
          <span className="text-lg font-medium">{currency}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.original.price;

      return (
        <div className="flex flex-col gap-1">
          <span className="font-bold text-primary">{price}</span>
          <span className="text-sm text-[#c8c8c8]">
            (~{currencyFormatter(price)})
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.original.date;

      return <p>{new Date(date).toLocaleString()}</p>;
    },
  },
];
