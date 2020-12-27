export const regexp = /<span[^>]*>[^>]*<\/span>/;

const replaceMathTo = (snippet, word, all) => {
  const regexp = new RegExp('<span[^>]*>[^>]*</span>', all && 'g');
  return snippet.replace(regexp, word);
};

export default replaceMathTo;
