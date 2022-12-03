var fs = require('fs')

fs.readFile('input.txt', 'utf8', function (err: any, data: any) {
    if (err) throw err;
    const lines = data.split('\n');

    const player1 = {
        A: 1, //rock
        B: 2, //paper
        C: 3, //scissors
    }

    const player2 = {
        X: 1, //rock
        Y: 2, //paper
        Z: 3, //scissors
    }
    //winning combinations
    // A beats Z
    // B beats X
    // C beats Y


    // X beats C
    // Y beats A
    // Z beats B

    let myScore = 0
    for (let index = 0; index < lines.length; index++) {
        const [ply1, ply2] = lines[index].split(' ');

        if (ply1 === 'A' && ply2 === 'Z') {
            // loose
        } else if (ply1 === 'B' && ply2 === 'X') {
            // loose
        } else if (ply1 === 'C' && ply2 === 'Y') {
            // loose
        } else if (ply1 === 'A' && ply2 === 'X') {
            // draw
            //myScore += 3
        } else if (ply1 === 'B' && ply2 === 'Y') {
            // draw
            //myScore += 3
        } else if (ply1 === 'C' && ply2 === 'Z') {
            // draw
            //myScore += 3
        }
        else {
            // win
            //myScore += 6
        }

        if (ply2 === 'X') {
            // loose
            if (ply1 === 'A') {
                myScore += 3 //y beats a
            } else if (ply1 === 'B') {
                myScore += 1 //z beats b
            }
            else if (ply1 === 'C') {
                myScore += 2 //x beats c
            }
            myScore += 0
        }
        if (ply2 === 'Y') {
            // draw
            if (ply1 === 'A') {
                myScore += 1 //y beats a
            } else if (ply1 === 'B') {
                myScore += 2 //z beats b
            }
            else if (ply1 === 'C') {
                myScore += 3 //x beats c
            }
            myScore += 3
        }
        if (ply2 === 'Z') {
            // need to win
            if (ply1 === 'A') {
                myScore += 2 //y beats a
            } else if (ply1 === 'B') {
                myScore += 3 //z beats b
            }
            else if (ply1 === 'C') {
                myScore += 1 //x beats c
            }

            myScore += 6
        }
    }

    console.log(myScore)

});