function getRangeReport(start, end) {
  this.start = start;
  this.end = end;
}

getRangeReport.prototype.getTotal = function (start, end) {
  return this.start + this.end;
};

getRangeReport.prototype.getOdds = function () {
  var odds = [];
  if (this.start % 2 !== 0) {
    odds.push(this.start);
  } else if (this.end % 2 !== 0) {
    odds.push();
  }
  return odds;
};

getRangeReport.prototype.getEvens = function () {
  var evens = [];
  if (this.start % 2 === 0) {
    evens.push(this.start);
  } else if (this.end % 2 === 0) {
    evens.push(this.end);
  }
  return evens;
};

getRangeReport.prototype.getRange = function () {
  var range = [];
  range.push(this.start);
  range.push(this.end);
  range.sort();
  return range;
};

getRangeReport.prototype.getAverage = function () {
  var average = 0;
  average = this.getTotal() / 2;
  return average;
};
