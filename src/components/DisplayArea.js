import React from "react";
import "../styles/DisplayArea.css";

function DisplayArea({ employees, handleSort }) {
  return (
    <table>
      <thead>
        <tr>
            <th className="tableColumns"
             onClick={() => {
                handleSort("name");
            }}
            >
                Name</th>
          <th className="tableColumns">Email</th>
          <th className="tableColumns">Date of Birth</th>
          <th className="tableColumns">Phone Number</th>
          <th className="tableColumns">Image</th>
        </tr>
      </thead>
      <tbody>
        {employees[0] !== undefined && employees[0].id !== undefined ? (
          employees.map((employees) => {
            return (
              <tr>
                <td className="tableData">
                  {employees.name.title} {employees.name.first}{" "}
                  {employees.name.last}
                </td>
                <td className="tableData">{employees.email}</td>
                <td className="tableData">{employees.dob.date.split("").slice(0, 10).join("")}</td>
                <td className="tableData">{employees.phone}</td>
                <td className="tableData">
                  <img src={employees.picture.thumbnail} alt="Profile" />
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}
export default DisplayArea;