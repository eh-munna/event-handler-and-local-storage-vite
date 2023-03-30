import React, { useEffect, useState } from 'react';
import './Cosmetics.css';
import add from '../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

// const products = [
//   { id: 1, name: 'MacBook', price: 2400 },
//   { id: 2, name: 'iPad', price: 1100 },
//   { id: 3, name: 'iPhone', price: 1249 },
//   { id: 4, name: 'AirPods', price: 247 },
//   { id: 5, name: 'MagicMouse', price: 105 },
//   { id: 6, name: 'MagicKeyboard', price: 95 },
// ];

// const Cosmetics = () => {
//   return (
//     <div>
//       <h3>Total : {add(2, 5)}</h3>
//       {products.map((product) => (
//         <Cosmetic product={product} key={product.id}></Cosmetic>
//       ))}
//     </div>
//   );
// };

const Cosmetics = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return (
    <div
      style={{
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
      }}
    >
      {customers.map((customer) => (
        <Cosmetic key={customer.id} customer={customer}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
