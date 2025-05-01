import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Instance from "../AxiosConfig";

function Dashboard() {
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await Instance.get("/auth/checkToken");
      setRole(res.data.role); 
      console.log(res.data.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  // Capitalize role for heading
  const getRoleHeading = () => {
    if (!role) return "Dashboard";
    return `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard`;
  };

  return (
    <div className="left_side bg-blue-950 text-amber-50 fixed z-1 w-1/6 h-full">
      <div className="dashboard">
        <h1 className="bg-blue-900 text-center font-bold text-3xl px-6 py-5">
          {getRoleHeading()}
        </h1>

        <ul>
          {/* Common Link: All roles can view inventory table */}
          <Link to="/inventory-table">
            <li className="py-3 text-lg hover:font-bold text-blue-50 px-5 border-black border-b-1 hover:bg-gray-50 hover:text-blue-900">
              Inventory Table
            </li>
          </Link>

          {/* Storeman/Admin Access */}
          {(role === "storeman" || role === "admin") && (
            <>
              <Link to="/add-inventory">
                <li className="py-3 text-lg hover:font-bold hover:bg-gray-50 hover:text-blue-900 text-blue-50 px-5 border-black border-b-1">
                  Add Inventory
                </li>
              </Link>

              <Link to="/issue-inventory">
                <li className="py-3 text-lg hover:font-bold text-blue-50 px-5 hover:bg-gray-50 hover:text-blue-900 border-black border-b-1">
                  Issued Inventory
                </li>
              </Link>

              <Link to="/issue-inventory-table">
                <li className="py-3 text-lg hover:font-bold text-blue-50 px-5 hover:bg-gray-50 hover:text-blue-900 border-black border-b-1">
                  Issued Inventory Table
                </li>
              </Link>
            </>
          )}

          {/* Admin Only Access */}
          {role === "admin" && (
            <Link to="/threshold">
              <li className="py-3 text-lg hover:font-bold hover:bg-gray-50 hover:text-blue-900 text-blue-50 px-5 border-black border-b-1">
                Threshold
              </li>
            </Link>
          )}

          {/* Faculty Only Access */}
          {role === "faculty" && (
            <>
              <Link to="/faculty-request">
                <li className="py-3 text-lg hover:font-bold text-blue-50 px-5 hover:bg-gray-50 hover:text-blue-900 border-black border-b-1">
                  Faculty Request
                </li>
              </Link>
            </>
          )}
        </ul>

        {/* Common Summary Link for All Roles */}
        <ul>
          <Link to="/summary">
            <li className="py-3 text-lg hover:font-bold hover:bg-gray-50 hover:text-blue-900 text-blue-50 px-5 border-black border-b-1">
              Summary
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
