import Chart from "../charts/Chart";
import PeriodDropdown from "../components/PeriodDropdown";
import { DownArrowIcon, ThreeDotsIcon, UpArrowIcon } from "../icons/NavIcons";

const generateData = (): { date: string; volume: number }[] => {
  const data: { date: string; monthDate: string; volume: number }[] = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let i = 0; i < 12; i++) {
    const month = i + 1;
    const year = 2022;
    for (let j = 1; j <= 4; j++) {
      const day = (j - 1) * 7 + 1; // data points every 7 days
      const date = `${monthNames[i]} ${day}, ${year}`;
      const monthDate = `${monthNames[i]}`;
      const volume = Math.floor(Math.random() * 500) + 100;
      data.push({ date, volume, monthDate });
    }
  }
  return data;
};

export default function Dashboard() {
  const data = generateData();
  console.log(data);

  return (
    <section className="pl-4 w-3/4">
      <h1 className="title-font">Welcome back, Olivia 👋</h1>
      <p className="subtitle-font">
        Track and manage your products and shipments
      </p>
      <PeriodDropdown />
      <DashboardStats />
      <Chart data={data} />
    </section>
  );
}

const DashboardStats = () => {
  return (
    <div className="flex flex-1 overflow-x-scroll xl:gap-4 lg:gap-3 gap-2 my-4 scrollbar-hide">
      <StatsCard title={"Shipments"} number={100} percent={10} />
      <StatsCard title={"Shipments On Time"} number={10} percent={85} />
      <StatsCard title={"Returns"} number={27} percent={-25} />
      <StatsCard title={"Purchase Orders"} number={22} percent={7} />
    </div>
  );
};

const StatsCard = ({
  title,
  number,
  percent,
}: {
  title: string;
  number: number;
  percent: number;
}) => {
  return (
    <article className="card-shadow flex flex-col border-2 border-solid border-[#E4E7EC] items-start p-4 gap-2 rounded-lg min-w-[235px] xl:w-[calc(100%-48px/4)]">
      <div className="flex justify-between w-full items-center">
        <h4 className="font-medium text-sm leading-5 text-gray-500">{title}</h4>
        <ThreeDotsIcon />
      </div>
      <div className="flex justify-between w-full items-center">
        <h2 className="font-semibold text-3xl leading-9 tracking-tighter">
          {number}
        </h2>
        <Badge value={percent} />
      </div>
    </article>
  );
};

const Badge = ({ value }: { value: number }) => {
  const state = value >= 10 ? "success" : value > 0 ? "danger" : "warning";
  return (
    <div
      className={`flex flex-row items-center justify-center font-medium text-[12px] leading-5 py-[2px] px-[6px] gap-1 w-36 h-6 rounded-2xl ${state}`}
    >
      {value > 0 ? (
        <UpArrowIcon state={`${state}`} />
      ) : (
        <DownArrowIcon state={`${state}`} />
      )}
      <p>{`${value}% this month`}</p>
    </div>
  );
};
