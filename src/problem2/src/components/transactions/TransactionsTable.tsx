import { useReadLocalStorage } from "usehooks-ts";
import { columns, TransactionsType } from "./columns";
import { DataTable } from "./data-table";

export const TransactionsTable = () => {
  const data = useReadLocalStorage<TransactionsType[]>("transactions") ?? [];

  return (
    <div className="w-full py-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TransactionsTable;
