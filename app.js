function generateNum(){
   
   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
   var numCase = "0123456789";
   var specialCase = "!@#$%^&*()";

   var passwordlength = document.getElementById("passwordlength").value;
   var upper = document.getElementById("upperCase").checked;
   var lower = document.getElementById("lowerCase").checked;
   var num = document.getElementById("numCase").checked;
   var special = document.getElementById("specialCase").checked;
   
   var char = "";
   if(upper){
      char += upperCase;
   }
   if(lower){
      char += lowerCase;
   }
   if(num){ 
      char += numCase;
   }
   if(special){
      char += specialCase;
   }
   
   if(char === ""){
         alert("Please select at least one character type...");
         return;
   }

   var password = "";
   for(var i = 0; i < passwordlength; i++){
      var randomNum  =  Math.floor(Math.random()*char.length);
      password += char[randomNum];
   }
   document.getElementById("passwordInput").value = password;
}

function copy(){
   alert("Text Copy")
}
