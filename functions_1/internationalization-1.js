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
