 // num est undefined car elle néxiste pas on ne lui a pas donne de valeur  du coup ca me donne tant que  ce quón rentre est diff de undefined  tant que num nést pas un vrai num // 


 /* while (!num){
var num = parseInt (prompt ("Enter a number")); //moche

}
var dash = "";
var rev = " "; 

if (num < 0 ){ 
    dash = " - "; 
    num = -num ; 
}
 while ( num != 0 ){ 
    var temp = num % 10 ;// nan 
    rev += temp ;// "nan"
    num = Math.trunc( num/10);// nan 
 }

 alert ( rev + dash); 



for (let i = 0 ; i < 10 ;  i++) { 
    console.log ( "This is my" + (i + 1) + "times in the loop")
}

*/

for (let i = 0 ; i < 10 ; i++) { 
    var num = parseInt(prompt( "Enter a number"))
    console.log((i + 1)+ ") - "+ num ) ;
    if (! num || num < 0) {
        continue; 
    }
 var sum = 0 ;
 while ( num != 0) { 
    var last = num % 10 ;
    sum +=last;
    num = Math.floor (num/10);
 }
 console.log ( "The sum of prompt #" + (i + 1) + "is:" + sum);
 if ( sum === 26) { 
    console.log ( "magic number found !!");
    break;
 }

}
