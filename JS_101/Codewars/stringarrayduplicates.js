/* In this Kata, you will be given an array of strings and your
task is to remove all consecutive duplicate letters from each
string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces. See test cases for more examples.

Input:array of strings

Output: array of strings with consecutive duplicates removed

Rules:
lowercase strings only
alphabetic chars only
if the same char appears twice in a row or more, remove the extra appearances

Algorithm:
  - iterate over the array
    - split each string into chars
    - iterate over the chars
      - if a char is the same as the previous chars, remove the char
      - repeat
    - join the strings back together
  - return the array

 */
function dup(array) {
  return array.map(string => {
    let chars = string.split('');
    for (let index = 1; index <= chars.length; index += 1) {
      if (chars[index] === chars[index - 1]) {
        chars.splice(index, 1);
        index -= 1;
      }
    }

    return chars.join('');
  });
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));//,['codewars','picaniny','hubububo']);
console.log(dup(["abracadabra","allottee","assessee"]));//,['abracadabra','alote','asese']);//
console.log(dup(["kelless","keenness"]));//, ['keles','kenes']);
console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]));//, ['Wolomolo','flodoromonlighters','chuchchi']);
console.log(dup(["adanac","soonness","toolless","ppellee"]));//, ['adanac','sones','toles','pele']);
console.log(dup(["callalloo","feelless","heelless"]));//, ['calalo','feles','heles']);
console.log(dup(["putteellinen","keenness"]));//, ['putelinen','kenes']);
console.log(dup(["kelless","voorraaddoosspullen","achcha"]));//, ['keles','voradospulen','achcha']);