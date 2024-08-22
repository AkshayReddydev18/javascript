let ride_distance = 25;
ride=0;
if(ride_distance>0 && ride_distance<5){

    console.log("$5");
}
else if(ride_distance>5 && ride_distance<10){

    console.log("$10");
}
else if(ride_distance>10 && ride_distance<20){

    console.log("$20");
}else if(ride_distance>20){
    for(i=20;i<ride_distance;){
        ride=ride+i
        console.log(30+(ride_distance-i)*5)
        break; 
    }  
}