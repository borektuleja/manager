import { Route, Routes } from "react-router-dom";

import EditPage from "@/components/admin/EditPage";
import HomePage from "@/components/admin/HomePage";
import MakePage from "@/components/admin/MakePage";
import Navbar from "@/components/admin/Navbar";

import * as styles from "./App.styles";

const App = () => (
  <div className={styles.wrapper}>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vytvorit" element={<MakePage />} />
      <Route path="/upravit/:id" element={<EditPage />} />
    </Routes>
  </div>
);

export default App;
