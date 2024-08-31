function sep(x) {
  arr = x.split(" ").map(Number);
  emp = [];
  dup = [];
  res = 0;
  for (i of arr) {
    if (!emp.includes(i)) {
      emp.push(i);
    }
  }
  for (i of emp) {
    c = 0;
    for (j of arr) {
      if (i == j) {
        c++;
      }
    }
    if (c > 1) {
      dup.push(i);
      res += Math.floor(c / 2);
    }
  }
  console.log(res);
}
sep("30 50 30 50 20 50 50 20 50 50 50");
