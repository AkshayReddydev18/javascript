let ride_distance = 23;
if(ride_distance>0 && ride_distance<5){

    console.log("$5");
}
else if(ride_distance>5 && ride_distance<10){

    console.log("$10");
}
else if(ride_distance>10 && ride_distance<20){

    console.log("$20");
}else if(ride_distance>20){
    console.log("$30"+((ride_distance-20)*5));
    
}