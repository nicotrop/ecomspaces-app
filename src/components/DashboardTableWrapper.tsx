import { OrderData, POData, mockTabs } from "../utils/MockData";
import { DashboardTable } from "../charts/DashboardTable";

export const DashboardTableWrapper = ({
  activeTab,
  tableData,
  isLoading,
  setActiveTab,
}: {
  activeTab: string;
  tableData: OrderData | POData;
  isLoading: boolean;
  setActiveTab: (value: string) => void;
}) => {
  return (
    <>
      <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      <DashboardTable
        activeTab={activeTab}
        tableData={tableData}
        isLoading={isLoading}
      />
    </>
  );
};

const TabContainer = ({
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
    <div className="flex flex-col gap-3 my-2">
      <h2 className="title2-font">Quick Actions</h2>
      <p className="subtitle-font">Manage your orders</p>
      <div>
        <ul className="flex gap-4">
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

const Tab = ({
  title,
  value,
  handleClick,
  activeTab,
  number,
}: {
  title: string;
  value: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  activeTab: string;
  number: string;
}) => {
  return (
    <div
      className={`${
        activeTab === value &&
        "bg-[#F9F5FF] border-b-2 border-solid border-[#6941C6]"
      } hover:bg-[#F9F5FF] min-w-[100px] cursor-pointer ease-in-out duration-200 rounded-md py-3 px-3 flex justify-center gap-1`}
    >
      <button
        value={value}
        onClick={handleClick}
        className={`not-italic font-normal ${
          activeTab === value ? "text-[#6941C6]" : "text-gray-500"
        } h-full w-full leading-5 text-sm`}
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
