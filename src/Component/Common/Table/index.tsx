import DataTable from "react-data-table-component";
import React from "react";

const Table = () => {
  const columns = [
    {
      name: "Prescription Name",
      selector: (row: any) =>
        row.prescriptionName,
    },
    {
      name: "Doctor Name",
      selector: (row: any) => row.doctorName,
    },
    {
      name: "Date Prescribe",
      selector: (row: any) => row.datePrescribed,
    },
    {
      name: "Actions",
      selector: (row: any) => row.actions,
    },
  ];

  const data = [
    {
      id: 1,
      prescriptionName: "Beetlejuice",
      doctorName: "1988",
      datePrescribed: "10.10.2022",
      actions: "Test Action",
    },
    {
      id: 2,
      prescriptionName: "Beetlejuice",
      doctorName: "1988",
      datePrescribed: "10.10.2022",
      actions: "Test Action",
    },
    {
      id: 3,
      prescriptionName: "Beetlejuice",
      doctorName: "1988",
      datePrescribed: "10.10.2022",
      actions: "Test Action",
    },
    {
      id: 4,
      prescriptionName: "Beetlejuice",
      doctorName: "1988",
      datePrescribed: "10.10.2022",
      actions: "Test Action",
    },
    {
      id: 5,
      prescriptionName: "Beetlejuice",
      doctorName: "1988",
      datePrescribed: "10.10.2022",
      actions: "Test Action",
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default Table;
