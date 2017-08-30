describe("Test:", function(){
	var plane;
	var airport;

	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
	});

	it("Checks if the plane has landed", function(){
		plane.land(airport);
		expect(airport.planes()).toContain(plane);
	});
});