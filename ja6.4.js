let shipping_area = 1;
let shipping_cost;
switch (shipping_area) {
  case 1:
    shipping_area = "north_america";
    shipping_cost = "$10";
    break;
  case 2:
    shipping_area = "south_america";
    shipping_cost = "$20";
    break;
  case 3:
    shipping_area = "europe";
    shipping_cost = "$30";
    break;
  case 4:
    shipping_area = "asia";
    shipping_cost = "$40";
    break;
  case 5:
    shipping_area = "australia";
    shipping_cost = "$50";
    break;
}
console.log(shipping_area + "==" + shipping_cost);
