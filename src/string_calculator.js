// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if (string_numbers.includes(',')) {
		if (string_numbers.length > 5) {
			result = parseInt(string_numbers.split(',')[0]) + parseInt(string_numbers.split(',')[1]) + parseInt(string_numbers.split(',')[2]);
		}
		else {
			result = parseInt(string_numbers.split(',')[0]) + parseInt(string_numbers.split(',')[1]);
		}
	} else if (string_numbers.length > 0) {
		result = parseInt(string_numbers);
	} else if (string_numbers.length == 0) {
		return 0;
	}
	return result;
};
