import { SeachIcon } from "../icons/NavIcons";

export default function SeachFilter({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Search Invoice
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SeachIcon />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-none focus:ring-gray-300 sm:text-sm h-11"
          placeholder="Search Invoice"
        />
      </div>
    </div>
  );
}
