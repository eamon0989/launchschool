//Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

function localGreet(locale) {
  let country = locale.split('.')[0].split('_')[1];
  switch (country) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    case 'FR': return 'Salut!';
    case 'CA': return 'Salut!';
    case 'MA': return 'Salut!';
    case 'PT': return 'Olá!';
    case 'DE': return 'Hallo!';
    case 'SV': return 'Hej!';
    case 'AF': return 'Haai!';
    default: return 'No idea where you are from!';
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

