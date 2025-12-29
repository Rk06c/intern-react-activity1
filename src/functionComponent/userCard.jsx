import React from 'react';

function UserCard({ name, age, country, imag }) {
  
  
  return (
    <>
      <img src={imag} alt={name} width="150" height="150" /> 
      {/* <h2>User Card Component</h2> */}
      <ol type='1'>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Country: {country}</li>
      </ol>
    </>
  );
}

export default UserCard;