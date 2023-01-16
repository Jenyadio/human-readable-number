module.exports = function toReadable (number) {
  const fromOneToNineteen = ['','one','two','three','four', 'five','six','seven','eight','nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  let word;

  const numStr = number.toString();

  if(number === 0) {
    return word = 'zero';
  }

  if(number < 20) {
    word = fromOneToNineteen[number];
  } else if(numStr.length === 3 && +numStr[1] === 0) {
    word = fromOneToNineteen[numStr[0]] + ' hundred ' + fromOneToNineteen[numStr[2]];
  } else if(numStr.length === 3 && +numStr[1] !== 1) {
    word = fromOneToNineteen[numStr[0]] + ' hundred ' + tens[numStr[1]] + ' ' + fromOneToNineteen[numStr[2]];
  } else if(numStr.length === 3 && +numStr[1] === 1) {
    word = fromOneToNineteen[numStr[0]] + ' hundred ' + fromOneToNineteen[+(numStr[1] + numStr[2])];
  } else {
    word = tens[numStr[0]] + ' ' + fromOneToNineteen[numStr[1]]; 
  }

  return word.trim();
}
