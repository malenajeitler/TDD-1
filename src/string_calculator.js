// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if (string_numbers.length == 0) {
		return 0;
	}

	var result = 0;

	if (string_numbers.includes(',')) {
		var numbers = string_numbers.split(',');

		for(var i = 0; i < numbers.length; i++) {
			result += parseInt(numbers[i]);
		}
	} else {
		result = parseInt(string_numbers);
	}

	return result;
};
