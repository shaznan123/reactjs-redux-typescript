import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Table from "../Component/Common/Table";

//R&D
const RenderResearchComponent = () => (
  <>
    <Table />
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
