// lower case 
let personName: string ="Sonia"
console.log("lowercase:", personName.toLowerCase());   

//uper case
console.log("uppercase:", personName.toLocaleUpperCase());

//title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));