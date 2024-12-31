import { useQuery } from "@tanstack/react-query";
import { getCryptoCurrencyPrices } from "@/services/api";

export type CryptoCurrencyPrice = {
  currency: string;
  price: number;
  date: string;
  id: string;
};

export type CryptoCurrencyPrices = CryptoCurrencyPrice[];

export const useGetCryptoCurrencyPrices = () => {
  return useQuery<CryptoCurrencyPrices>({
    queryKey: ["cryptoCurrencyPrices"],
    queryFn: getCryptoCurrencyPrices,
    refetchInterval: 10000,
  });
};
