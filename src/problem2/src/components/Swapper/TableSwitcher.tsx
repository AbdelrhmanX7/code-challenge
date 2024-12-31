import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CurrenciesTable from "../currencies/CurrenciesTable";
import TransactionsTable from "../transactions/TransactionsTable";

export const TableSwitcher = () => {
  return (
    <Tabs defaultValue="currencies" className="w-full">
      <TabsList className="mt-6 grid h-12 w-full max-w-[350px] grid-cols-2 text-lg">
        <TabsTrigger className="py-2" value="currencies">
          Currencies
        </TabsTrigger>
        <TabsTrigger className="py-2" value="transactions">
          Transactions
        </TabsTrigger>
      </TabsList>
      <TabsContent value="currencies">
        <CurrenciesTable />
      </TabsContent>
      <TabsContent value="transactions">
        <TransactionsTable />
      </TabsContent>
    </Tabs>
  );
};

export default TableSwitcher;
