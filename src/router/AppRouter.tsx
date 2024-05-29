import { Route, BrowserRouter, Routes } from "react-router-dom";
import APIHandlingScreen from "../pages/APIHandlingScreen";
import SpacificPage from "../pages/SpacificPage";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<APIHandlingScreen />}></Route>
          <Route path="/user-id/:id" element={<SpacificPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
