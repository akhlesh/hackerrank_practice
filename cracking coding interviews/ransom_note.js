'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const ms = readLine().split(' ');

    const rs = readLine().split(' ');

    let msMap = {},
        found = true,
        i = 0;
    ms.forEach(m => {
        const mapValue = msMap[m];
        msMap[m] = mapValue ? mapValue + 1 : 1;
    });

    while (found && i < rs.length) {
        const mapVal = msMap[rs[i]];
        if (mapVal && mapVal > 0) {
            msMap[rs[i]] = mapVal - 1;
        } else {
            found = false;
        }
        i++;
    }

    console.log(found ? 'Yes' : 'No');
}