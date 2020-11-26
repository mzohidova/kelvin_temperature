const kelvin = 0; // kelvin temperature

let celsius = kelvin - 273; // celsius

let fahrenheit = celsius*(9/5)+32;
  fahrenheit = Math.floor(Math.round(fahrenheit));
  console.log (`The temperature is ${fahrenheit} degrees of Fahrenheit.`)

let newton = celsius * (33/100);
  newton = Math.floor(newton);
  console.log (`The temperature is ${newton} degrees of Newton.`)
