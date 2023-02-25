import React from "react";
import { AddressTypes, ConfirmationTypes } from "../../utils/MockData";

export type DimensionsInputProps = {
  lengthRef: React.RefObject<HTMLInputElement>;
  widthRef: React.RefObject<HTMLInputElement>;
  heightRef: React.RefObject<HTMLInputElement>;
};

export type WeightInputProps = {
  weightLbsRef: React.RefObject<HTMLInputElement>;
  weightOzRef: React.RefObject<HTMLInputElement>;
};

export const ZipFromInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="w-32">
      <label
        htmlFor="zipFrom"
        className="block text-sm font-medium text-gray-700"
      >
        <span>From </span>
        <span>(US only)</span>
      </label>
      <div className="relative mt-1 flex items-center">
        <input
          {...props}
          ref={ref}
          type="text"
          name="zipFrom"
          id="zipFrom"
          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm sm:text-sm"
          placeholder="Zipcode"
          pattern="[0-9]{5}"
          required
        />
      </div>
    </div>
  );
});

export const ZipToInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="w-32">
      <label
        htmlFor="zipTo"
        className="block text-sm font-medium text-gray-700"
      >
        <span>To</span>
      </label>
      <div className="relative mt-1 flex items-center">
        <input
          {...props}
          ref={ref}
          type="text"
          name="zipTo"
          id="zipTo"
          className="w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-none focus:outline-0 focus:ring-gray-300 focus:ring-1"
          placeholder="Zipcode"
          pattern="[0-9]{5}"
          required
        />
      </div>
    </div>
  );
});

export const AddressTypeInput = ({
  setAddressType,
}: {
  setAddressType: (value: string) => void;
}) => {
  return (
    <div className="w-[fit-content]">
      <label
        htmlFor="addressType"
        className="block text-sm font-medium text-gray-700"
      >
        Address type
      </label>
      <fieldset className="mt-1">
        <legend className="sr-only">Address Type</legend>
        <div className="flex gap-4 w-[fit-content]">
          {AddressTypes.map((type) => (
            <div key={type.id} className="flex items-center">
              <input
                id={type.id}
                name="addressType"
                type="radio"
                value={type.id}
                onChange={(e) => setAddressType(e.target.value)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={type.id}
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                {type.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export const ConfirmationInput = ({
  setConfirmation,
}: {
  setConfirmation: (value: string) => void;
}) => {
  return (
    <div className="w-[fit-content]">
      <label
        htmlFor="confirmationType"
        className="block text-sm font-medium text-gray-700"
      >
        Confirmation
      </label>
      <fieldset className="mt-1">
        <legend className="sr-only">Confirmation</legend>
        <div className="flex gap-4 w-[fit-content]">
          {ConfirmationTypes.map((type) => (
            <div key={type.id} className="flex items-center">
              <input
                id={type.id}
                value={type.id}
                name="confirmationType"
                type="radio"
                onChange={(e) => setConfirmation(e.target.value)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={type.id}
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                {type.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export const DimensionsInput = React.forwardRef<
  HTMLInputElement,
  DimensionsInputProps
>(({ lengthRef, widthRef, heightRef }, props) => {
  return (
    // <div className="w-[40%] min-w-[220px]">
    <div className="w-[fit-content]">
      <label htmlFor="dimensions" className="text-sm font-medium text-gray-700">
        <span>Dimensions </span>
        <span>(Inches)</span>
      </label>
      <div className="flex mt-1">
        <input
          {...props}
          type="text"
          name="length"
          id="length"
          ref={lengthRef}
          className="w-20 rounded-none border border-r-0 border-gray-300 rounded-l-md px-2 shadow-sm sm:text-sm focus:outline-0"
          placeholder="Length"
          required
        />
        <input
          type="text"
          name="width"
          id="width"
          ref={widthRef}
          className="w-20 rounded-none border border-gray-300  bg-transparent px-2 shadow-sm sm:text-sm focus:outline-0"
          placeholder="Width"
          required
        />
        <input
          type="text"
          name="height"
          id="height"
          ref={heightRef}
          className="w-20 rounded-none border border-l-0 border-gray-300 rounded-r-md bg-transparent px-2 shadow-sm sm:text-sm focus:outline-0"
          placeholder="Height"
          required
        />
      </div>
    </div>
  );
});

export const WeightInput = React.forwardRef<HTMLInputElement, WeightInputProps>(
  ({ weightLbsRef, weightOzRef }, props) => {
    return (
      <div className="w-[145px]">
        <label htmlFor="weight" className="text-sm font-medium text-gray-700">
          <span>Weight </span>
        </label>
        <div className="flex mt-1">
          <input
            {...props}
            type="text"
            ref={weightLbsRef}
            name="pounds"
            id="pounds"
            className="w-20 rounded-none border border-r-0 border-gray-300 rounded-l-md px-2 shadow-sm sm:text-sm focus:outline-0"
            placeholder="Pounds"
            required
          />
          <input
            type="text"
            ref={weightOzRef}
            name="ounces"
            id="ounces"
            className="w-20 rounded-none border border-gray-300  rounded-r-md px-2 shadow-sm sm:text-sm focus:outline-0"
            placeholder="Ounces"
            required
          />
        </div>
      </div>
    );
  }
);
