describe("Airport", function(){
	var airport;
	beforeEach(function(){
		airport = new Airport();
	});
	it("Checks if the airport is empty", function(){
		expect(airport.planes).toEqual([]);
	});
});
