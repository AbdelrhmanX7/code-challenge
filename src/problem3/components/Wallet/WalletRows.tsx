import { FormattedWalletBalance } from "../../types";

interface Props {
  formattedBalances: FormattedWalletBalance[];
  prices: string[];
}

export const WalletRows: React.FC<Props> = ({
  formattedBalances,
  prices,
}: Props) => {
  return (
    <>
      {formattedBalances.map(
        (balance: FormattedWalletBalance, index: number) => {
          const usdValue = prices[balance.currency] * balance.amount;
          return (
            <WalletRow
              key={`${balance.currency}-${index}`}
              amount={balance.amount}
              usdValue={usdValue}
              formattedAmount={balance.formatted}
            />
          );
        }
      )}
    </>
  );
};

export default WalletRows;
