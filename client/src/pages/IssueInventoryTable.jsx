import React, { useState, useEffect } from "react";
import Instance from "../AxiosConfig";

function IssueInventoryTable() {
  const [issuedInventory, setIssuedInventory] = useState([]);

  useEffect(() => {
    const fetchIssuedInventory = async () => {
      try {
        const response = await Instance.get("/add/getIssuedInventory");
        const filteredData = response.data.filter(
          (category) => category.issuedItems && category.issuedItems.length > 0
        );
        setIssuedInventory(filteredData);
      } catch (error) {
        console.error("Error fetching issued inventory:", error);
      }
    };

    fetchIssuedInventory();
  }, []);

  useEffect(() => {
    
    console.log("Updated issuedInventory:", issuedInventory);
  }, [issuedInventory]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="wrapper">
      <div className="main flex items-start justify-center"></div>
      <div className="mt-10 text-black p-10">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Issued Inventory Table
        </h2>
        <table className="w-full border-collapse border border-blue-900 mt-4 text-black">
          <thead>
            <tr className="bg-blue-800">
              <th className="border text-white px-4 py-2">S.No</th>
              <th className="border text-white px-4 py-2">Item Name</th>
              <th className="border text-white px-4 py-2">Category</th>
              <th className="border text-white px-4 py-2">Department Name</th>
              <th className="border text-white px-4 py-2">Faculty Name</th>
              <th className="border text-white px-4 py-2">Quantity</th>
              <th className="border text-white px-4 py-2">Issued Date</th>
              <th className="border text-white px-4 py-2">Return Status</th>
            </tr>
          </thead>
          <tbody>
            {issuedInventory.length > 0 ? (
              issuedInventory.map((category, categoryIndex) => {
                const letterCount = {};
                return category.issuedItems.map((item, itemIndex) => {
                  const firstLetter = item.itemName.charAt(0).toUpperCase();
                  letterCount[firstLetter] = (letterCount[firstLetter] || 0) + 1;
                  const serialNumber = `${categoryIndex + 1}.${firstLetter}.${letterCount[firstLetter]}`;
                  return (
                    <tr
                      key={`${categoryIndex}-${itemIndex}`}
                      className="text-center bg-blue-100 text-black"
                    >
                      <td className="border border-blue-900 px-4 py-2">
                        {serialNumber}
                      </td>
                      <td className="border border-blue-900 px-4 py-2">
                        {item.itemName}
                      </td>
                      <td className="border border-blue-900 px-4 py-2">
                        {category.category}
                      </td>
                      <td className="border border-blue-900 px-4 py-2">
                        {item.issuedToDept}
                      </td>
                      <td className="border border-blue-900 px-4 py-2">
                        {item.issuedToFaculty}
                      </td>
                      <td className="border border-blue-900 px-4 py-2">
                        {item.issuedQty}
                      </td>
                      <td className="border border-blue-900 px-4 py-2">
                        {formatDate(item.issuedDate)}
                      </td>
                      <td className="border border-blue-900 px-4 py-2">
                        {item.returnStatus}
                      </td>
                    </tr>
                  );
                });
              })
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No issued inventory found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IssueInventoryTable;
