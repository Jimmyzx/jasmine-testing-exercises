


it('should calculate the monthly rate correctly', function() {
  
  const values = {
    amount: 25000,
    years: 5,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('471.78');
});

it('should calculate the monthly rate correctly', function() {
 
  const values = {
    amount: 15000,
    years: 3,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('446.20');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 500000,
    years: 30,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('1975.60');
});