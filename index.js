function calculateTip(billAmount, numberOfPeople, serviceQuality) {
  // Edge cases first — bail out before doing any maths
  if (numberOfPeople <= 0) {
    return "Number of people must be greater than 0";
  }
  if (billAmount < 0) {
    return "Bill amount cannot be negative";
  }

  // Decide the tip rate from service quality
  let tipRate;
  if (serviceQuality === "poor") {
    tipRate = 0.1;
  } else if (serviceQuality === "excellent") {
    tipRate = 0.2;
  } else {
    tipRate = 0.15; // "good", AND anything invalid defaults here
  }

  // The actual calculations
  const totalTip = billAmount * tipRate;
  const totalBill = billAmount + totalTip;
  const tipPerPerson = totalTip / numberOfPeople;
  const totalPerPerson = totalBill / numberOfPeople;

  // Return the object the assignment asked for
  return { tipPerPerson, totalPerPerson, totalBill };
}

console.log(calculateTip(1500, 3, "good"));

calculateGrade([
  { name: "Exam", score: 85, weight: 0.4 },
  { name: "Assignment", score: 90, weight: 0.3 },
  { name: "Project", score: 78, weight: 0.3 },
]);
// → { weightedAverage: 84.4, letterGrade: "A", status: "Pass" }
function calculateGrade(score) {}

console.log(calculateGrade);
