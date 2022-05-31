/*
 * Program: Reading a parameters send on command line.
 * Author: Alan Alencar
 * Date Create: 30 May 2022
 * Remarks: type on command line: node echo.js <string>[ <string> ...]
 */

console.time('Execute in')
const { argv } = require('node:process');
const os = require('os');

/* 
 * argv sempre irá conter dois elementos:
 * 1° que irá conter o caminho até o executável do node.js ou node.exe
 * 2° que é o caminho até o programa fonte. 
 */
 if (argv.length > 2) {
    argv.forEach((val, index) => {
        index >= 2 ? console.log(`${index -1}: ${val}`) : null;
    });
    console.log(`🏁 Hostname: ${os.hostname} version ${os.version} -> Exit code 0`); 
 } else {
    console.error('💀 type "node echo.js <menssage>", eg: node echo.js "Hello World"\nExit code -1');
 }
 console.timeEnd('Execute in');

// Fim - Alan Alencar