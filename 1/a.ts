var fs = require('fs')

fs.readFile('input.txt', 'utf8', function (err: any, data: any) {
    if (err) throw err;
    const lines = data.split('\n');
    const elfs = new Map<string, number>();
    let elfnumber = 1
    let calorieSeg = 0
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].length > 0) {
            calorieSeg += parseInt(lines[i])
            elfs.set(`${elfnumber}`, calorieSeg);
        } else {
            calorieSeg = 0
            elfnumber++
        }
    }
    let maxcal = []
    for (let [key, value] of elfs) {
        maxcal.push(value)
    }

    const sorted = maxcal.sort((a, b) => b - a);

    // Maximum calorie Elf count
    console.log(sorted[0])

    let totalcalCount = 0
    for (let i = 0; i < 3; i++) {
        totalcalCount += sorted[i]
    }

    // Final count of 3 most calorie carrying elfs
    console.log(totalcalCount)

});