function staggeredCase(string) {
  let count = 0;

  return [...string].map(char => {

    if (/[a-z]/i.test(char)) count += 1;
    
    return count % 2 === 0 ? char.toLowerCase() : char.toUpperCase();

  }).join('');
}

function staggeredCase(text) {
  return text.replace(/([^a-z]*[a-z])([^a-z]*[a-z])/gi, (_, first, second) => {
    return first.toUpperCase() + second.toLowerCase();
  });
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"