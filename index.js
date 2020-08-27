#!/usr/bin/env node
const program = require('commander');
var process = require('child_process');
program.version('1.0.5', '-v, --version')
    .command('init <name>')
    .action((name) => {
        console.log('clone template ...');
        process.exec('git clone https://github.com/flzCoder/vue-template.git ' + name, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            console.log(stdout);
            console.log('clone success');
        });
    });
program.parse(process.argv);
