import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Table from "../Component/Common/Table";

const data = [
  {
    id: 1,
    prescriptionName: "Diabetes",
    doctorName: "Dr Shenelle Moses",
    datePrescribed: "08.10.2022",
    nextRefillDate: "08.20.2021",
  },
];

const columns = [
  {
    name: "Prescription Name",
    selector: (row: any) => row.prescriptionName,
    sortable: true,
  },
  {
    name: "Doctor Name",
    selector: (row: any) => row.doctorName,
    sortable: true,
  },
  {
    name: "Next Refill Date",
    selector: (row: any) => row.nextRefillDate,
    sortable: true,
    // type: ["refill"],
  },
  {
    name: "Date Prescribe",
    selector: (row: any) => row.datePrescribed,
    sortable: true,
  },
  {
    name: "Actions",
    selector: (row: any) => row.actions,
    type: ["view", "edit", "delete", "star"],
  },
];

//R&D
const RenderResearchComponent = () => (
  <>
    <Table data={data} columns={columns} />
  </>
);

const RoutesList = () => (
  <Routes>
    <Route
      path="/"
      element={<RenderResearchComponent />}
    />
    <Route path="/login" element={<>login</>} />
    <Route
      path="dashboard"
      element={
        <ProtectedRoute outlet={<>dashboard</>} />
      }
    />
    <Route path="/404" element={<>404</>} />
    <Route
      path={"*"}
      element={
        <Navigate to={{ pathname: "/404" }} />
      }
    />
  </Routes>
);

export default RoutesList;
