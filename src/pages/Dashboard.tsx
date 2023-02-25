import { useEffect, useState } from "react";
import { DashboardStats } from "../components/Dashboard/DashboardStats";
import { PeriodDropdown } from "../components/global/TimeSelector";
import { OrderData, POData, fetchMockData } from "../utils/MockData";
import { DashboardTableWrapper } from "../components/Dashboard/DashboardTableWrapper";
import { DashboardTimeSeries } from "../charts/DashboardTimeSeries";
import { PageHeader, PageWrapper } from "../components/global/MainComponents";

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
    <PageWrapper>
      <PageHeader
        title="Welcome back, Olivia 👋"
        subtitle=" Track and manage your products and shipments"
      />
      <PeriodDropdown timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      <DashboardStats />
      <DashboardTimeSeries timePeriod={timePeriod} />
      <DashboardTableWrapper
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tableData={tableData}
        isLoading={isLoading}
      />
    </PageWrapper>
  );
}
