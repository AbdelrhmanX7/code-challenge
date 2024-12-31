import React from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export const NoDataItem = () => {
  return (
    <DropdownMenuItem className="flex items-center justify-center p-4" disabled>
      No currencies available
    </DropdownMenuItem>
  );
};

export default NoDataItem;
