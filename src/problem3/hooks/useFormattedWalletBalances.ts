import { FormattedWalletBalance, WalletBalance } from "../types";
import { getPriority } from "../utils";

export const useFormattedWalletBalances = (balances: WalletBalance[]) => {
  const sortedBalances: WalletBalance[] = useMemo<WalletBalance[]>(() => {
    return balances
      .filter((balance: WalletBalance) => {
        return getPriority(balance.blockchain) > -99 && balance.amount > 0;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        return getPriority(rhs.blockchain) - getPriority(lhs.blockchain);
      });
  }, [balances]);

  const formattedBalances: FormattedWalletBalance[] = useMemo<
    FormattedWalletBalance[]
  >(() => {
    return sortedBalances.map((balance: WalletBalance) => {
      return {
        ...balance,
        formatted: balance.amount.toFixed(),
      };
    });
  }, [sortedBalances]);

  return formattedBalances;
}