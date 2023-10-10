for(a = 0; a<10; a++) {
  

}
function exampleCallback(a, b) {
  return a * b;
  }

  function one(a, b, callback) {
    return callback(a, b);
  }
  
  for(i=1; i<10; i++) {
  let testOne = one(20, i, exampleCallback)
  }



const box =[
setTimeout(function() {
  console.log("ㅡ");
}, 400),
setTimeout(function() {
  console.log(" |");
}, 450),
setTimeout(function() {
  console.log("ㅡㅡ");
}, 500),
setTimeout(function() {
  console.log("    |");
}, 550),
setTimeout(function() {
  console.log("ㅡㅡㅡㅡ");
}, 600),
setTimeout(function() {
  console.log("       |");
}, 650),
setTimeout(function() {
  console.log("ㅡㅡㅡㅡㅡ");
}, 700),
setTimeout(function() {
  console.log("          |");
}, 750),
setTimeout(function() {
  console.log("ㅡㅡㅡㅡㅡ");
}, 800),
setTimeout(function() {
  console.log("       |");
}, 850),
setTimeout(function() {
  console.log("ㅡㅡㅡㅡ");
}, 900),
setTimeout(function() {
  console.log("    |");
}, 950),
setTimeout(function() {
  console.log("ㅡㅡ");
}, 1000),
setTimeout(function() {
  console.log(" |");
}, 1050),
setTimeout(function() {
  console.log("ㅡ");
}, 1100)]
// }
// console.log(i)

for(i=0; i<10; i++) {
  console.log(box)
}