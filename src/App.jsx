import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./components/Layout";
import Edit from "./Pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
