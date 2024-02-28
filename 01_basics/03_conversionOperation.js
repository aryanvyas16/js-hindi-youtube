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
// console.log(StringSomeNumber);
// console.log(typeof StringSomeNumber);

//so converted to string


//***********************************************operationss*******************************************************


let value=3;
let negValue=-3;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);// 2 ki power
// console.log(2/2);
// console.log(2%3);// remainder

let str1 = "Hello"
let str2 = " Aryan"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  //agr string first hai toh sabhi ko string ki tarah treat kiya jayega
// console.log(1 + 2 + "2");   // agr int first hai hai toh pehle int operation karenge uske baad string likhenge
// console.log((3+4)*4/5);  //using bracet is a good practise

// console.log(+true);
// console.log(+"");

let num1 ,num2, num3
num1 , num2 , num3 =2+2;

let gameCounter=100;
// gameCounter++;  //postfix ->isme pehle value assign hoti hai uske baad increment hota hai
++gameCounter;      //prefix ->isme pehle increment hota hai uske baad value assign hoti hai
console.log(gameCounter);



