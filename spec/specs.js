describe('triangleType', function() {
  it("is equilateral triangle if all sides are equal", function() {
    expect(triangleType(10, 10, 10)).to.equal("equilateral");
  });

  it("is isosceles triangle if two sides are equal", function() {
    expect(triangleType(10, 10, 12)).to.equal("isoscles");
  });

  it("is scalene triangle if no sides are equal", function() {
    expect(triangleType(10, 12, 14)).to.equal("scalene");
  });
});

  describe('isATriangle', function() {
    it ("is not a triangle if one side is larger than the sum of two sides", function(){
      expect(isATriangle(2,2,8)).to.equal("not a triangle");
    });
  });
