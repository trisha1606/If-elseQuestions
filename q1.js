
//leap year and century check
function checkLeapYearAndCentury(y) {
  const isLeap =
    (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  const century = Math.floor((y - 1) / 100) + 1;
// Print results
  console.log(` ${y} is ${isLeap ? '' : 'not '}a leap year.`);
  console.log(`It falls in the ${century} century.`);
}
console.log(checkLeapYearAndCentury(2020));
