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
import ProtectedRoute from "./components/ProtectedRouter";
import SignUp from "./pages/SignUp.jsx";
import Notify from "./pages/Notify.jsx";
import PurchaseTable from "./pages/PurchaseTable.jsx";
import FacultyRequestInventoryTable from "./pages/FacultyRequestInventoryTable.jsx";
import FacultyIssueInventoryTable from "./pages/FacultyIssueInventoryTable.jsx";
import FacultyViewRequestTable from "./pages/FacultyViewRequestTable.jsx";
import FacultyNotification from "./pages/FacultyNotification.jsx";
import PurchaseInventoryTable from "./pages/PurchaseInventoryTable .jsx";

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
        path: "/restock-inventory",
        element: (
          <ProtectedRoute>
            <RestockInventory />
          </ProtectedRoute>
        ),
      },

      {
        path: "/inventory-table",
        element: (
          <ProtectedRoute>
            <InventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory-table",
        element: (
          <ProtectedRoute>
            <IssueInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/request-inventory-table",
        element: (
          <ProtectedRoute>
            <RequestInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin-request-table",
        element: (
          <ProtectedRoute>
            <AdminRequestTable />
          </ProtectedRoute>
        ),
      },


      {
        path: "/change-inventory",
        element: (
          <ProtectedRoute>
            <ChangeInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory",
        element: (
          <ProtectedRoute>
            <IssueInventory />
          </ProtectedRoute>
        ),
      },
      // {
      //   path: "/return-inventory",
      //   element: (
      //     <ProtectedRoute>
      //       <ReturnInventory />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/purchase-table",
        element: (
          <ProtectedRoute>
            <PurchaseTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/purchase-inventory-table",
        element: (
          <ProtectedRoute>
            <PurchaseInventoryTable />
          </ProtectedRoute>
        ),
      },

      {
        path: "/faculty-issue-inventory-table",
        element: (
          <ProtectedRoute>
            <FacultyIssueInventoryTable />
          </ProtectedRoute>
        ),
      },

      {
        path: "/faculty-view-request-table",
        element: (
          <ProtectedRoute>
            <FacultyViewRequestTable />
          </ProtectedRoute>
        ),
      },

      {
        path: "/faculty-request-inventory",
        element: (
          <ProtectedRoute>
            <FacultyRequestInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/faculty-notification",
        element: (
          <ProtectedRoute>
            <FacultyNotification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notify",
        element: (
          <ProtectedRoute>
            <Notify />
          </ProtectedRoute>
        ),
      },
      {
        path: "/faculty-request-inventory-table",
        element: (
          <ProtectedRoute>
            <FacultyRequestInventoryTable />
          </ProtectedRoute>
        ),
      },

      {
        path: "/report",
        element: (
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        ),
      },
      {
        path: "/summary",
        element: (
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/threshold",
        element: (
          <ProtectedRoute>
            <ThreShold />
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