const MAX_GRADE = 360;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomGrade() {
    return getRandomInt(MAX_GRADE + 1);
}

function getRandomPosition(){
    return {
        x:  getRandomGrade(),
        y:  getRandomGrade()
    }
}

module.exports = { getRandomInt, getRandomGrade, getRandomPosition };