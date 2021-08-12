let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

//console.log(energy.filter(element => element !== 'fossil'));

energy.shift();
energy.push('geothermal');
console.log(energy)