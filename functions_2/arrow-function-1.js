const template = 'I VERB NOUN.';

const sentence = (verb, noun) => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('love', 'apples'));
