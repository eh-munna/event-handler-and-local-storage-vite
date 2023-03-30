import React from 'react';
import { addToDb } from '../utilities/fakedb';

const Cosmetic = ({ customer }) => {
  // console.log(customer);
  const { id, name, company } = customer;
  const addToStore = (id) => {
    addToDb(id);
  };
  return (
    <div
      style={{ border: '1px solid white', padding: '8px', borderRadius: '6px' }}
    >
      <h3>ID : {id}</h3>
      <h5>Customer name : {name}</h5>
      <h6>Company name : {company}€</h6>
      <button onClick={() => addToStore(id)}>Add to Storage</button>
      {/* <button onClick={() => addToDb(id)}>Add to Database</button> */}
    </div>
  );
};

export default Cosmetic;
