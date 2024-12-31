import axios from "axios";
import { CryptoCurrencyPrice } from "../hooks";
export const getCryptoCurrencyPrices = async () => {
  try {
    const response = await axios.get(
      "https://interview.switcheo.com/prices.json",
    );

    let cryptoPrices = response.data;

    cryptoPrices = cryptoPrices
      .filter(
        (crypto: CryptoCurrencyPrice) => crypto.price > 0 || !!crypto?.price,
      )
      .map((crypto: CryptoCurrencyPrice, index: number) => ({
        ...crypto,
        id: `${crypto.currency}-${crypto.date}-${crypto.price}-${index}`,
      }));

    return cryptoPrices;
  } catch (error) {
    console.error("Error fetching crypto prices", error);
  }
};
