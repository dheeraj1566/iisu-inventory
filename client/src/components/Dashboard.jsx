import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Instance from "../AxiosConfig";

function Dashboard() {
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchUserRole();
  }, []);

  const fetchUserRole = async () => {
    try {
      const res = await Instance.get("/auth/checkToken");
      setRole(res.data.role);
      console.log("User Role:", res.data.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  const getRoleHeading = () => {
    if (!role) return "Dashboard";
    return `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard`;
  };

  return (
    <div className="left_side bg-blue-950 text-amber-50 fixed z-1 w-1/6 h-full overflow-y-auto">
      <div className="dashboard">
        <h1 className="bg-blue-900 text-center font-bold text-2xl px-6 py-4">
          {getRoleHeading()}
        </h1>

        <ul className="text-sm">
          {/* Common for all */}
          <Link to="/inventory-table"><li className="nav-item">Inventory Table</li></Link>
          <Link to="/summary"><li className="nav-item">Summary</li></Link>

          {/* Admin + Storeman */}
          {(role === "admin" || role === "storeman") && (
            <>
              <Link to="/add-new-inventory"><li className="nav-item">Add New Inventory</li></Link>
              <Link to="/add-inventory"><li className="nav-item">Add Inventory</li></Link>
              <Link to="/restock-inventory"><li className="nav-item">Restock Inventory</li></Link>
              <Link to="/issue-inventory"><li className="nav-item">Issue Inventory</li></Link>
              <Link to="/issue-inventory-table"><li className="nav-item">Issued Inventory Table</li></Link>
              <Link to="/request-inventory-table"><li className="nav-item">Request Inventory Table</li></Link>
              <Link to="/admin-request-table"><li className="nav-item">Admin Request Table</li></Link>
              <Link to="/change-inventory"><li className="nav-item">Change Inventory</li></Link>
              <Link to="/faculty-issue-inventory-table"><li className="nav-item">Faculty Issue Table</li></Link>
              <Link to="/faculty-view-request-table"><li className="nav-item">Faculty View Request</li></Link>
              <Link to="/faculty-notification"><li className="nav-item">Faculty Notifications</li></Link>
              <Link to="/notify"><li className="nav-item">Send Notification</li></Link>
              <Link to="/faculty-request-inventory-table"><li className="nav-item">Faculty Request Table</li></Link>
              <Link to="/report"><li className="nav-item">Report</li></Link>
            </>
          )}

          {/* Admin Only */}
          {role === "admin" && (
            <Link to="/threshold"><li className="nav-item">Threshold</li></Link>
          )}

          {/* Faculty Only */}
          {role === "faculty" && (
            <>
              <Link to="/faculty-request-inventory"><li className="nav-item">Request Inventory</li></Link>
              <Link to="/threshold"><li className="nav-item">Threshold</li></Link>
            </>
          )}

          {/* Accountant Only */}
          {role === "accountant" && (
            <>
              <Link to="/purchase"><li className="nav-item">Purchase Inventory</li></Link>
              <Link to="/purchase-table"><li className="nav-item">Purchase Table</li></Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
