function clr(){
    document.getElementById("result").value="";
  }
  function display(val){
   document.getElementById("result").value+=val;
  }
  function equate(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
  }
  window.onload=function(){
    quotes = [
      "Mathematics: the language of patterns.",
      "Numbers unlock the universe.",
      "Mathematics: logic in motion.",
      "Equations shape reality.",
      "Geometry: art in shapes.",
      "Numbers speak truths.",
      "Math: solving mysteries.",
      "Algebra: find x's value.",
      "Mathematics: order from chaos.",
      "Math: endless exploration.",
      "Math: where magic becomes logical.",
      "Numbers: the world's secret code.",
      "Geometry: shapes of imagination.",
      "Mathematics: bridges to understanding.",
      "Equations: the language of change.",
      "Math: endless puzzles to solve.",
      "Numbers: tools of discovery.",
      "Mathematics: thinking in patterns.",
      "Geometry: art of dimensions.",
      "Math: unlocking mysteries."
  ]
  
    const a=Math.floor(0+Math.random()*(19-0+1));
    const a1=document.getElementById("q1");
    a1.textContent=quotes[a];
    
  }