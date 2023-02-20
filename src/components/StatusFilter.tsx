import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { invoiceStatus } from "../utils/MockData";
import { ChevronDown } from "../icons/NavIcons";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Dropdown = {
  name: string;
  value: string;
};

export const StatusFilter = ({
  status,
  setStatus,
  className,
}: {
  status: string;
  setStatus: (value: string) => void;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const periodObj: Dropdown | undefined = invoiceStatus.find(
      (item) => item.value === e.currentTarget.value
    );
    periodObj
      ? setStatus(periodObj.name)
      : console.log("error, no value found");
  };

  return (
    <div className={`${className}`}>
      <label className="w-full text-sm font-medium text-gray-700">Status</label>
      <div className="w-full flex items-center justify-end">
        <Menu
          as="div"
          className="w-full relative text-left float-right text-gray-700"
        >
          <div>
            <Menu.Button className="inline-flex w-full h-11 justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100 gap-2">
              <span>{status}</span>
              <ChevronDown />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                {invoiceStatus.map((item, i) => (
                  <MenuItem
                    key={i}
                    handleClick={handleClick}
                    buttonText={item.name}
                    value={item.value}
                  />
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

interface MenuItemProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
  value: string;
}

const MenuItem = ({ handleClick, buttonText, value }: MenuItemProps) => (
  <Menu.Item>
    {({ active }) => (
      <button
        value={value}
        className={classNames(
          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
          "block px-4 py-2 text-sm w-full text-left"
        )}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    )}
  </Menu.Item>
);
