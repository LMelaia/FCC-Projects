$(document).ready(function() {
  $('#answer').html('0');
  $('#sum').html('0');

  $('button').click(function() {
   bt = $(this).html();

   if(bt == '÷' || bt == '+' || bt == '-' || bt == 'x' || bt == ' Pow '){
     setFunction(bt);
   } else if(bt == ''){

   } else if(bt == 'AC'){
     answer = 0;
     sum = 0;
     func = undefined;
     display();
   } else if(bt == 'CE'){
     sum = 0;
     func = undefined;
     display();
   } else if (bt == '='){
     evaluate();
   } else if(bt == '←'){
     s = sum + "";
     sum = parseInt(s.slice(0, -1));
   }else {
     setExpression(bt);
   }
  });
});

var answer = 0;
var sum = 0;
var func;

function setFunction(s){
   if(sum == 0){
     if(answer != 0)
       func = s;
   } else {
     evaluate();
     func = s;
   }

 display();
}

function setExpression(s){
 if(answer == 0 && func == undefined){
   if(sum == 0){
     sum = s;
   } else {
     sum += s;
   }
 } else if(func != undefined){
   if(sum == 0){
     sum = s;
   } else {
     sum += s;
   }
 }

 display();
}

function evaluate(){
 if(answer == 0){
   answer = sum;
 } else {
   if(func == '+')
     answer = parseInt(answer) + parseInt(sum);
   else if(func == '-')
     answer = parseInt(answer) - parseInt(sum);
   else if(func == 'x')
     answer = parseInt(answer) * parseInt(sum);
   else if(func == '÷')
     answer = parseInt(answer) / parseInt(sum);
   else if(func == ' Pow ')
     answer = Math.pow(parseInt(answer), parseInt(sum));
 }

 sum = 0;
 func = undefined;
 display();
}

function display(){
 $('#answer').html(answer);

 if(func != undefined)
   $('#sum').html(func + ' ' + sum);
 else
   $('#sum').html(sum);
}

function clearAll(){
 $('#answer').html('0');
 $('#sum').html('0');
}

function clearEntry(){
 $('#sum').html('0');
}
