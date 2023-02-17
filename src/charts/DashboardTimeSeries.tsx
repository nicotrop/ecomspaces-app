import { useMemo } from "react";
import { generateData } from "../utils/GenerateData";
import Chart from "../charts/Chart";

export const DashboardTimeSeries = ({ timePeriod }: { timePeriod: string }) => {
  const data = useMemo(() => {
    return generateData();
  }, [timePeriod]);
  return (
    <div className="flex flex-col gap-8 my-8">
      <h2 className="title2-font">Shipments Time Series</h2>
      <Chart data={data} />
    </div>
  );
};
