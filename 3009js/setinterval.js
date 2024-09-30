let z=setInterval(()=>{
  console.log(`2x${x}=${2*x}`);
  x++;
  if(x==11){
  clearInterval(z);
  }

},1000,x=1)
