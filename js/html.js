const user ={name:"Anurag",password:"123" }
const user1 =user 
user1.name="aryan";
console.log(user.name);
// spread operator ... 
//rest opereator 
const {password,...data}=user
console.log(data);

const number=[1,2,3,4,5];
const newNumber =number.map((val)=>val*2)
console.log(newNumber);
const sumofNumbers=number.reduce(sum)