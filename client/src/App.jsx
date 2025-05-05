import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";


import AddNewInventory from "./pages/AddNewInventory.jsx";
import AddInventory from "./pages/AddInventory.jsx";
import AdminRequestTable from "./pages/AdminRequestTable.jsx";
import RestockInventory from "./pages/RestockInventory.jsx";
import InventoryTable from "./pages/InventoryTable";
import ChangeInventory from "./pages/ChangeInventory";
import IssueInventory from "./pages/IssueInventory";
import IssueInventoryTable from "./pages/IssueInventoryTable.jsx";
import FacultyRequestInventory from "./pages/FacultyRequestInventory.jsx";
import RequestInventoryTable from "./pages/RequestInventoryTable.jsx";
import Report from "./pages/Report";
import Summary from "./pages/Summary";
import ThreShold from "./pages/Threshold";
import Login from "./pages/Login";
import First from "./pages/First";
import SignUp from "./pages/SignUp.jsx";
import Notify from "./pages/Notify.jsx";
import PurchaseTable from "./pages/PurchaseTable.jsx";
import FacultyRequestInventoryTable from "./pages/FacultyRequestInventoryTable.jsx";
import FacultyIssueInventoryTable from "./pages/FacultyIssueInventoryTable.jsx";
import FacultyViewRequestTable from "./pages/FacultyViewRequestTable.jsx";
import FacultyNotification from "./pages/FacultyNotification.jsx";
import PurchaseInventoryTable from "./pages/PurchaseInventoryTable .jsx";


import ProtectedRoute from "./components/ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },


      {
        path: "/add-new-inventory",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <AddNewInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-inventory",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <AddInventory />
          </ProtectedRoute>
        ),
      },

      {
        path: "/inventory-table",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman", "faculty", "accountant"]}>
            <InventoryTable />
          </ProtectedRoute>
        ),
      },

      {
        path: "/restock-inventory",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <RestockInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory-table",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <IssueInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/request-inventory-table",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <RequestInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin-request-table",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <AdminRequestTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/change-inventory",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <ChangeInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <IssueInventory />
          </ProtectedRoute>
        ),
      },

      {
        path: "/faculty-request-inventory",
        element: (
          <ProtectedRoute allowedRoles={["faculty"]}>
            <FacultyRequestInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/summary",
        element: (
          <ProtectedRoute allowedRoles={["faculty","admin", "storeman"]}>
            <Summary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/threshold",
        element: (
          <ProtectedRoute allowedRoles={["faculty","admin", "storeman"]}>
            <ThreShold />
          </ProtectedRoute>
        ),
      },

      {
        path: "/purchase-table",
        element: (
          <ProtectedRoute allowedRoles={["accountant"]}>
            <PurchaseTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/purchase",
        element: (
          <ProtectedRoute allowedRoles={["accountant"]}>
            <PurchaseInventoryTable />
          </ProtectedRoute>
        ),
      },

      {
        path: "/faculty-issue-inventory-table",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <FacultyIssueInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/faculty-view-request-table",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <FacultyViewRequestTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/faculty-notification",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <FacultyNotification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notify",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <Notify />
          </ProtectedRoute>
        ),
      },
      {
        path: "/faculty-request-inventory-table",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <FacultyRequestInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/report",
        element: (
          <ProtectedRoute allowedRoles={["admin", "storeman"]}>
            <Report />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
