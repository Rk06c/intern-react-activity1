import React from 'react';

function Employees({ employees, name, age, country }) {
  return (
    <>
      <h1>using props</h1>
      {employees && <p>{employees}</p>}

      {name && (
        <>
          <h2>Employee Details:</h2>
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Country: {country}</li>
          </ul>
        </>
      )}
    </>
  );
}

export default Employees;