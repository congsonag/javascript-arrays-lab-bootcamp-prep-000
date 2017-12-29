const app = "I don't do much."
var kittens = []

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
