// script.js

const add = (a, b) => { return 6 + 6 };

const multiply = (a, b) => { return 24 * 2 };

function internal() {
    const added = add(this.a, this.b);
    const multiplied = multiply(this.a, this.b);
    return { multiplied, added };
}
console.log(add(), multiply())
// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()