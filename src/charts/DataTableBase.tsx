import DataTable, { TableProps } from "react-data-table-component";
import { ArrowDown } from "../icons/NavIcons";

const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};

const sortIcon = (
  <div className="p-1">
    <ArrowDown />
  </div>
);

//TODO: ADD CUSTOM LOADER

function DataTableBase<T>(props: TableProps<T>) {
  return (
    <DataTable
      sortIcon={sortIcon}
      pagination
      selectableRowsComponentProps={selectProps}
      {...props}
    />
  );
}

export default DataTableBase;
