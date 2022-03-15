

function gess(){
   var x = document.getElementById("GuesNo");
   let d = document.getElementById("LuckyNo").textContent;

   let y = (Math.floor(Math.random() * 10));
   if (x.innerHTML !== y) {
       x.innerHTML = y;
   } else {
       x.innerHTML = "Click to See Your Number";
   }

   if (x.innerHTML === d) {
      alert("Congrats You Won...!")
      luckyno();
   }

}

function luckyno(){
   var x = document.getElementById("LuckyNo");
     let y = (Math.floor(Math.random() * 10));
   if (x.innerHTML !== y) {
       x.innerHTML = y;
   } else {
       x.innerHTML = "Try again !..";
   }
   
}
 