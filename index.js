const interface=require('readline-sync');

const calculator=require('./app/calculator.js');
 const firtsnumber=interface.question('Ingrese primer numero: ');
 const secondnumber=interface.question('Ingrese segundo numero: ');

 let a=parseInt(firtsnumber);
 let b=parseInt(secondnumber);

 console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
 console.log(`Minus ${a} - ${b} = ${calculator.minus(a,b)}`);
 console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a,b)}`);
 console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);