var rolls = new Array(21);
var currentRoll = 0;

function roll(pins) {
    rolls[currentRoll++] = pins;
}

function score() {
    var score = 0;
    var frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
        if (isStrike(frameIndex)) {
            score += 10 + strikeBonus(frameIndex);
            frameIndex++;
        } else if (isSpare(frameIndex)) {
            
            score += 10 + spareBonus(frameIndex);
            frameIndex += 2;
        } else {
            score += sumOfPointsInFrame(frameIndex);
            frameIndex += 2;
        }
    }
    return score;
}

function isStrike(frameIndex) {
    return rolls[frameIndex] == 10;
}

function sumOfPointsInFrame(frameIndex) {
    return rolls[frameIndex] + rolls[frameIndex + 1];
}

function spareBonus(frameIndex) {
    return rolls[frameIndex + 2];
}

function strikeBonus(frameIndex) {
    console.log(rolls[frameIndex + 1] + rolls[frameIndex + 2]);
    return rolls[frameIndex + 1] + rolls[frameIndex + 2];
}

function isSpare(frameIndex) {
    return sumOfPointsInFrame(frameIndex) == 10;
}

function rollMany(n, pins){
    for (var i = 0; i < n; i++) {
        roll(pins);
    }
}

function rollStrike(){
    roll(10);
}

rollStrike();

roll(3);

roll(4);
rollMany(16,0);
console.log(score());