import { CoinIcon, DownloadIcon } from "../../icons/NavIcons";
import { InvoiceDataType } from "../../pages/Invoice";
import { InvoiceStatus } from "./InvoiceStatus";

export const InvoiceDisplay = ({ invoice }: { invoice: InvoiceDataType }) => {
  return (
    <>
      <div className="flex flex-col p-8 gap-6 border-solid border border-[#E4E7EC]">
        <h2 className="text-[32px] leading-5 font-medium text-black">
          {invoice.invoiceName}
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col text-gray-500 text-sm font-normal gap-y-2">
            <span>{`Due: ${invoice.dueDate}`}</span>
            <span>{`Sent: ${invoice.invoiceDate}`}</span>
            <button className="w-[fit-content] text-[#7F56D9] flex items-center gap-x-1">
              <span>Download PDF</span> <DownloadIcon />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-500 text-sm font-normal flex items-center gap-x-2">
              <span>{"Status:"}</span>
              <InvoiceStatus
                status={invoice.status}
                dueDate={invoice.dueDate}
              />
            </div>
            <button className="flex items-center text-sm justify-center pay-now-shadow gap-1 py-2 px-4 h-9 bg-[#7F56D9] border-solid border-[#7F56D9] rounded-lg">
              <a
                className="text-white"
                href={invoice.paymentLink}
                target="_blank"
              >
                Pay now
              </a>
              <CoinIcon color="#FFFFFF" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] h-[550px]">
        <embed
          src={`${invoice.invoicePDF}#toolbar=0`}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>
    </>
  );
};
