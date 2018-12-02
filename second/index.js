const fs = require("fs");
const boxIds = fs.readFileSync("./input.txt", "utf8").split("\n");

function getChecksumOfBoxIds(boxIds) {
  let idsWithTwoLettersCount = 0,
    idsWithThreeLettersCount = 0;

  for (const id of boxIds) {
    const letters = new Set(id);

    let foundTwo = false,
      foundThree = false;

    for (let letter of letters) {
      const count = id.split(letter).length - 1;

      if (count === 2 && !foundTwo) {
        idsWithTwoLettersCount++;
        foundTwo = true;
      } else if (count === 3 && !foundThree) {
        idsWithThreeLettersCount++;
        foundThree = true;
      }

      if (foundTwo && foundThree) {
        break;
      }
    }
  }
  return idsWithTwoLettersCount * idsWithThreeLettersCount;
}

function getSimilarBoxIds(boxIds) {
  for (const id of boxIds) {
    for (const innerId of boxIds) {
      if (id === innerId) {
        continue;
      }
      const diff = getDiffLettersCount(id, innerId);
      if (diff === 1) {
        return getSimilarLetters(id, innerId);
      }
    }
  }
}

function getDiffLettersCount(word1, word2) {
  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diff++;
    }
  }

  return diff;
}

function getSimilarLetters(word1, word2) {
  let letters = "";
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      letters += word1[i];
    }
  }

  return letters;
}

console.log(`Checksum is: ${getChecksumOfBoxIds(boxIds)}`);
console.log(`Similar letters are: ${getSimilarBoxIds(boxIds)}`);
