function num(x, y) {
  sum=0;
  for (i = x; i <=y; i++) {
    if (i % 2 == 0) {
      sum=sum+i;
    }
  }console.log(sum);
}
num(1, 50);
