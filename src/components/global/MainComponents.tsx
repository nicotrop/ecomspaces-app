import { DownArrowIcon, UpArrowIcon } from "../../icons/NavIcons";

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

export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 overflow-x-scroll xl:gap-4 lg:gap-3 gap-2 my-4 scrollbar-hide">
      {children}
    </div>
  );
};

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="card-shadow flex flex-col border-2 border-solid border-[#E4E7EC] items-start p-4 gap-2 rounded-lg min-w-[235px] xl:w-[calc(100%-48px/4)]">
      {children}
    </article>
  );
};

export const CardContentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between w-full items-center">{children}</div>
  );
};
