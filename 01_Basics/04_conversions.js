console.log("2">1)
console.log("02">1)

console.log(null>0) //comparison operatior like > and < convert null to 0
console.log(null==0)
console.log(null>=0)

console.log(undefined>=0) //undefined will always give false in every case 

/*
In JavaScript:

== → loose equality

Compares two values after type conversion (coercion).

Example:

5 == "5"   // true  (string is converted to number)


=== → strict equality

Compares two values without type conversion (checks both value + type).

Example:

5 === "5"   // false  (number ≠ string)
5 === 5     // true
*/
console.log(2==="2")
console.log(2=="2")