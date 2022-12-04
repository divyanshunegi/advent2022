var fs = require('fs')

fs.readFile('input.txt', 'utf8', function (err: any, data: any) {
    if (err) throw err;
    const lines = data.split('\n');

    let overlapCount = 0
    for (let index = 0; index < lines.length; index++) {
        const pairs = lines[index].split(',');
        const range1 = pairs[0].split('-'); // 4-6
        const range2 = pairs[1].split('-'); // 6-6

        const range1Start = parseInt(range1[0]);
        const range1End = parseInt(range1[1]);

        const range2Start = parseInt(range2[0]);
        const range2End = parseInt(range2[1]);

        if (range1Start <= range2Start && range1End >= range2End) {
            console.log(`${range1Start}-${range1End}`, `${range2Start}-${range2End}`);
            overlapCount++;
        } else if (range1Start >= range2Start && range1End <= range2End) {
            console.log(`${range1Start}-${range1End}`, `${range2Start}-${range2End}`);
            overlapCount++;
        } else if (range1Start >= range2Start && range1Start <= range2End) {
            console.log(`${range1Start}-${range1End}`, `${range2Start}-${range2End}`);
            overlapCount++;
        } else if (range1End >= range2Start && range1End <= range2End) {
            console.log(`${range1Start}-${range1End}`, `${range2Start}-${range2End}`);
            overlapCount++;
        }

    }

    console.log(overlapCount);
});