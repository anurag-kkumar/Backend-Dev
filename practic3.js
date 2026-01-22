fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('not found');
    }
    return response.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(error => {
    console.error('error:', error);
  });
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };
console.log(admin);
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());