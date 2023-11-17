export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
// export const featuring = (store) => (next) => (actionFeaturing) => {
//   const featured = [{ name: "jose orihuela" }, ...actionFeaturing.payload];
//   const updatedAction = {
//     ...actionFeaturing,
//     payload: featured,
//   };
//   console.log(updatedAction);
//   next(updatedAction);
// };
