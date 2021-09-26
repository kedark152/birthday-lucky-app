var date = document.querySelector("#dob");
var buttonCheck = document.querySelector("#btn");
var luckyNumber = document.querySelector("#lucky-number");
var outputImage = document.querySelector("#output");
var message = document.querySelector("#message");
var note = document.querySelector("#note");

buttonCheck.addEventListener("click",luckChecker);
function luckChecker(){
    var clear = "";
    output.innerHTML=clear; //clears the previous output
    message.innerText=clear; //clears the previous message
    note.innerText=clear;
    var dateB = date.value; 
    console.log(dateB, luckyNumber.value);
    
    var str = dateB.replaceAll('-','');
    console.log(str);
    var sum = 0;
    for(i=0;i<str.length;i++){
    var sum = sum + parseInt(str.charAt(i));
    }
  console.log("sum",sum);
  console.log("Lucky number",luckyNumber.value);
   if(sum && (luckyNumber.value> 0 )){ 
    
    if(sum%luckyNumber.value=='0'){
        const resultImg = new Image(300, 250);
        resultImg.src = './Images/lucky.gif';
        output.appendChild(resultImg);
        console.log("lucky");
    }
    else{
        const resultImg = new Image(300, 250);
        resultImg.src = './Images/unlucky.gif';
        output.appendChild(resultImg);
        console.log("unlucky");
    }
  }else{
      message.innerText="Please enter the valid birthday & lucky number"
  }  
}