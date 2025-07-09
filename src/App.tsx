import { BrowserRouter, Route, Routes } from "react-router-dom";
import Today from "@/pages/Today";
import GoalWizard from "./pages/GoalWizard";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/goals/new" element={<GoalWizard />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="today" element={<Today />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
