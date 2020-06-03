function lifeInWeeks(age) {
    var yearsRemained = 90 - age;
    var days = yearsRemained * 365;
    var weeks = yearsRemained * 52;
    var months = yearsRemained * 12;
  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(45);