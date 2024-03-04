// lower case 
var personName = "Sonia";
console.log("lowercase:", personName.toLowerCase());
//uper case
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
