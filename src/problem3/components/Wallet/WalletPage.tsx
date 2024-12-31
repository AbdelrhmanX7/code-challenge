import { FormattedWalletBalance, WalletBalance } from "../../types";
import { useFormattedWalletBalances } from "../../hooks";
import WalletRows from "./WalletRows";

interface Props extends BoxProps {}

const WalletPage: React.FC<Props> = ({ children, ...rest }: Props) => {
  const balances: WalletBalance[] = useWalletBalances();
  const prices: string[] = usePrices();

  const formattedBalances: FormattedWalletBalance[] =
    useFormattedWalletBalances(balances);

  return (
    <div {...rest}>
      <WalletRows formattedBalances={formattedBalances} prices={prices} />
    </div>
  );
};

export default WalletPage;
