


/*var age = prompt("what is your age?");
var fName = prompt ("what your  name?");
var message = "My name is " + fName + " and I am "+ age + " years old ";
alert(message);


var legal = confirm("Are you over 18?");
alert(legal);

Math.random() 
Math.round()



var num = Math.random() * 1000 ; // 587,4125
var whole = Math.trunc(num) ;// 587 
var dec =  num- whole; // 0,4125
var message = "The whole number is: " + whole + ". And the decimal is : " + dec 

alert(message); 



var num =  parseInt ("999.888") + 5  ;
alert(num);

var num = prompt ("Enter a number"); // "10"
var ans = parseInt(num) + 5 ;
alert(ans) ; 

var access = "denied";
var legal = confirm ("please confirm that you are over 18");
if (legal === true) {
    access = "garented";
}
var message = " your access to the club is " + access;
alert(message); 


var menu = "steak";
var carnivore  = confirm("Please confirm that your are not  vegetarian");
if (carnivore === false){
var alergic = confirm ("Are you alergic to chickpease ?");
if (alergic ===true)  {menu = "salad";
}
else { menu = "falafel and humus" ;}}

var message = "Welcome , your  " + menu + "is almost served" ; 
alert(message); 


var menu = "";
var carnivore  = confirm("Please confirm that your are not  vegetarian");
if (carnivore === true ){
menu = "steak";}
else if (confirm("Are uou alergic to chickpeas?")=== true) {menu = "salad";}

else { menu = "falafel and humus";}
var mess = "Welcome , your" + menu + "is almost served.";

alert(message); */

var fname="";
var blue = false ;
var index = 0 ;
while (fname!== "david") {
    index++; 
    fname = prompt("What is your name")
    if (fname=== "david"){ 
    blue = confirm("Please press OK if your eyes are blue.") ; 
    if ( blue === true ){break ;} }}
alert( "It took" + index + "tries until we found him !!");

