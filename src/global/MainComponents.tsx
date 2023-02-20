import { DownArrowIcon, UpArrowIcon } from "../icons/NavIcons";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="pl-4 w-3/4">{children}</section>;
};

export const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <h1 className="title-font">{title}</h1>
      <p className="subtitle-font">{subtitle}</p>
    </>
  );
};

export const Badge = ({ value }: { value?: number }) => {
  if (!value) return null;
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
