var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Cole';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
	const petName = 'Hal';
	return petName;
}

const petName = getPetName();
console.log(petName);
//valid

//Block scoping

var fullName = 'Cole Trew';

if (fullName) {
	var firstName = fullName.split(' ')[0]; //split firstName
	console.log(firstName);
}

//let and const are both block level scoping and can't escape the function variable specific to those blocks.
//when in doubt define above, and then reassign in the block if necessary
//most things should be Const because most values shouldn't be changed. Never using VAR.

console.log(firstName);
//will work
