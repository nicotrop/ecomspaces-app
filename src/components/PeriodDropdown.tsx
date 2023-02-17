import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

type PeriodDropdownObj = {
  buttonText: string;
  value: string;
};

const TextValue: {
  buttonText: string;
  value: string;
}[] = [
  {
    buttonText: "Last 7 days",
    value: "sevenDays",
  },
  {
    buttonText: "Last 30 days",
    value: "thirtyDays",
  },
  {
    buttonText: "Last 3 months",
    value: "threeMonths",
  },
  {
    buttonText: "Last 6 months",
    value: "sixMonths",
  },
  {
    buttonText: "Last year",
    value: "lastYear",
  },
];

const PeriodDropdown = ({
  timePeriod,
  setTimePeriod,
}: {
  timePeriod: string;
  setTimePeriod: (value: string) => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const periodObj: PeriodDropdownObj | undefined = TextValue.find(
      (item) => item.value === e.currentTarget.value
    );
    periodObj
      ? setTimePeriod(periodObj.buttonText)
      : console.log("error, no value found");
  };

  return (
    <div className="w-full h-11 my-2 flex items-center justify-end">
      <Menu as="div" className="relative inline-block text-left float-right">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100">
            {timePeriod}
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              {TextValue.map((item, i) => (
                <MenuItem
                  key={i}
                  handleClick={handleClick}
                  buttonText={item.buttonText}
                  value={item.value}
                />
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PeriodDropdown;
