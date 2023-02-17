import { useEffect, useState } from "react";
import { DashboardStats } from "../components/DashboardStats";
import PeriodDropdown from "../components/PeriodDropdown";
import { OrderData, POData, fetchMockData } from "../utils/MockData";
import { DashboardTableWrapper } from "../components/DashboardTableWrapper";
import { DashboardTimeSeries } from "../charts/DashboardTimeSeries";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("allOrders");
  const [tableData, setTableData] = useState<OrderData | POData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timePeriod, setTimePeriod] = useState("Last 30 days");

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
      <PeriodDropdown timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      <DashboardStats />
      <DashboardTimeSeries timePeriod={timePeriod} />
      <DashboardTableWrapper
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tableData={tableData}
        isLoading={isLoading}
      />
    </section>
  );
}
