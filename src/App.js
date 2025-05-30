import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardContent from "./components/DashboardContent";
import RoleDetail from "./components/RoleDetail";
import { roleData } from "./components/constants";
import ErrorPage from "./components/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard/nintendo" replace />}
        />

        <Route path="/dashboard/:companyId" element={<Dashboard />}>
          <Route index element={<DashboardContent roleData={roleData} />} />
          <Route path="role/:roleId" element={<RoleDetail />} />

          {/* Wildcard route for undefined paths */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
