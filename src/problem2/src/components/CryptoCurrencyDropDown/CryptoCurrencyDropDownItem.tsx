import React from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import Image from "../image-with-fallback";
import { getCryptoCurrencySvg } from "@/utils/crypto-currency-svgs";
import { cryptoCurrencyValueHandler } from "@/utils/crypto-currecny-value-handler";
import { MdCheck } from "react-icons/md";
import { cn } from "@/lib/utils";

export const CryptoCurrencyDropDownItem = ({
  currency,
  price,
  isSelected,
  isDisabled,
  onClick,
}: {
  currency: string;
  price: number;
  date: string;
  id: string;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}) => {
  return (
    <DropdownMenuItem
      disabled={isDisabled}
      onClick={onClick}
      className={cn("my-1 cursor-pointer", isSelected && "bg-secondary")}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={getCryptoCurrencySvg(currency)}
            width={30}
            height={30}
            alt={currency}
          />
          <span className="text-lg font-medium">{currency}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-primary">
            {cryptoCurrencyValueHandler(price)}$
          </span>
          {isSelected && <MdCheck />}
        </div>
      </div>
    </DropdownMenuItem>
  );
};

export default CryptoCurrencyDropDownItem;
