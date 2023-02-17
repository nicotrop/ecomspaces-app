import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import Chart from "../charts/Chart";
import { DashboardStats } from "../components/DashboardStats";
import PeriodDropdown from "../components/PeriodDropdown";
import { generateData } from "../utils/GenerateData";
import { OrderData, POData, fetchMockData, mockTabs } from "../utils/MockData";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("allOrders");
  const [tableData, setTableData] = useState<OrderData | POData>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMockData(activeTab)
      .then((data) => setTableData(data))
      .finally(() => setIsLoading(false));
  }, [activeTab]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="pl-4 w-3/4">
      <h1 className="title-font">Welcome back, Olivia 👋</h1>
      <p className="subtitle-font">
        Track and manage your products and shipments
      </p>
      <PeriodDropdown />
      <DashboardStats />
      <DashboardChart />
      <ActionsTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <OrdersTable activeTab={activeTab} tableData={tableData} />
    </section>
  );
}

const DashboardChart = () => {
  const data = generateData();
  return (
    <div className="flex flex-col gap-8 my-8">
      <h2 className="title2-font">Shipments Time Series</h2>
      <Chart data={data} />
    </div>
  );
};

const ActionsTab = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col gap-3 my-8">
      <h2 className="title2-font">Quick Actions</h2>
      <p className="subtitle-font">Manage your orders</p>
      <div>
        <ul className="grid grid-flow-col gap-2">
          {mockTabs.map((tab, i) => (
            <li key={i}>
              <Tab
                title={tab.title}
                value={tab.value}
                handleClick={handleClick}
                activeTab={activeTab}
                number={tab.number}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Tab = ({ title, value, handleClick, activeTab, number }: any) => {
  return (
    <div
      className={`${
        activeTab === value && "bg-[#F9F5FF]"
      } hover:bg-[#F9F5FF] cursor-pointer ease-in-out duration-200 rounded-md py-2 px-2 flex justify-center gap-1`}
    >
      <button
        value={value}
        onClick={handleClick}
        className={`not-italic font-normal ${
          activeTab === value ? "text-[#6941C6]" : "text-gray-500"
        }  leading-5 text-sm`}
      >
        {title}
      </button>
      {value !== "allOrders" && (
        <figure
          className={`flex justify-center items-center rounded-md text-center text-xs px-2 py-1 ${
            activeTab === value
              ? "bg-[#6941C6] text-white"
              : "text-[#6941C6] bg-[#f0ebf9]"
          }`}
        >
          <span>{number}</span>
        </figure>
      )}
    </div>
  );
};

type OrdersTableProps = {
  activeTab: string;
  tableData: OrderData | POData;
};

const OrdersTable = ({ tableData }: OrdersTableProps) => {
  const keysObj = useMemo(() => {
    return Object.keys(tableData[0]).filter((key) => key !== "id");
  }, [tableData]);

  const keysValue = useMemo(() => {
    return tableData.slice(1);
  }, [tableData]);

  return (
    <div className="my-8 overflow-scroll h-72">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {keysObj.map((header, i) => (
              <th key={i} className="px-1 py-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {keysValue.map((row, i) => (
            <tr key={i}>
              {keysObj.map((key, j) => (
                <td key={j} className="border px-2 py-2">
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
