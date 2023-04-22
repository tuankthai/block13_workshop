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
	return result;
}

console.log(checkValue("false"));
console.log(checkValue(""));
console.log(checkValue(0));
console.log(checkValue("null"));
console.log(checkValue("undefined"));
console.log(checkValue("I am a string"));