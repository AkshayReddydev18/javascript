function pri(num) {
  if (num > 1) {
    c = 0;

    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        console.log(num + " is not a prime");
        c++;
        break;
      }
    }
    if (c == 0) {
      console.log(num + " is a prime");
    }
  } else {
    console.log("enter a valid number");
  }
}
pri(5);
pri(7);
pri(8);
pri(97);
pri(1);
