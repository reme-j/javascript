var x = document.body;
var color = ["blue", "green", "yellow", "red"];
setInterval(function() {
   for(let y = 0; y < 4; y++){
    x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
  }
}, 300) ;
