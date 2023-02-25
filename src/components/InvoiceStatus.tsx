import { Dot } from "../icons/NavIcons";

export const InvoiceStatus = ({
  status,
  dueDate,
}: {
  status: "paid" | "due" | "late" | string;
  dueDate: string;
}) => {
  const details = (() => {
    switch (status) {
      case "paid":
        return {
          text: "Paid",
          cssClass: "success",
        };
      case "due":
        return {
          text: `Due by ${dueDate}`,
          cssClass: "danger",
        };
      case "late":
        return {
          text: `Late`,
          cssClass: "warning",
        };
      default:
        return {
          text: "",
          cssClass: "",
        };
    }
  })();

  return (
    <div
      className={`flex items-center gap-[6px] py-[2px] px-2 rounded-2xl h-6 ${details.cssClass} text-xs w-[fit-content]`}
    >
      <Dot status={status} />
      <span>{details.text}</span>
    </div>
  );
};
