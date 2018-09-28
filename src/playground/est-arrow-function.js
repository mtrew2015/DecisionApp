// const square = function (x){
//   return x*x;
// }

// console.log(square(3));

// // const squareArrow = (x) =>{
// //   return x*x;
// // };

// const squareArrow = (x) => x*x;
// //can set up like this implicit return when its a single line return.


// //must assign to a variable to arrow functiions since all arrow functions are anonymous functions
// console.log(squareArrow(4));
const fullName = "Michael Trew"
const getFirstNames = name => name.split(' ')[0];

const getFirstNameReg = (name) => {
  return name.split(' ')[0];
}

console.log(getFirstNameReg('Cole Trew'))
console.log(getFirstNames('Michael Trew'));