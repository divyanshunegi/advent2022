var fs = require('fs')

fs.readFile('input.txt', 'utf8', function (err: any, data: any) {
    if (err) throw err;
    const lines = data.split('\n');

    let totalCount = 0
    for (let index = 0; index < lines.length; index++) {
        const element = lines[index];
        // split element into 2 half
        const firstHalf = element.slice(0, element.length / 2);
        const secondHalf = element.slice(element.length / 2, element.length);

        // find the element which is commmon in both halfs (quite high complexity right now with O(n^2) can be O(n) if we make map (Object)
        // TODO the input can have multiple common as well, that case is not handled
        const commonElement = firstHalf.split('').filter((char: any) => secondHalf.includes(char))[0];
        console.log(commonElement);
        // find the value of each commonElement based on priority assigned
        if (commonElement.charCodeAt(0) <= 122 && commonElement.charCodeAt(0) >= 97) {
            // this is a-z codes
            const priorityCount = commonElement.charCodeAt(0) - 96
            console.log(commonElement,priorityCount)
            totalCount += priorityCount;
        }

        if (commonElement.charCodeAt(0) <= 90 && commonElement.charCodeAt(0) >= 65) {
            // this is A-Z codes
            const priorityCount = commonElement.charCodeAt(0) - 64 + 26 // A => 650-64=1+26 = 27
            console.log(commonElement,priorityCount)
            totalCount += priorityCount;
        }
    }

    console.log(totalCount);

});