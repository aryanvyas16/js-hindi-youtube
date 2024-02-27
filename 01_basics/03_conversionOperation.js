//let score=" 33abc"  //giving NaN as output ie. not a No. but when type asked it will give no.
//let score=null;  //willgive output as 0 after conversion
//let score=true;  // 1
//let score = false //0
// let score=undefined;   //NaN   
let score= "Aryan";         //NaN

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log( ( (valueInNumber))) ;

//"33" -> 33
//"33abc"-> NaN
//true -> 1
//false ->0

let isLoggedIn =0;
let BooleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(BooleanIsLoggedIn);

// agr 1 hai toh true
//0 hai toh false
// (empty string hai toh) " "-> false
// (empty nhi hai toh)"Aryan"-> true

let someNumber=33;
let StringSomeNumber=String(someNumber);
console.log(StringSomeNumber);
console.log(typeof StringSomeNumber);

//so converted to string


