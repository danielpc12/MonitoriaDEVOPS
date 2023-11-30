function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sequence = [];
for (var i = 0; i < 10; i++) {
    var randomNumber = getRandomNumber(1, 100);
    sequence.push(randomNumber);
}

console.log(sequence);
