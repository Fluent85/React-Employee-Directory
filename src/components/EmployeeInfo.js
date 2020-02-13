import React from "react";
import EmployeeList from "../data/employees.json";

function EmployeeInfo(props) {
  console.log(props)

  const results = EmployeeList.filter(employee => 
    employee.firstName.toLowerCase().includes(props.search.toLowerCase()) 
  || employee.lastName.toLowerCase().includes(props.search.toLowerCase())
  || employee.position.toLowerCase().includes(props.search.toLowerCase())
  || employee.employmentYear.toLowerCase().includes(props.search.toLowerCase())
  );

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Featured Employees</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.firstName}</b> {result.lastName} {result.employmentYear} {result.position}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

// statement-true-or-false ? this-will-run-if-true : this-will-run-if-false

export default EmployeeInfo;
