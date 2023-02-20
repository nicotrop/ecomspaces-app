import { CardContainer, CardContentBox } from "../global/DataVizComponents";
import {
  InvoiceDueIcon,
  InvoiceLateIcon,
  InvoiceOverdueIcon,
  InvoicePaidIcon,
  ThreeDotsIcon,
} from "../icons/NavIcons";

export const InvoiceStats = ({
  data,
}: {
  data: {
    id: number;
    name: string;
    alias: string;
    value: number;
    dollarValue?: boolean;
  };
}) => {
  return (
    <CardContainer>
      <CardContentBox>
        <InvoiceTopIcon alias={data.alias} />
        <ThreeDotsIcon />
      </CardContentBox>
      <CardContentBox>
        <h4 className="font-medium text-sm leading-5 text-gray-500">
          {data.name}
        </h4>
      </CardContentBox>
      <CardContentBox>
        <h2 className="font-semibold text-3xl leading-9 tracking-tighter">
          {data.dollarValue && "$"} {data.value.toLocaleString("en-US", {})}
        </h2>
      </CardContentBox>
    </CardContainer>
  );
};

const InvoiceTopIcon = ({ alias }: { alias: string }) => {
  switch (alias) {
    case "amountDue":
      return <InvoiceDueIcon />;
    case "totalPaid":
      return <InvoicePaidIcon />;
    case "amountOverdue":
      return <InvoiceOverdueIcon />;
    case "invoicesLate":
      return <InvoiceLateIcon />;
    default:
      return null;
  }
};
