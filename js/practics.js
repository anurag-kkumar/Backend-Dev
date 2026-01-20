// Task 1: The "API Response" Formatter

const rawUsers = [
{ id: 1, name: "Rahul", password: "fb_password", role: "admin" },
{ id: 2, name: "Sanya", password: "123_password", role: "user" },
{ id: 3, name: "Amit", password: "secret_password", role: "user" }
];
const safeUsers=rawUsers.map((val)=>{
  const {password,...newuser}=val;
return newuser;
})
  console.log(safeUsers);
  const filterd=safeUsers.map((user)=>{user.filter(user.role==="admin")})
  console.log(filterd)

