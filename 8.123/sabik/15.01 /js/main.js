
const students  = [];
while (!qty) 
{var qty = parseInt(prompt("how many students are there in class")); } // 4  

 for (let i = 0 ; i < qty ; i++ )  { 
   const student = prompt("Please enter student # " + ( i + 1 )); // ferrari , porsh 
   students.push(student);
 }
 students.sort()
 var result = students.join ( "  ,  ")

 
 alert(result.toLowerCase())

  





