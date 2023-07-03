
let screen= document.getElementById("screen");

  for(let i=0; i<10; i++){
let clicked = document.querySelectorAll("button")[i];


clicked.addEventListener("click",()=>{
  let clicSound = new Audio();
   clicSound.src="keyPress.wav";
   clicSound.play();
});

}

  

  let one = document.getElementById("1");
  one.addEventListener("click",()=>{
   screen.value+=one.value;
  });
  
  let two = document.getElementById("2");
  two.addEventListener("click",()=>{
   screen.value+=two.value;
  });
  
  let t3 = document.getElementById("3");
  t3.addEventListener("click",()=>{
   screen.value+=t3.value;
  });
  
  let f4 = document.getElementById("4");
  f4.addEventListener("click",()=>{
   screen.value+=f4.value;
  });
  
  let f5 = document.getElementById("5");
  f5.addEventListener("click",()=>{
   screen.value+=f5.value;
  });
   
  let f6 = document.getElementById("6");
  f6.addEventListener("click",()=>{
   screen.value+=f6.value;
  }); 
  
  let s7 = document.getElementById("7");
  s7.addEventListener("click",()=>{
   screen.value+=s7.value;
  }); 
  
  let e8 = document.getElementById("8");
  e8.addEventListener("click",()=>{
   screen.value+=e8.value;
  }); 
  
  let n9 = document.getElementById("9");
  n9.addEventListener("click",()=>{
   screen.value+=n9.value;
  }); 
  
  let z0 = document.getElementById("z0");
  z0.addEventListener("click",()=>{
   screen.value+=z0.value;
  }); 
  
  let pls = document.getElementById("add");
  pls.addEventListener("click",()=>{
   screen.value+=pls.value;
  }); 
  
  let mis = document.getElementById("min");
  mis.addEventListener("click",()=>{
   screen.value+=mis.value;
  }); 
  
  let dv = document.getElementById("div");
  dv.addEventListener("click",()=>{
   screen.value+=dv.value;
  }); 
  
  let mlt  = document.getElementById("mult");
  mlt.addEventListener("click",()=>{
   screen.value+=mlt.value;
  }); 
  
  let C = document.getElementById("clear");
  C.addEventListener("click",()=>{
   screen.value="";
  });
  
  let result = document.getElementById("equlto");
  result.addEventListener("click",()=>{
   screen.value=eval(screen.value);
  });
  
  let bs = document.getElementById("backspace");
  bs.addEventListener("click",()=>{
   screen.value=screen.value.slice(0,-1);
  });
  
  
    