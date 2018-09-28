// arguments object- no longer bound with arrow functions

// const add = function (a,b) {
//   console.log(arguments) //no longer have access
// return a + b;
// }

// const add2 = (a,b) => {
//   console.log(arguments) // arguments is not defined, doesn't work
//   return a+b;
// }

// console.log(add(55,1,1001))
// console.log(add2(55, 1, 1001))

// this keyword- no longer bound

const user = {
	name: 'Michael',
	cities: ['Charlotte', 'Columbus', 'Akron'],
	printPlacesLived: function() {
		// want to use Es5 function because with Arrow it goes up to parent scope and crashes
		// can also do this printPlacesLived (){
		const cityMessages = this.cities.map(city => {
			return this.name + ' has lived in ' + city + '!';
		});
		return cityMessages;
		console.log(this.cities);
		console.log(this.name);
		const that = this; //cool work around since this isn't availble down below

		// this.cities.forEach(city => {
		// 	console.log(this.name + 'has lived in ' + city); //with this.name it crashes with that.name it works.
		// });
	}
};
//dont want to use

console.log(user.printPlacesLived());

const multiplier = {
	numbers: [1, 2, 3],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map(number => {
			return number * this.multiplyBy;
		});
	}
};
console.log(multiplier.multiply());
