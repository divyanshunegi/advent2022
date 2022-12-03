// we need to find the common badge in 3 lines of combined as a group
// and sum based on previoud problem

var fs = require('fs')

fs.readFile('input.txt', 'utf8', function (err: any, data: any) {
    if (err) throw err;
    const lines = data.split('\n');

    let totalCount = 0
    const chunkedArray = []
    let chunks = []
    let chunkCount = 0
    for (let index = 0; index < lines.length; index++) {

        chunks.push(lines[index]);
        chunkCount++

        if (chunkCount === 3) {
            chunkedArray.push(chunks)
            chunkCount = 0
            chunks = []
        }

    }

    // loop into the chunked array and find common in all three array elements

    for (let index = 0; index < chunkedArray.length; index++) {
        const element = chunkedArray[index];
        const common = findCommonElement(element[0],element[1],element[2])
        if (common.charCodeAt(0) <= 122 && common.charCodeAt(0) >= 97) {
            // this is a-z codes
            const priorityCount = common.charCodeAt(0) - 96
            console.log(common,priorityCount)
            totalCount += priorityCount;
        }

        if (common.charCodeAt(0) <= 90 && common.charCodeAt(0) >= 65) {
            // this is A-Z codes
            const priorityCount = common.charCodeAt(0) - 64 + 26 // A => 650-64=1+26 = 27
            console.log(common,priorityCount)
            totalCount += priorityCount;
        }
    }

    console.log(totalCount);

});

const findCommonElement = (line1: string, line2: string, line3: string) => {
    const commonInline2 = line1.split('').filter((a) => line2.includes(a))
    const commmonInAll = commonInline2.filter((a) => line3.includes(a));
    return commmonInAll[0];
}