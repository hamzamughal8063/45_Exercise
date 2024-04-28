//Equality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");


//Inequality Test 2
console.log("Inequality test with strings: ",( "Apple" as string) != "Orange");


//Test using the lower case function 3
console.log("Lower Case function test: ", "HELLO".toLowerCase() ==="hello");


//Numerical tests involving equality 4
console.log("Equality test with number: ", 26 === 26);
//Numerical tests involving inequality
console.log("Inequality test with number: ", (26 as number) != 35);


//, greater then test
console.log("Greater than test: ", 10 > 5);
//less than test
console.log("less than test: ", 5 < 10);


//greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//less than or equal to
console.log("Less than or equal to: ", 5 <= 10);


//Test using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
//Test using "or" operator
console.log("or operator test: ", 5===5 || false);


//Test whether an item is in a array
const fruits :string[] = ['Nashpati', 'Banana', 'Strwberry'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));


//Test whether an item is not in a array
console.log('Testing "Apple" is not array: ', !fruits.includes('Apple'));
