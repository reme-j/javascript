
function myFunction() {
var a = +document.getElementById("id1").value;
var b = +document.getElementById("id2").value;
var result =(a+b);

document.getElementById("demo").innerHTML = result;
}
function myFunction2() {
  var a = +document.getElementById("id3").value;
  var b = +document.getElementById("id4").value;
  var result =(a-b);
  
  document.getElementById("demo2").innerHTML = result;
  }
  
  function myFunction3() {
    var a = +document.getElementById("id5").value;
    var b = +document.getElementById("id6").value;
    var result =(a/b);
    
    document.getElementById("demo3").innerHTML = result;
    }


    function myFunction4() {
      var a = +document.getElementById("id7").value;
      var b = +document.getElementById("id8").value;
      var result =(a*b);
      
      document.getElementById("demo4").innerHTML = result;
      }
      var x = document.body;
var color = ["blue", "green", "yellow", "red"];
setInterval(function() {
   for(let y = 0; y < 4; y++){
    x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
  }
}, 300) ;