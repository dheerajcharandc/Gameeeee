function rules() {
    document.getElementById("myrule").style.display = "block";
  }
function closeRule() {
    document.getElementById("myrule").style.display = "none";
  }
  const options={
    "rock":"assets/rock.png",
    "paper":"assets/paper.png",
    "scissor":"assets/scissor.png"
  }
  let C_Score=0 ;let Y_Score=0;

  const pickButton=(button)=>{
    setTimeout(()=>{
        let buttons=document.querySelector(".buttons");
        buttons.style.display="none";
        let results=document.querySelector(".results");
        results.style.display="flex";
        document.getElementById("wepick").src=options[button];
        let cp= pcpick();
        final_result(button,cp)},200)
    }
  const pcpick=()=>{
    let option=["rock","paper","scissor"];
    let k=Math.round(Math.random()*3);
    let cp=option[k];
    document.getElementById("pcpick").src=options[cp];
    return cp;
  }

  const MakeResult=(result)=>{
    document.querySelector(".result h1").innerText=result;
  }
  const YScore=(score)=>{
    document.querySelector(".y-scores h1").innerText=score;
    document.querySelector(".result h2").style.display="flex";
  }
  const CScore=(score)=>{
    document.querySelector(".c-scores h1").innerText=score;
    document.querySelector(".result h2").style.display="flex";
  }

  const final_result=(user,cp)=>{
    
    if (user == "paper" && cp =="rock") {
      MakeResult("YOU WIN");
      Y_Score++;
      YScore(Y_Score);
      document.querySelector(".next").style.display="flex"
    }
    else if (user == "paper" && cp == "scissor") {
      MakeResult("YOU LOSE");
      C_Score++;
      CScore(C_Score);
    }
    else if (user == "paper" && cp == "paper") {
      MakeResult("TIE UP");
      document.querySelector(".result h2").style.display="none";
    }
    else if (user == "rock" && cp == "scissor") {
      MakeResult("YOU WIN");
      Y_Score++;
      YScore(Y_Score);
      document.querySelector(".next").style.display="flex"
    }
    else if (user == "rock" && cp == "paper") {
      MakeResult("YOU LOSE");
      C_Score++;
      CScore(C_Score);
     
    }
    else if (user == "rock" && cp == "rock") {
      MakeResult("TIE UP");
      document.querySelector(".result h2").style.display="none";
    }
    else if (user == "scissor" && cp == "scissor") {
      MakeResult("TIE UP");
      document.querySelector(".result h2").style.display="none";
    }
    else if (user == "scissor" && cp == "rock") {
      MakeResult("YOU LOSE"); 
      C_Score++;
      CScore(C_Score);
    }
    else if (user == "scissor" && cp == "paper") {
      MakeResult("YOU WIN");
      Y_Score++;
      YScore(Y_Score);
      document.querySelector(".next").style.display="flex"
    }
  };
  const playAgain=()=>{
    let buttons=document.querySelector(".buttons");
        buttons.style.display="flex";
    let results=document.querySelector(".results");
        results.style.display="none";   
 }
const full=document.querySelector("#full");
const winner=document.querySelector("#winner")
 const nextpage=()=>{
  full.style.display="none";
  winner.style.display = "flex";
  document.querySelector(".next").style.display="none";
 }
 const reset = () => {
  winner.style.display = "none";
  full.style.display="flex";
  let buttons=document.querySelector(".buttons");
  buttons.style.display="flex";
let results=document.querySelector(".results");
  results.style.display="none"; 
};
  
  