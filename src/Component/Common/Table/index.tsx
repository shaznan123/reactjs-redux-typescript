import DataTable from "react-data-table-component";
import React, { FC, useMemo } from "react";
import { FaEdit } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import {
  AiOutlineStar,
  AiFillStar,
  AiFillDelete,
} from "react-icons/ai";
import RenderCustomPagination from "./Pagination";
import {
  tableOptions,
  TableColumnTitles,
} from "../../../Constants/constants";

interface IColumns {
  name: string;
  selector: any;
  sortable?: boolean;
  type?: string[];
}

interface ITable {
  data: any;
  columns: IColumns[];
}

const Table: FC<ITable> = ({ data, columns }) => {
  const tempIconStyles = {
    marginRight: "0.5rem",
    cursor: "pointer",
  };

  const renderIcons = (
    checkIfPropertyExists: Function
  ) => (
    <div style={{ display: "flex" }}>
      {checkIfPropertyExists(
        tableOptions.VIEW
      ) && (
        <BsFillEyeFill
          fontSize={18}
          style={tempIconStyles}
        />
      )}
      {checkIfPropertyExists(
        tableOptions.EDIT
      ) && (
        <FaEdit
          fontSize={18}
          style={tempIconStyles}
        />
      )}
      {checkIfPropertyExists(
        tableOptions.DELETE
      ) && (
        <AiFillDelete
          fontSize={18}
          style={tempIconStyles}
        />
      )}
      {checkIfPropertyExists(
        tableOptions.STAR
      ) && (
        <AiOutlineStar
          fontSize={18}
          style={tempIconStyles}
        />
      )}
    </div>
  );

  const formatColumnData = useMemo(() => {
    const customColumns = columns?.map((item) => {
      const checkIfPropertyExists = (
        prop: string
      ) => item?.type?.includes(prop);
      const columnTitle = item?.name;
      if (
        columnTitle === TableColumnTitles.ACTIONS
      ) {
        return {
          ...item,
          cell: () =>
            renderIcons(checkIfPropertyExists),
        };
      }
      if (
        columnTitle ===
        TableColumnTitles.NEXT_REFILL_DATE
      ) {
        return {
          ...item,
          cell: (row: any) => (
            <>
              <span
                style={{
                  backgroundColor: "blue",
                  color: "blue",
                  minWidth: "5px",
                  marginRight: "0.5em",
                }}
              >
                .
              </span>
              {row?.nextRefillDate}
            </>
          ),
        };
      }

      return item;
    });
    return customColumns;
  }, [columns]);

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "lightBlue",
      },
    },
  };

  return (
    <>
      <DataTable
        columns={formatColumnData}
        data={data}
        pagination
        selectableRows
        customStyles={customStyles}
        paginationComponent={
          RenderCustomPagination
        }
      />
    </>
  );
};

export default Table;
