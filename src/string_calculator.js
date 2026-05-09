// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if (string_numbers.includes(',')) {
		result = parseInt(string_numbers.split(',')[0]) + parseInt(string_numbers.split(',')[1]);
	}
	 else if (string_numbers.length > 0) {
		result = parseInt(string_numbers);
	}
	return result;
};
