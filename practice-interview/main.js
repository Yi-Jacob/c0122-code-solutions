function getRangeReport(start, end) {
  var total = 0;
  var range = [];
  for (var i = start; i <= end; i++) {
    range.push(i);
    total += i;
  }
  var odds = [];
  var evens = [];
  for (i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    } else odds.push(i);
  }
  var average = total / ((end - start) + 1);
  var report = {
    total, odds, evens, range, average
  };
  return report;
}
getRangeReport();
