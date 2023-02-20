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
