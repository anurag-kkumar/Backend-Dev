// syscrornous and asyscn and promises  a

const rawUsers = 
{ id: 2, name: "Rahul", password: "fb_password", role: "admin" }
;



const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rawUsers.id === userId) {
        resolve(rawUsers);
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


  