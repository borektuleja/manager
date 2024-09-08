import { BrowserRouter, Route, Routes } from "react-router-dom";

import Admin from "@/components/admin/App";
import Client from "@/components/client/App";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Admin />} />
      <Route path="/rezervovat/:id" element={<Client />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
