let defuseEl=document.getElementById("defuser");
      let timerEl=document.getElementById("timer");
      let countdown=10;

      let uniqueId=setInterval(function(){
        countdown=countdown-1;
        timerEl.textContent=countdown;
        if(countdown===0)
        {
          timerEl.textContent="BOOM";
          clearInterval(uniqueId);
        }
      },1000);

       defuseEl.addEventListener("keydown",function(event) {
        let bombDefuserText=defuseEl.value;                                                             
        if(event.key==="Enter" && bombDefuserText==="defuse" && countdown!=0)
        {
          timerEl.textContent="you did it!";
          clearInterval(uniqueId);
        }
       });