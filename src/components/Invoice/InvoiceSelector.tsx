import { CoinIcon } from "../../icons/NavIcons";
import { InvoiceDataType } from "../../pages/Invoice";
import { InvoiceStatus } from "./InvoiceStatus";

export const InvoiceSelector = ({
  data,
  setInvoice,
}: {
  data: InvoiceDataType;
  setInvoice: (data: InvoiceDataType) => void;
}) => {
  return (
    <div
      className="p-2 flex flex-col gap-y-4 hover:cursor-pointer hover:bg-[#FCFCFC]"
      onClick={() => setInvoice(data)}
    >
      <InvoiceStatus status={data.status} dueDate={data.dueDate} />
      <div className="flex justify-between n-font">
        <h5>{data.invoiceName}</h5>
        <h5>$ {data.amount.toLocaleString()}</h5>
      </div>
      <div className="flex justify-between text-sm font-normal">
        <span className="text-gray-500">{data.invoiceDate}</span>
        {data.status !== "paid" && (
          <button className="flex items-center gap-1">
            <a
              className="text-[#7F56D9]"
              href={data.paymentLink}
              target="_blank"
            >
              Pay now
            </a>
            <CoinIcon color={"#7F56D9"} />
          </button>
        )}
      </div>
    </div>
  );
};
