// task1 
const order = { 
  id: 1, 
  productName: "cold drink", 
  address: "flat 01" 
};

const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.id === userId) {
        resolve(order);
      } else {
        reject("User not found");
      }
    }, 1000);
  });
};

fetchUser(1)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
