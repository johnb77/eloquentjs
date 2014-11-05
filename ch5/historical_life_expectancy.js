function groupBy(array, groupfunc) {
  var groups = {};
  array.forEach(function(p) {
    var group = groupfunc(p);
    if (!(group in groups)) {
      groups[group] = [];
    }
    groups[group].push(p);
  });
  return groups;
}
var groups = groupBy(ancestry, function(p) {
  return Math.ceil(p.died / 100);
});

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}
for (var group in groups) {
  console.log(group, average(groups[group].map(function(p) {
    return p.died - p.born;
  })));
}
