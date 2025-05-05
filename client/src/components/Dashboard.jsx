import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Instance from "../AxiosConfig";

function Dashboard() {
  const [role, setRole] = useState("");
  const location = useLocation();

  useEffect(() => {
    fetchUserRole();
  }, []);

  const fetchUserRole = async () => {
    try {
      const res = await Instance.get("/auth/checkToken");
      setRole(res.data.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  const getRoleHeading = () => {
    if (!role) return "Dashboard";
    return `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard`;
  };

  const getNavItemClass = (path) => {
    return `nav-item px-4 py-2 block ${
      location.pathname === path
        ? "bg-white text-black font-semibold rounded"
        : "hover:bg-blue-800"
    }`;
  };

  return (
    <div className="left_side bg-blue-950 text-amber-50 fixed z-1 w-1/6 h-full overflow-y-auto">
      <div className="dashboard">
        <h1 className="bg-blue-900 text-center font-bold text-2xl px-6 py-4">
          {getRoleHeading()}
        </h1>

        <ul className="text-sm space-y-1">
          <Link to="/inventory-table"><li className={getNavItemClass("/inventory-table")}>Inventory Table</li></Link>
          <Link to="/summary"><li className={getNavItemClass("/summary")}>Summary</li></Link>
          {(role === "admin" || role === "storeman") && (
            <>
              <Link to="/add-new-inventory"><li className={getNavItemClass("/add-new-inventory")}>Add New Inventory</li></Link>
              <Link to="/add-inventory"><li className={getNavItemClass("/add-inventory")}>Add Inventory</li></Link>
              {/* <Link to="/restock-inventory"><li className={getNavItemClass("/restock-inventory")}>Restock Inventory</li></Link> */}
              <Link to="/issue-inventory"><li className={getNavItemClass("/issue-inventory")}>Issue Inventory</li></Link>
              <Link to="/issue-inventory-table"><li className={getNavItemClass("/issue-inventory-table")}>Issued Inventory Table</li></Link>
              <Link to="/request-inventory-table"><li className={getNavItemClass("/request-inventory-table")}>Request Inventory Table</li></Link>
              <Link to="/admin-request-table"><li className={getNavItemClass("/admin-request-table")}>Admin Request Table</li></Link>
              {/* <Link to="/change-inventory"><li className={getNavItemClass("/change-inventory")}>Change Inventory</li></Link> */}
              <Link to="/faculty-issue-inventory-table"><li className={getNavItemClass("/faculty-issue-inventory-table")}>Faculty Issue Table</li></Link>
              <Link to="/faculty-view-request-table"><li className={getNavItemClass("/faculty-view-request-table")}>Faculty View Request</li></Link>
              <Link to="/faculty-notification"><li className={getNavItemClass("/faculty-notification")}>Faculty Notifications</li></Link>
              <Link to="/notify"><li className={getNavItemClass("/notify")}>Send Notification</li></Link>
              <Link to="/faculty-request-inventory-table"><li className={getNavItemClass("/faculty-request-inventory-table")}>Faculty Request Table</li></Link>
              <Link to="/report"><li className={getNavItemClass("/report")}>Report</li></Link>
            </>
          )}

          {/* Admin Only */}
          {role === "admin" && (
            <Link to="/threshold"><li className={getNavItemClass("/threshold")}>Threshold</li></Link>
          )}

          {/* Faculty Only */}
          {role === "faculty" && (
            <>
              <Link to="/faculty-request-inventory"><li className={getNavItemClass("/faculty-request-inventory")}>Request Inventory</li></Link>
              <Link to="/threshold"><li className={getNavItemClass("/threshold")}>Threshold</li></Link>
            </>
          )}

          {/* Accountant Only */}
          {role === "accountant" && (
            <>
              <Link to="/purchase"><li className={getNavItemClass("/purchase")}>Purchase Inventory</li></Link>
              <Link to="/purchase-table"><li className={getNavItemClass("/purchase-table")}>Purchase Table</li></Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
