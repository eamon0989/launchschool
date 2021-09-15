let ladder = ''
debugger
['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  debugger
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail