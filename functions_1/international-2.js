const extractLanguage = (locale) => {
  return locale.split('_')[0];
}

const extractRegion = (locale) => {
  return locale.split('.')[0].split('_')[1];
}

const multilingualGreeter = (code) => {
  switch (code) {
    case 'en':
      return 'Hi!';
    case 'fr':
      return 'Salut!';
    case 'pt':
      return 'Ola!';
    default:
      return ';)';
  }
}

const localGreet = (locale) => {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy!';
    default:
      return multilingualGreeter(language);
  }
}
