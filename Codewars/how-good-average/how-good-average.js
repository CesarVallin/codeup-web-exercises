console.log(`hello from how-good-average.js`);

function betterThanAverage(classPoints, yourPoints) {
    // Your code here

    let totalScores = 0;
    let totalGrades = 0;
    for (let i = 0; i < classPoints.length; i++) {
        totalScores += classPoints[i];
        totalGrades++;
    }

    let average = totalScores / totalGrades;
    if (yourPoints > average) {
        return true;
    }
    return false;

}