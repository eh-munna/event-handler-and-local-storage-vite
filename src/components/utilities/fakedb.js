// use local storage to manage data
// const addToDb = (id) => {
//   const quantity = localStorage.getItem(id);
//   // localStorage.getItem(key) will return value with that key
//   if (quantity) {
//     const newQuantity = parseInt(quantity) + 1;
//     // if there is something then will add another item
//     localStorage.setItem(id, newQuantity);
//     // set the new item on the storage
//   } else {
//     localStorage.setItem(id, 1);
//   }
// };

const addToDb = (id) => {
  let shoppingCart = {};

  const quantity = shoppingCart[id];
  // we pass id as key to access the value of the object

  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
    // shoppingCart[id] is key and newQuantity is value
  } else {
    shoppingCart[id] = 1;
    // shoppingCart[id] is key and 1 is value
  }

  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

export { addToDb };
