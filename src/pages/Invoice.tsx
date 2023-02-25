import { useState } from "react";
import { PageHeader, PageWrapper } from "../global/MainComponents";
import { PeriodDropdown } from "../components/TimeSelector";
import { CardWrapper } from "../global/DataVizComponents";
import { mockInvoiceData, mockInvoiceTabData } from "../utils/MockData";
import { InvoiceStats } from "../components/InvoiceStats";
import { StatusFilter } from "../components/StatusFilter";
import SeachFilter from "../components/SearchFilter";
import { InvoiceSelector } from "../components/InvoiceSelector";
import { InvoiceDisplay } from "../components/InvoiceDisplay";

export type InvoiceDataType = {
  status: "paid" | "due" | "late" | string;
  invoiceName: string;
  invoiceDate: string;
  dueDate: string;
  amount: number;
  invoicePDF: string;
  paymentLink: string;
};

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
          <InvoiceDisplay invoice={invoice} />
        </div>
      </div>
    </PageWrapper>
  );
};
