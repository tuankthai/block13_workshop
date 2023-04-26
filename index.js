function checkValue(value) {
	// Get the input value
	// var value = document.getElementById("input").value;

	// decide if value is falsey
	let isFalsy = value == "false" || value === "" || value == "NaN" || value == "null" || value == 0 || value == "undefined";
	let result;

	// console.log(isFalsy);


	// assign different output string according to different falsy values 
	// assign output string true to truthy value
	if (isFalsy) {
		switch (value) {
			case "false":
				result = "The boolean value false is falsy";
				break;
			case "":
				result = "The empty string is falsy (the only falsy string)";
				break;
			case "null":
				result = "The null value is falsy";
				break;
			case "undefined":
				result = "undefined is falsy";
				break;
			case 0:
				result = "The number 0 is falsy (the only falsy number)";
				break;

		}
		// result = expr + " is falsy!";
		// console.log(result);

		// document.getElementById("result").innerHTML = value + " is falsy!";
		// document.getElementById("result").style.color = "red"
	} else {
		// document.getElementById("result").innerHTML = value + " is truthy!";


		result = "true";
		// console.log(result);

	}
	let final = "input: " + value + ", output: " + result;
	return final;
}

console.log("\ntab 1: is truthy\n");
console.log(checkValue("I am a string"));

console.log(checkValue("false"));
console.log(checkValue("null"));
console.log(checkValue("undefined"));
console.log(checkValue(0));
console.log(checkValue(""));


function sum(num1, num2) {
	//I add the two numbers to get the sum
	//then I check the sum to see if it is <-1000,
	//if not I check if it is < 0, for a negative number
	//if not I check if it is equal to zero,
	//if not I check if it is greater than 100
	//if not I check if it is greater than 0

	let sum = num1 + num2;
	let result;

	if (sum < -1000) {
		result = "sum: " + sum + " is less than -1000";
	} else if (sum < 0) {

		result = "sum: " + sum + " is a negative number";

	} else if (sum === 0) {

		result = "sum: " + sum + " is equal to zero";

	} else if (sum > 100) {

		result = "sum: " + sum + " is greater than 100";

	} else if (sum > 0) {

		result = "sum: " + sum + " is greater than zero";

	}
	let final = "num1: " + num1 + ", num2: " + num2 + ", " + result;
	return final;
}

console.log("\ntab 2 : number line\n");
console.log(sum(50, 51));
console.log(sum(99, -2));
console.log(sum(0, 101));
console.log(sum(-500, 500));
console.log(sum(-1001, 0));
console.log(sum(-1000, 0));
console.log(sum(-5, 0));

function greaterOrEqualTo5(num1, num2) {
	//I return true if both num1 and num2 are both >= 5
	//if not, I return false

	let result;

	if (num1 >= 5 && num2 >= 5) {
		result = true;
	} else {
		result = false;
	}
	let final = "num1: " + num1 + ", num2: " + num2 + ", result : " + result;
	return final;
}

console.log("\ntab 3: both parameters are greater or equal to 5\n");
console.log(greaterOrEqualTo5(5, 6));
console.log(greaterOrEqualTo5(0, 0));
console.log(greaterOrEqualTo5(1000, -1000));
console.log(greaterOrEqualTo5(6, 4));
console.log(greaterOrEqualTo5(5, 5));


function pairAndCompare(pair1A, pair1B, pair2A, pair2B) {

	//check if either pair1  or pair2 is strictly equal, if it is, return true
	//else return false
	let result;

	if (pair1A === pair1B) {		
		result = true;
	} else if (pair2A === pair2B) {	
		result = true;
	} else {	
		result = false;
	}
	console.log({pair1A},{pair1B},{pair2A},{pair2B});
	
	let final = "result: " + result + "\n"
	
	return final;

}

console.log("\ntab 4: is at least one pair strictly equal?\n");

console.log(pairAndCompare("cat", "cat", 6, "6"));
console.log(pairAndCompare("five", 5, "dog", "dawg"));
console.log(pairAndCompare(0, false, "horse", "horse"));
console.log(pairAndCompare("eight", "eight", "ate", "ate"));
console.log(pairAndCompare(11, "eleven", "four", "for"));
console.log(pairAndCompare("cake", "cake", "pie", "pie"));

