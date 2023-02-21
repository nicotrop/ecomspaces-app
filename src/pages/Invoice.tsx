import { useMemo, useState } from "react";
import { PageHeader, PageWrapper } from "../global/MainComponents";
import { PeriodDropdown } from "../components/TimeSelector";
import { CardWrapper } from "../global/DataVizComponents";
import { mockInvoiceData } from "../utils/MockData";
import { InvoiceStats } from "../components/InvoiceStats";
import { StatusFilter } from "../components/StatusFilter";
import SeachFilter from "../components/SearchFilter";
import { CoinIcon, Dot, DownloadIcon } from "../icons/NavIcons";

const mockInvoiceTabData = [
  {
    status: "paid",
    invoiceName: "PPT-152859",
    invoiceDate: "2021-05-01",
    dueDate: "2021-05-31",
    amount: 150.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676930997/PPT-152859_vtwcvj.pdf",
    paymentLink: "www.nicotroplent.com",
  },
  {
    status: "due",
    invoiceName: "PPOY-8921",
    invoiceDate: "2021-02-01",
    dueDate: "2021-02-31",
    amount: 90.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676932518/WAL-152845_nevua1.pdf",
    paymentLink: "https://nicotroplent.com",
  },
  {
    status: "late",
    invoiceName: "SLC-2901",
    invoiceDate: "2021-06-12",
    dueDate: "2021-06-20",
    amount: 50.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676930997/PPT-152859_vtwcvj.pdf",
    paymentLink: "https://nicotroplent.com",
  },
  {
    status: "due",
    invoiceName: "AFWM-1029",
    invoiceDate: "2021-03-01",
    dueDate: "2021-03-15",
    amount: 75.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676930997/PPT-152859_vtwcvj.pdf",
    paymentLink: "https://nicotroplent.com",
  },
];

export const Invoices = () => {
  const [timePeriod, setTimePeriod] = useState("Last 30 days");
  const [status, setStatus] = useState("All");
  const [invoice, setInvoice] = useState(mockInvoiceTabData[0]);

  return (
    <PageWrapper>
      <PageHeader title="Invoices" subtitle="Manage your invoices" />
      <PeriodDropdown timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      <CardWrapper>
        {mockInvoiceData.map((data) => {
          return <InvoiceStats key={data.id} data={data} />;
        })}
      </CardWrapper>
      <div className="flex items-between gap-4 w-full h-18">
        <SeachFilter className="w-[70%] flex flex-col justify-between" />
        <StatusFilter
          status={status}
          setStatus={setStatus}
          className="w-[30%] flex flex-col justify-between"
        />
      </div>
      <div className="flex my-4 gap-x-4">
        <div className="w-[35%] flex flex-col">
          {mockInvoiceTabData.map((data, i) => {
            return (
              <article key={i}>
                <InvoiceSelector data={data} setInvoice={setInvoice} />
                {i + 1 < mockInvoiceTabData.length && <hr />}
              </article>
            );
          })}
        </div>
        <div className="w-[65%]">
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
        </div>
      </div>
    </PageWrapper>
  );
};

const InvoiceStatus = ({
  status,
  dueDate,
}: {
  status: "paid" | "due" | "late" | string;
  dueDate: string;
}) => {
  const details = (() => {
    switch (status) {
      case "paid":
        return {
          text: "Paid",
          cssClass: "success",
        };
      case "due":
        return {
          text: `Due by ${dueDate}`,
          cssClass: "danger",
        };
      case "late":
        return {
          text: `Late`,
          cssClass: "warning",
        };
      default:
        return {
          text: "",
          cssClass: "",
        };
    }
  })();

  return (
    <div
      className={`flex items-center gap-[6px] py-[2px] px-2 rounded-2xl h-6 ${details.cssClass} text-xs w-[fit-content]`}
    >
      <Dot status={status} />
      <span>{details.text}</span>
    </div>
  );
};

type InvoiceDataType = {
  status: "paid" | "due" | "late" | string;
  invoiceName: string;
  invoiceDate: string;
  dueDate: string;
  amount: number;
  invoicePDF: string;
  paymentLink: string;
};

const InvoiceSelector = ({
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
