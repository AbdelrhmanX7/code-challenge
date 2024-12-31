import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CryptoCurrencyPrice, CryptoCurrencyPrices } from "@/services";
import Image from "../image-with-fallback";
import { getCryptoCurrencySvg } from "@/utils/crypto-currency-svgs";
import { cn } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";
import { useCryptoCurrencyDropdown } from "@/hooks";
import CryptoCurrencyDropDownItem from "./CryptoCurrencyDropDownItem";
import { Loader } from "lucide-react";
import NoDataItem from "./NoDataItem";

interface CryptoCurrencyDropDownProps {
  onMenuChange?: (data: CryptoCurrencyPrice) => void;
  value?: CryptoCurrencyPrice | null;
  data?: CryptoCurrencyPrices;
  isLoading?: boolean;
  disabledMenuItemById?: string;
}

export const CryptoCurrencyDropDown = ({
  onMenuChange,
  value,
  data = [],
  isLoading,
  disabledMenuItemById,
}: CryptoCurrencyDropDownProps) => {
  const { selectedCurrency, setSelectedCurrency } =
    useCryptoCurrencyDropdown(value);

  const [width, setWidth] = useState(0);

  const [open, setOpen] = useState(false);
  const hasNoData = !isLoading && (!data || data.length === 0);

  const handleSelection = (currencyData: CryptoCurrencyPrice) => {
    setSelectedCurrency(currencyData);
    if (onMenuChange) onMenuChange(currencyData);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DropdownMenu onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn("h-fit sm:h-10", width < 640 && "!bg-background")}
          variant={"outline"}
        >
          {selectedCurrency?.currency ? (
            <div className="flex items-center gap-2">
              <Image
                src={getCryptoCurrencySvg(selectedCurrency.currency)}
                width={30}
                height={30}
                alt={selectedCurrency.currency}
              />
              <span className="font-bold">{selectedCurrency.currency}</span>
            </div>
          ) : (
            "Select Currency"
          )}
          <IoIosArrowDown
            className={cn("duration-300", open ? "rotate-180" : "rotate-0")}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className={cn("bg-background", data?.length && "h-96 overflow-y-auto")}
      >
        {isLoading ? (
          <Loader />
        ) : hasNoData ? (
          <NoDataItem />
        ) : (
          data?.map(({ currency, price, date, id }, index) => (
            <CryptoCurrencyDropDownItem
              key={`${currency}-${index}`}
              currency={currency}
              price={price}
              date={date}
              id={id}
              isSelected={selectedCurrency?.id === id}
              isDisabled={disabledMenuItemById === id}
              onClick={() => handleSelection({ currency, price, date, id })}
            />
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CryptoCurrencyDropDown;
