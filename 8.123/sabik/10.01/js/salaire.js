var taxes = 0 ; 
var salaire = 0 ;
var salaire = prompt("what is your salaire?")

if (salaire < 25000){taxes = salaire* 0.1}
else  if (salaire < 50000 ){taxes = (salaire-25000)*0.2 + 2500}
else if ( salaire < 100000 ){taxes = (salaire-50000)*0.3 + 7500}
else if (salaire < 150000){taxes = (salaire -100000)*0.4 + 22500 }
else if  (salaire > 150000) {taxes = (salaire-150000)*0.5 + 42500}


var message = " if your salaire is " + salaire + " you need to pay " + taxes ; 
alert(message);