import RoutesList from "./routes";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  );
};

export default App;
