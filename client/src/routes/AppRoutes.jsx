import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeConstants from "./routeConstants";
import { Authentication } from "../pages";
import { Registration } from "../components";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routeConstants.home.path} element={<Authentication />} />
        </Routes>
        <Routes>
          <Route
            path={routeConstants.register.path}
            element={<Registration />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
