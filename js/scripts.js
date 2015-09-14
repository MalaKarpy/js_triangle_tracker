var triangleType = function(sideA, sideB, sideC) {
   if ((sideA + sideB <= sideC) || (sideB + sideC <= sideA) || (sideA + sideC <= sideB)) {
        return "not a triangle"
      }

      else if ((sideA === sideB) && (sideB === sideC)) {
          return "equilateral"
      }

      else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
      return "isosceles"
      }

      else if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
      return "scalene"
      }
  };


  $(function() {
    $("form#triangle-type").submit(function(event) {
       sideA = parseInt($("input#sideA").val())
       sideB = parseInt($("input#sideB").val())
       sideC = parseInt($("input#sideC").val())

    result = triangleType(sideA, sideB, sideC)

    $(".answer").text(result)

    event.preventDefault();
  });

});
