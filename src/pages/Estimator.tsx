import React, { useRef, useState } from "react";
import { PageHeader, PageWrapper } from "../components/global/MainComponents";
import {
  AddressTypeInput,
  ConfirmationInput,
  DimensionsInput,
  WeightInput,
  ZipFromInput,
  ZipToInput,
} from "../components/Estimator/EstimatorFormComponents";
import { mockShippingRates } from "../utils/MockData";

export const Estimator = () => {
  const zipFromRef = useRef<HTMLInputElement>(null);
  const zipToRef = useRef<HTMLInputElement>(null);
  const [addressType, setAddressType] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const heightRef = useRef<HTMLInputElement>(null);
  const widthRef = useRef<HTMLInputElement>(null);
  const lengthRef = useRef<HTMLInputElement>(null);
  const weightLbsRef = useRef<HTMLInputElement>(null);
  const weightOzRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return console.log({
      zipFrom: zipFromRef.current?.value,
      zipTo: zipToRef.current?.value,
      addressType: addressType,
      confirmationRef: confirmation,
      height: heightRef.current?.value,
      width: widthRef.current?.value,
      length: lengthRef.current?.value,
      weightLbsRef: weightLbsRef.current?.value,
      weightOzRef: weightOzRef.current?.value,
    });
  };

  return (
    <PageWrapper>
      <PageHeader title="Estimator" subtitle="Estimate your shipping costs" />
      <form
        className="w-full lg:w-[75%] flex flex-col gap-6 my-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap gap-6">
          <ZipFromInput ref={zipFromRef} />
          <ZipToInput ref={zipToRef} />
        </div>
        <div className="flex flex-wrap gap-6">
          <AddressTypeInput setAddressType={setAddressType} />
          <ConfirmationInput setConfirmation={setConfirmation} />
        </div>
        <div className="flex flex-wrap gap-6">
          <DimensionsInput
            heightRef={heightRef}
            widthRef={widthRef}
            lengthRef={lengthRef}
          />
          <WeightInput weightLbsRef={weightLbsRef} weightOzRef={weightOzRef} />
        </div>
        <input
          type="submit"
          value="See rates"
          className="rounded-md w-[fit-content] pay-now-shadow px-4 py-2 text-sm text-white hover:cursor-pointer bg-[#7F56D9] hover:bg-[#653fb7] border-solid border-[#7F56D9]"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 text-gray-700">
        {mockShippingRates.map((rate, i) => {
          return <EstimatedRate key={i} rate={rate} />;
        })}
      </div>
    </PageWrapper>
  );
};

const EstimatedRate = ({
  rate,
}: {
  rate: {
    carrier: string;
    service: string;
    rate: number;
    deliveryDays: number;
    cheapest?: boolean;
  };
}) => {
  return (
    <div className="border-solid border border-gray-300 card-shadow py-2 px-3  flex flex-col gap-y-2 rounded-md">
      <div className="flex flex-wrap justify-between items-center items-top py-1">
        <div className="flex items-center gap-2">
          <div className="bg-black rounded-full w-10 h-10 "></div>
          <div className="flex flex-col justify-center  p-0 m-0">
            <span className="text-xs text-gray-500">{rate.carrier}</span>
            <h3 className="font-medium">{rate.service}</h3>
          </div>
        </div>
        {rate.cheapest && <ShippingBadge>Cheapest</ShippingBadge>}
      </div>
      <p className="text-sm ">{`Estimated delivery if shipped today Monday 3/3 by 3:32 PM`}</p>
      <div className="flex items-center justify-between h-10 gap-4">
        <h4 className="font-bold text-xl">${rate.rate.toLocaleString()}</h4>
        <button>
          <GlobalButton type="secondary">Ship now</GlobalButton>
        </button>
      </div>
    </div>
  );
};

const ShippingBadge = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-[fit-content] h-[fit-content] font-semibold uppercase text-xs py-1 px-2 gap-2 bg-green-600 text-white">
      {children}
    </div>
  );
};

const GlobalButton = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "primary" | "secondary" | string;
}) => {
  return (
    <div
      className={`rounded-md w-[fit-content] pay-now-shadow px-4 py-2 text-sm hover:cursor-pointer ${
        type === "primary"
          ? "text-white bg-[#7F56D9] hover:bg-[#653fb7]"
          : "text-[#7F56D9] bg-[#F9F5FF] hover:bg-[#f2eafc]"
      }`}
    >
      {children}
    </div>
  );
};
