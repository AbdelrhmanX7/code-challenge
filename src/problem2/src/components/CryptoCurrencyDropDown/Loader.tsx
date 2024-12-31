import React from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";

export const Loader = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <DropdownMenuItem
          key={index}
          className="flex w-[200px] items-center justify-center"
          disabled
        >
          <div className="flex w-full items-center">
            <Skeleton className="h-12 w-12 rounded-full bg-[#c8c8c8]" />
            <div className="flex w-[calc(100%-48px)] items-center justify-center gap-2">
              <Skeleton className="h-4 w-6/12 bg-[#c8c8c8]" />
              <Skeleton className="h-4 w-1/3 bg-[#c8c8c8]" />
            </div>
          </div>
        </DropdownMenuItem>
      ))}
    </>
  );
};

export default Loader;
