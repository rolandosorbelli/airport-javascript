describe("Plane", function(){
	var plane;
	beforeEach(function(){
		plane = new Plane();
	});
	it("Checks if the plane can land at an airport", function(){
		expect(plane.land).not.toBeUndefined();
	});
});
