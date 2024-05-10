let upperData = "ASDFGHJKLPOIUYTREWQZXCVBNM";
let lowerData = "asdfghjklpoiuytrewqzxcvbnm";
let numData = "0123456789";
let symData = "!@#$%^&*()";

let passwordInput = document.getElementById("passwordInput");
let passwordlength = document.getElementById("passwordlength");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let num = document.getElementById("num");
let sym = document.getElementById("sym");

function generateNum(data) {
   return data[Math.floor(Math.random() * data.length)];
}

function generate(password = "") {
   if (upper.checked) {
      password += generateNum(upperData);
   }
   if (lower.checked) {
      password += generateNum(lowerData);
   }
   if (num.checked) {
      password += generateNum(numData);
   }
   if (sym.checked) {
      password += generateNum(symData);
   }
   if (password.length < passwordlength.value) {
      return generate(password);
   }
   console.log(password);
   passwordInput.value = password;
}

function myFun() {
   generate();
}

function copy(){
   alert("Text Copied")
}




