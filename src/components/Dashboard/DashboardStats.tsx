import { ThreeDotsIcon } from "../../icons/NavIcons";
import { MockDashboardStats } from "../../utils/MockData";
import {
  Badge,
  CardContainer,
  CardContentBox,
  CardWrapper,
} from "../global/MainComponents";

export const DashboardStats = () => {
  return (
    <CardWrapper>
      {MockDashboardStats.map((stat, i) => {
        return (
          <StatsCard
            key={i}
            title={stat.title}
            number={stat.number}
            percent={stat.percent}
          />
        );
      })}
    </CardWrapper>
  );
};

type StatsCardProps = {
  title?: string;
  number?: number;
  percent?: number;
};

export const StatsCard = ({ title, number, percent }: StatsCardProps) => {
  return (
    <CardContainer>
      <CardContentBox>
        <h4 className="font-medium text-sm leading-5 text-gray-500">{title}</h4>
        <ThreeDotsIcon />
      </CardContentBox>
      <CardContentBox>
        <h2 className="font-semibold text-3xl leading-9 tracking-tighter">
          {number}
        </h2>
        <Badge value={percent} />
      </CardContentBox>
    </CardContainer>
  );
};
