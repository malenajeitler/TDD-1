describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	//TC_1
	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	//TC_2
	it('should return 1 for a string of "1"', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	//TC_3
	it('should return 3 for a string of "1,2"', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});

	//TC_4
	it('should return 28 for a string of "1,27"', function() {
		expect(calculator.add('1,27')).toEqual(28);
	});

	//TC_5
	it('should return 53 for a string of "15,17,21"', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});
});
