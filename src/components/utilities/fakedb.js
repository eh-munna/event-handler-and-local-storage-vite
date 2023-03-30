// use local storage to manage data
const addToDb = (id) => {
  localStorage.setItem(id, 1);
};
export { addToDb };
