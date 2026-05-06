describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	//TC_1
	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	// TC_2
	it('should return 1 for a string of "1"', function() {
		expect(calculator.add('1')).toEqual(1);
	});
});
