import { useMemo } from "react";
import DataTableBase from "./DataTableBase";
import { OrderData, POData } from "../utils/MockData";

type OrdersTableProps = {
  activeTab: string;
  tableData: OrderData | POData;
  isLoading: boolean;
};

export const DashboardTable = ({ tableData, isLoading }: OrdersTableProps) => {
  const columns = useMemo(() => {
    const columns = Object.keys(tableData[0])
      .filter((key) => key !== "id")
      .map((key) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        selector: (row: any) => row[key],
        sortable: true,
      }));
    return columns;
  }, [tableData]);

  const keysValue = useMemo(() => {
    return tableData;
  }, [tableData]);

  const customStyles = useMemo(() => {
    return {
      responsiveWrapper: {
        style: {
          "min-height": "100%",
          "padding-bottom": "1rem",
        },
        cells: {
          style: {
            width: "100%",
            overflow: "scroll",
          },
        },
        headRow: {
          style: {
            fontSize: "22px",
            fontColor: "#667085",
            paddingRight: "8px",
          },
        },
      },
    };
  }, []);

  return (
    <div className="mb-4 overflow-scroll h-72">
      <DataTableBase
        columns={columns}
        data={keysValue}
        progressPending={isLoading}
        dense={false}
        fixedHeader={true}
        pagination={false}
        responsive={true}
        fixedHeaderScrollHeight="200px"
        customStyles={customStyles}
      />
    </div>
  );
};
