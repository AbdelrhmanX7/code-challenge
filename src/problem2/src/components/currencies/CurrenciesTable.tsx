import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useGetCryptoCurrencyPrices } from "@/services";

export const CurrenciesTable = () => {
  const { data } = useGetCryptoCurrencyPrices();

  return (
    <div className="w-full py-2">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
};

export default CurrenciesTable;
