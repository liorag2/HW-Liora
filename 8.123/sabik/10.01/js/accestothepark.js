var access = "denied"; 
var age = "";
var address = "";

 var age = prompt("what is your age ?");
 var address = prompt("what is your address ?");

 if (age > address) { access="garented";}
  else  if (age > address/2 ){ address = address/2;
access= "garented"; }  
 else if (age > address/3 || age %2 == 0) {address = address/3;
access = "garented" ;}

var message = " you access to the park is " + access;
alert ( message);

