

        let container_w=document.getElementById("container");
        let contCan=document.getElementById("containerss");
    function UserReg(a){
        
     container_w.style.display="flex";
    }
    function cancel(){
        container_w.style.display="none";
        contCan.style.display="none";
    }
    function CandReg(){
     contCan.style.display="flex";
    }
    

 let cont=document.getElementById("container");
 const showAutoWrite=document.querySelector("#showText");
  const container=['Welcome to Online E Voting System platform.'
  ,'Please kindly SignUp into the platform to proceed',
  'Please make sure you input the correct data into the form else you won`t be allowed to Vote '];
  
  let r=0;
  let l=0;
  let index=0;
  let bucket=container[index];

  function AutoWrite(){
    if(r  > bucket.length){
      setTimeout(AutoWriteDecrease,100);
    }else{
        showAutoWrite.innerHTML=bucket.substring(0,r+=1);
        setTimeout(AutoWrite,50);
    }
  }
  function AutoWriteDecrease(){
     if( r < 0 ){
       if(l < container.length-1){++l}else{l=0;}
       bucket=container[l];
       setTimeout(AutoWrite,100);
     }else{
      
       showAutoWrite.innerHTML=bucket.substring(0,r-=1);
       setTimeout(AutoWriteDecrease,20);
     }
  }
  AutoWrite();
function cancel(){
    //window.open('file:///C:/Users/HP/Desktop/E-vote%20System/E_voting/Error.html');
   // window.onerror( alert("An Error Occurred"));
    cont.style.display="none"
}

function process(){
setTimeout(LoadForm,5000); 
}
function LoadForm(){
  cont.style.display="flex";
    cont.style.opacity="1";
}

process();
function dont_hav(){
  alert("Please your request has be forwarded to Admin incharge pls, wait for a few seconds.. ")
}
