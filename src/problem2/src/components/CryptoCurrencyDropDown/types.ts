import { CryptoCurrencyPrice, CryptoCurrencyPrices } from "@/services";

export interface CryptoCurrencyDropDownProps {
  onMenuChange?: (data: CryptoCurrencyPrice) => void;
  value?: CryptoCurrencyPrice | null;
  data?: CryptoCurrencyPrices;
  isLoading?: boolean;
  disabledMenuItemById?: string;
}
