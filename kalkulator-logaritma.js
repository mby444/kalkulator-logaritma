const output = document.getElementById("output");
let calc = {
  output: [],
  error: "",
  add: (val) => {
    calc.output.push(val);
  },
  del: () => {
    calc.output.pop();
  },
  clear: () => {
    calc.output = [];
  },
  toOutput: () => {
    let out = "";
    for (let i of calc.output){
      out += i;
    }
    output.value = out;
    calc.error != "" ? output.value = calc.error : 0;
    calc.error = "";
  },
  toResult: () => {
    let res = "";
    for (let i of calc.output){
      res += i;
    }
    res = res.replace(/[×]/g, "*");
    res = res.replace(/[÷]/g, "/");
    res = res.replace(/[\<\>\\]/g, "");
    calc.output = [];
    try {
      res = res != "" ? eval(res) : 0;
      res = (Math.round(res * 100000) / 100000).toString();
      for (let i = 0; i < res.length; i++){
        calc.output[i] = res[i];
      }
    } catch(error){
      calc.error = "Input tidak valid";
    }
  }
}
function log(x, y){
  return Math.log(y) / Math.log(x);
}
function add(val){
  calc.add(val);
  calc.toOutput();
}
function del(){
  calc.del();
  calc.toOutput();
}
function clearAll(){
  calc.clear();
  calc.toOutput();
}
function solve(){
  calc.toResult();
  calc.toOutput();
}