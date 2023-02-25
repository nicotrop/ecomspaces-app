import React, { useRef, useState } from "react";
import { PageHeader, PageWrapper } from "../global/MainComponents";
import {
  AddressTypeInput,
  ConfirmationInput,
  DimensionsInput,
  WeightInput,
  ZipFromInput,
  ZipToInput,
} from "../components/EstimatorFormComponents";

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
        className="w-full lg:w-[75%] flex flex-col gap-4 my-6"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4">
          <ZipFromInput ref={zipFromRef} />
          <ZipToInput ref={zipToRef} />
        </div>
        <div className="flex gap-4">
          <AddressTypeInput setAddressType={setAddressType} />
          <ConfirmationInput setConfirmation={setConfirmation} />
        </div>
        <div className="flex gap-4">
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
    </PageWrapper>
  );
};
