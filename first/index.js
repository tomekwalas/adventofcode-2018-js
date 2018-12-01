const fs = require("fs");

function getFrequency(frequencies) {
  let totalFrequency = 0;
  for (const frequencyString of frequencies) {
    totalFrequency += parseInt(frequencyString);
  }

  return totalFrequency;
}

function getFirstDuplicatedFrequency(frequencies) {
  let totalFrequency = 0;
  const set = new Set();
  while (true) {
    for (const frequencyString of frequencies) {
      totalFrequency += parseInt(frequencyString);
      if (set.has(totalFrequency)) {
        return totalFrequency;
      }
      set.add(totalFrequency);
    }
  }
}

const frequencies = fs.readFileSync("./input.txt", "utf8").split("\n");
const totalFrequency = getFrequency(frequencies);
const firstDuplicatedFrequency = getFirstDuplicatedFrequency(frequencies);

console.log(`BIP BOP --- frequency is: ${totalFrequency}`);
console.log(`BIP BOP --- duplicated frequency is: ${firstDuplicatedFrequency}`);
